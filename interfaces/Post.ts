export interface Post {
    userId: number,
    id: number,
    title: string,
    body: string
}

export interface propPostDetails {
    title: string
    body: string
    onPress?: () => void
    onEdit: () => void
    onDelete: () => void
}

export const QUERY_KEY_POSTS = {
    ALL_POST: ["posts"],
    SINGLE_POST: (id: number) => ["posts", id]
}
