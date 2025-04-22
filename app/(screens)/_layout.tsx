import {Stack} from "expo-router"
import {MaterialIcons} from "@expo/vector-icons"
import {useAuth} from "@/context/AuthContext"
import {TouchableOpacity} from "react-native"

const _layout = () => {
    const auth = useAuth()
    return (
        <Stack>
            <Stack.Screen name="[id]" options={{title: "Info"}}/>
            <Stack.Screen
                name="home"
                options={{
                    title: "Posts",
                    headerBackVisible: false,
                    headerRight: () => {
                        return (
                            <TouchableOpacity onPress={() => auth.onLogout()}>
                                <MaterialIcons
                                    name="logout"
                                    size={24} color="red"
                                />
                            </TouchableOpacity>
                        )
                    }
                }}
            />
        </Stack>
    )
}

export default _layout


