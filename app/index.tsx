import {Stack, useRouter} from "expo-router";
import "@/global.css"
import StorePreferences, { SecureStorePersistence} from "@/services/util/StorePreferences";
import {useEffect} from "react";

const App = () => {
    const router = useRouter()
    useEffect(() => {
        SecureStorePersistence.getValue(StorePreferences.AUTH_TOKEN)
            .then(token  => {
                if(token === null) {
                    router.navigate("/signIn")
                } else {
                    router.navigate("/home")
                }
            })
    }, []);

    return (
        <Stack screenOptions={{headerShown: false}}>
            <Stack.Screen name="index" options={{headerShown: false}}/>
            <Stack.Screen name="signIn" options={{headerShown: false}}/>
        </Stack>
    )
}
export default App
