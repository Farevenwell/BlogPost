import {Post} from "@/interfaces/Post"
import {apiClient} from "@/services/api/client"


export const getPosts = async (): Promise<Post[]> => {
    try {
        const response = await apiClient.get('/posts')
        const posts = response.data as Post[]
        return posts.slice(0, 10)
    } catch (error: any) {
        if (error.response) {
            throw new Error(`Failed to fetch posts: ${error.response.status} ${error.response.statusText}`)
        } else if (error.request) {
            throw new Error('Failed to fetch posts: No response received from server')
        } else {
            throw new Error(`Failed to fetch posts: ${error.message}`)
        }
    }
}

export const getPostById = async (id: number): Promise<Post | null> => {
    return await apiClient.get(`/posts/${id}`)
        .then(response => response.data as Post)
        .catch(error => {
            if (error.response) {
                throw new Error(`Failed to fetch post: ${error.response.status} ${error.response.statusText}`)
            } else if (error.request) {
                throw new Error('Failed to fetch post: No response received from server')
            } else {
                throw new Error(`Failed to fetch post: ${error.message}`)
            }
        })
}

export const createPost = async (post: Post): Promise<Post | null> => {
    return await apiClient.post(`/posts`, {
        title: post.title,
        body: post.body,
        userId: post.userId
    })
        .then(response => response.data as Post)
        .catch(error => {
            if (error.response) {
                throw new Error(`Failed to create post: ${error.response.status} ${error.response.statusText}`)
            } else if (error.request) {
                throw new Error('Failed to create post: No response received from server')
            } else {
                throw new Error(`Failed to create post: ${error.message}`)
            }
        })
}

export const updatePost = async (post: Post) => {
    return await apiClient.patch(`/posts/${post.id}`, {
        title: post.title,
        body: post.body
    })
        .then(response => response.data as Post)
        .catch(error => {
            if (error.response) {
                throw new Error(`Failed to update post: ${error.response.status} ${error.response.statusText}`)
            } else if (error.request) {
                throw new Error('Failed to update post: No response received from server')
            } else {
                throw new Error(`Failed to update post: ${error.message}`)
            }
        })

}


export const deletePost = async (id: number): Promise<boolean> => {
    return await apiClient.delete(`/posts/${id}`)
        .then(response => response.data as boolean)
        .catch(error => {
            if (error.response) {
                throw new Error(`Failed to delete post: ${error.response.status} ${error.response.statusText}`)
            } else if (error.request) {
                throw new Error('Failed to delete post: No response received from server')
            } else {
                throw new Error(`Failed to delete post: ${error.message}`)
            }
        })
}
