import {AuthData} from "@/interfaces/Auth"
import {useState} from "react"
import {FIREBASE_AUTH} from "@/lib/FirebaseConfig"
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, UserCredential} from "@firebase/auth"
import StorePreferences, {SecureStorePersistence} from "@/services/util/StorePreferences"
import {useRouter} from "expo-router"

export const useLogin = () => {
    const router = useRouter()
    const [loading, setLoading] = useState<boolean>(false)
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
    const auth = FIREBASE_AUTH

    const onLogin = async (data: AuthData) => {
        console.log(data.email, data.password)
        setLoading(true)
        try {
            const response: UserCredential = await signInWithEmailAndPassword(auth, data.email, data.password)
            const tokenResult = await response.user.getIdTokenResult()
            await SecureStorePersistence.saveValue(StorePreferences.AUTH_TOKEN, tokenResult.token)
            router.navigate("/(screens)/home")
            setIsLoggedIn(true)
        } catch (e) {
            console.log("Login failed")
        } finally {
            setLoading(false)
        }
    }

    return {onLogin, loading, isLoggedIn}
}

export const useRegister = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const auth = FIREBASE_AUTH

    const onRegister = async (data: AuthData) => {
        setLoading(true)
        try {
            const response: UserCredential = await createUserWithEmailAndPassword(auth, data.email, data.password)
            if (response.user !== null) {
                const token = response.user.refreshToken
                await SecureStorePersistence.saveValue(StorePreferences.AUTH_TOKEN, token)
            }
        } catch (e) {
            console.log("Registration failed", e)
        } finally {
            setLoading(false)
        }
    }

    return {onRegister, loading}
}

export const useLogout = () => {
    const router = useRouter()
    const onLogout = async () => {
        await Promise.all([
            FIREBASE_AUTH.signOut(),
            SecureStorePersistence.removeValue(StorePreferences.AUTH_TOKEN)
        ])
        router.navigate("/signIn")
    }
    return {onLogout}
}

