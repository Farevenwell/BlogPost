import {View, Text} from 'react-native'
import React, {memo} from 'react'
import {propPostDetails} from "@/interfaces/Post";
import {MaterialIcons} from "@expo/vector-icons";
import {usePostById} from "@/services/queries/posts/usePostQuery";

const PostDetails = (props: propPostDetails) => {
    return (
        <View className="bg-white rounded-lg gap-2 m-2 shadow-md p-4">
            <Text className="text-lg font-bold mb-2">{props?.title}</Text>
            <Text className="text-gray-600 mb-4 justify-stretch" numberOfLines={3}>{props?.body}</Text>

            <View className="flex-row items-center justify-end gap-2">
                <MaterialIcons
                    className="bg-blue-600 p-2 rounded-full"
                    onPress={props.onEdit}
                    name="edit" size={18}
                    color="white"
                />
                <MaterialIcons
                    className="bg-red-600 p-2 rounded-full"
                    onPress={props.onDelete}
                    name="delete" size={18}
                    color="white"
                />
            </View>
        </View>
    )
}
export default memo(PostDetails)
