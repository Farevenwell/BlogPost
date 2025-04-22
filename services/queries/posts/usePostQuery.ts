import {getPostById, getPosts} from "@/services/api/postApi";
import {useQuery, useSuspenseQuery} from "@tanstack/react-query";
import {QUERY_KEY_POSTS} from "@/interfaces/Post";

export const usePosts = () => {
    return useSuspenseQuery({
        queryKey: QUERY_KEY_POSTS.ALL_POST,
        queryFn: getPosts,
    })
}

export const usePostById = (id: number) => {
    return useQuery({
        queryKey: QUERY_KEY_POSTS.SINGLE_POST(id),
        queryFn: () => getPostById(id)
    })
}