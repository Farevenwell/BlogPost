import {Redirect, Stack, useRouter} from "expo-router"
import {MaterialIcons} from "@expo/vector-icons"
import {TouchableOpacity} from "react-native"
import AuthRepoApi from "@/services/api/authApi"

const _layout = () => {
    const authApi = AuthRepoApi()
    return (
        <Stack>
            <Stack.Screen name="[id]" options={{title: "Info"}}/>
            <Stack.Screen
                name="home"
                options={{
                    title: "Posts",
                    headerRight: () => {
                        return (
                            <TouchableOpacity onPress={() => authApi.onLogout().catch(err => console.log(err))}>
                                <MaterialIcons
                                    name="logout"
                                    size={24}
                                    color="red"
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


