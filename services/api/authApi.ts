import {AuthData} from "@/interfaces/Auth"
import {useState} from "react"
import {FIREBASE_AUTH} from "@/lib/FirebaseConfig"
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, UserCredential} from "@firebase/auth"
import StorePreferences, {SecureStorePersistence} from "@/services/util/StorePreferences"
import {useRouter} from "expo-router";

const AuthRepoApi = () => {
    const router = useRouter()
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const auth = FIREBASE_AUTH

    const onLogin = async (data: AuthData) => {
        setIsLoading(true)
        try {
            const response: UserCredential = await signInWithEmailAndPassword(auth, data.email, data.password)
            const tokenResult = await response.user.getIdTokenResult()
            await SecureStorePersistence.saveValue(StorePreferences.AUTH_TOKEN, tokenResult.token)
            router.navigate("/(screens)/home")
            setIsAuthenticated(true)
        } catch (e) {
            console.log("Login failed", e)
        } finally {
            setIsLoading(false)
        }
    }

    const onRegister = async (data: AuthData) => {
        setIsLoading(true)
        try {
            const response: UserCredential = await createUserWithEmailAndPassword(auth, data.email, data.password)
            if (response.user !== null) {
                const tokenResult = await response.user.getIdTokenResult()
                await SecureStorePersistence.saveValue(StorePreferences.AUTH_TOKEN, tokenResult.token)
                router.navigate("/home")
                setIsAuthenticated(true)
            }
        } catch (e) {
            console.log("Registration failed", e)
        } finally {
            setIsLoading(false)
        }
    }

    const onLogout = async () => {
        await Promise.all([
            FIREBASE_AUTH.signOut(),
            SecureStorePersistence.removeValue(StorePreferences.AUTH_TOKEN)
        ])
        setIsAuthenticated(false)
        router.navigate("/sign-in")
    }
    return {isAuthenticated, isLoading, onLogin, onLogout, onRegister}
}

export default AuthRepoApi