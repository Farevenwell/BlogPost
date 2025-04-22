import {View, Text, TextInput, TouchableOpacity} from 'react-native'
import React, {useContext, useState} from 'react'
import {Link, router, useRouter} from 'expo-router';
import AuthRepoApi from "@/services/api/authApi";

const SignIn = () => {
    const authApi = AuthRepoApi()
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    return (
        <>
            <View className="flex-1 items-center justify-center p-4">
                <Text style={{ fontSize: 26 }} className="text-7xl font-bold m-2 p-4"> Sign In </Text>
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
                        authApi.onLogin({ email, password })
                            .catch(e => console.log(e))
                    }}
                >
                    <Text className="text-white font-bold">Login</Text>
                </TouchableOpacity>

                <View className="flex-row w-full justify-end m-2">
                    <Link href="/sign-up">Sign Up account</Link>
                </View>
            </View>
        </>
    )
}
export default SignIn
