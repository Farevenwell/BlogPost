import {ReactNode} from "react";

export interface AuthData {
    email: string
    password: string
}

export interface AuthContextProps {
    isAuthenticated: boolean
    isLoading: boolean
    onLogin: (authData: AuthData) => void
    onRegister: (authData: AuthData) => void
    onLogout: () => void
}

export interface AuthProviderProps {
    children: ReactNode
}