import {View, Text} from 'react-native'
import React from 'react'
import {useLocalSearchParams} from "expo-router"
import {usePostById} from "@/services/queries/posts/usePostQuery";

const Id = () => {
    const {id} = useLocalSearchParams<{ id: string }>()
    const parseId = !isNaN(Number(id)) ? parseInt(id) : 0
    const {data: post} = usePostById(parseId)
    return (
        <>
            <View className="m-2.5 p-4 bg-white rounded-lg shadow-md">
                <Text className="text-lg font-bold mb-2">{post?.title}</Text>
                <Text className="color-gray-400">{post?.body}</Text>
            </View>
        </>
    )
}
export default Id
