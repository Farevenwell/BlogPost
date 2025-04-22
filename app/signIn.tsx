import {View, Text, TextInput, TouchableOpacity} from 'react-native'
import React, {useState} from 'react'
import {useAuth} from "@/context/AuthContext";

const SignIn = () => {
    const auth  = useAuth()
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    return (
        <>
            <View className="flex-1 items-center justify-center p-4">
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
                        auth.onLogin({email, password})
                    }}
                >
                    <Text className="text-white font-bold">Login</Text>
                </TouchableOpacity>

                {/*<TouchableOpacity*/}
                {/*    className="bg-blue-500 w-full items-center p-4 m-2 rounded-md"*/}
                {/*    activeOpacity={0.8}*/}
                {/*    onPress={() => {*/}
                {/*        auth.onRegister({email, password})*/}
                {/*    }}*/}
                {/*>*/}
                {/*    <Text className="text-white font-bold">Sign Up</Text>*/}
                {/*</TouchableOpacity>*/}

            </View>
        </>
    )
}
export default SignIn
