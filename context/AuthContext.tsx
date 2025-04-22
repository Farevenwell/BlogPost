import React, {createContext} from "react"
import {AuthContextProps, AuthProviderProps} from "@/interfaces/Auth"
import AuthRepoApi from "@/services/api/authApi"

import {ActivityIndicator, View} from "react-native";

const AuthContext = createContext<AuthContextProps | undefined>(undefined)

const AuthProvider = (props: AuthProviderProps) => {
    const { isAuthenticated, isLoading, onLogin, onLogout, onRegister} = AuthRepoApi()
    const contextData = {isAuthenticated, isLoading, onLogin, onRegister, onLogout} as AuthContextProps
    if (isLoading) {
        return (
            <View className="flex-1 items-center justify-center">
                <ActivityIndicator size="large" color="blue"/>
            </View>
        )
    }

    return (
        <AuthContext.Provider value={contextData}>
            {props.children}
        </AuthContext.Provider>
    )
}

export {AuthContext, AuthProvider}