import {useMutation, useQueryClient} from "@tanstack/react-query";
import {createPost, deletePost, updatePost} from "@/services/api/postApi";
import {QUERY_KEY_POSTS} from "@/interfaces/Post";


export const useCreate = () => {
    const queryClient = useQueryClient();
    const {mutate: addPost, error} = useMutation({
        mutationFn: createPost,
        onMutate: async (post) => {
            await queryClient.cancelQueries({queryKey: QUERY_KEY_POSTS.ALL_POST})
            const previousPosts = queryClient.getQueryData(QUERY_KEY_POSTS.ALL_POST)
            queryClient.setQueryData(QUERY_KEY_POSTS.ALL_POST, (old: any) => [...old, {
                id: [...old].length + 1,
                title: post.title,
                body: post.body
            }])
            return {previousPosts}
        },
        onSuccess: (data) => {
            console.log("Success", data)
        }
    })
    return {addPost, error}
}

export const useUpdate = () => {
    const queryClient = useQueryClient();
    const {mutate: editPost, error} = useMutation({
        mutationFn: updatePost,
        onMutate: async (post) => {

            await queryClient.cancelQueries({queryKey: QUERY_KEY_POSTS.ALL_POST})
            const previousPosts = queryClient.getQueryData(QUERY_KEY_POSTS.ALL_POST)
            queryClient.setQueryData(QUERY_KEY_POSTS.ALL_POST, (old: any) =>
                old ? old.map((p: any) => p.id === post.id ? {...p, ...post} : p) : []
            )
            return {previousPosts}
        },
        onSuccess: (data) => {
            console.log("Success", data)
        }
    })
    return {editPost, error}
}

export const useDelete = () => {
    const queryClient = useQueryClient();
    const {mutate: removePost, error} = useMutation({
        mutationFn: deletePost,
        onMutate: async (id) => {
            await queryClient.cancelQueries({queryKey: QUERY_KEY_POSTS.ALL_POST})
            const previousPosts = queryClient.getQueryData(QUERY_KEY_POSTS.ALL_POST)
            queryClient.setQueryData(QUERY_KEY_POSTS.ALL_POST, (old: any) => old.filter((post: any) => post.id !== id))
            return {previousPosts}
        },
        onSuccess: (data) => {
            console.log("Success", data)
        }
    })

    return {removePost, error}
}