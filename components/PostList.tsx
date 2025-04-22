import {FlatList, View, Text, ActivityIndicator, TouchableOpacity} from 'react-native'
import {Post} from "@/interfaces/Post";
import PostDetails from "@/components/PostDetails";
import {useRouter} from "expo-router";
import {usePosts} from "@/services/queries/posts/usePostQuery";

interface PropList {
    onEdit: (post: Post) => void
    onDelete: (id: number) => void
}

const PostList = (props: PropList) => {
    const router = useRouter()
    const {data, isLoading, error} = usePosts()
    const nav = (id: number) => {
        return router.navigate({
            pathname: "/(screens)/[id]",
            params: {id: id}
        })
    }
    return (
        <>
            {isLoading ? (
                <View className="flex-1 items-center justify-center">
                    <ActivityIndicator size="large" color="gray"/>
                </View>
            ) : (
                <FlatList
                    data={data}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={item => item.id.toString()}
                    ListEmptyComponent={
                        <>
                            <View className="flex-1 items-center justify-center">
                                <Text className="text-gray-500 text-lg">No posts found</Text>
                            </View>
                        </>
                    }
                    renderItem={({item}) => {
                        return (
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => nav(item.id)}
                            >
                                <PostDetails
                                    title={item.title}
                                    body={item.body}
                                    onEdit={() => props.onEdit(item)}
                                    onDelete={() => props.onDelete(item.id)}
                                />
                            </TouchableOpacity>
                        )
                    }}
                />
            )}
        </>
    )
}

export default PostList
