import {View, Text, TextInput, TouchableOpacity} from 'react-native'
import React, {useContext, useState} from 'react'
import {Link} from "expo-router";
import {AuthContext} from "@/context/AuthContext";

const SignIn = () => {
    const auth = useContext(AuthContext)
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    return (
        <>
            <View className="flex-1 items-center justify-center p-4">
                <Text style={{ fontSize: 26 }} className="text-7xl font-bold m-2 p-4"> Sign Up </Text>
                <TextInput
                    className="w-full border border-gray-300 rounded-md m-1 p-4 mb-2"
                    placeholder="Email"
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={email}
                    onChangeText={(text: string) => {
                        setEmail(text)
                    }}
                />
                <TextInput
                    secureTextEntry={true}
                    className="w-full border border-gray-300 rounded-md m-1 p-4 mb-2"
                    placeholder="Password"
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={password}
                    onChangeText={(text: string) => {
                        setPassword(text)
                    }}
                />

                <TouchableOpacity
                    className="bg-blue-500 w-full items-center p-4 m-2 rounded-md"
                    activeOpacity={0.8}
                    onPress={() => {
                        auth?.onRegister({email, password})
                    }}
                >
                    <Text className="text-white font-bold">Sign Up</Text>
                </TouchableOpacity>
                <View className="flex-row w-full justify-end m-2">
                    <Link href="/sign-in">Sign In account</Link>
                </View>
            </View>
        </>
    )
}
export default SignIn
