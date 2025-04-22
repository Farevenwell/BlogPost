import React, {useContext, createContext,} from "react"
import {AuthContextProps, AuthProviderProps} from "@/interfaces/Auth"
import {useLogin, useLogout, useRegister} from "@/services/api/authApi"

const AuthContext = createContext<AuthContextProps | undefined>(undefined)

const AuthProvider = (props: AuthProviderProps) => {
    const {onLogin} = useLogin()
    const {onLogout} = useLogout()
    const {onRegister} = useRegister()
    const contextData = {onLogin, onRegister, onLogout} as AuthContextProps

    return (
        <AuthContext.Provider value={contextData}>
            { props.children }
        </AuthContext.Provider>
    )
}

const useAuth = (): AuthContextProps => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error("No Context")
    }
    return context
}

export {AuthContext, AuthProvider, useAuth}