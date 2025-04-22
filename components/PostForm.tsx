import {View, Text, TextInput, TouchableOpacity} from 'react-native'
import React, {useEffect, useState} from 'react'
import {Post} from "@/interfaces/Post";

interface PropsForm {
    post?: Post
    onSubmit: (post: Post) => void
}

const PostForm = (props: PropsForm) => {
    const [title, setTitle] = useState<string>(props.post?.title ?? "")
    const [desc, setDesc] = useState<string>(props.post?.body ?? "")

    useEffect(() => {
        setTitle(props.post?.title ?? "")
        setDesc(props.post?.body ?? "")
    }, [])
    return (
        <View className="flex-col m-5 items-center gap-4">
            <TextInput
                className="w-full border border-gray-300 rounded-md m-1 p-4 mb-2"
                placeholder="Add title..."
                autoCapitalize="none"
                autoCorrect={false}
                value={title}
                onChangeText={(text) => {
                    setTitle(text)
                }}
            />
            <TextInput
                multiline
                numberOfLines={4}
                className="w-full border border-gray-300 rounded-md m-1 p-4 mb-2"
                placeholder="Add a description..."
                autoCapitalize="none"
                autoCorrect={false}
                value={desc}
                onChangeText={(text) => {
                    setDesc(text)
                }}
            />
            <>
                <TouchableOpacity
                    className="bg-blue-500 w-full items-center p-4 m-2 rounded-md"
                    activeOpacity={0.8}
                    onPress={() => {
                        if (!title || !desc) {
                            return
                        } else {
                            props.onSubmit({
                                id: props.post?.id ?? 0,
                                title: title,
                                body: desc,
                                userId: props.post?.userId ?? 0
                            } as Post)
                        }
                    }}
                >
                    <Text className="text-white font-bold">Save</Text>
                </TouchableOpacity>
            </>
        </View>
    )
}


export default PostForm
