import {Stack} from "expo-router"
import {useReactQueryDevTools} from '@dev-plugins/react-query'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import {GestureHandlerRootView} from "react-native-gesture-handler"
import {BottomSheetModalProvider} from "@gorhom/bottom-sheet"
import {AuthProvider} from "@/context/AuthContext"

const queryClient = new QueryClient();
const RootLayout = () => {
    useReactQueryDevTools(queryClient)
    return (
        <AuthProvider>
            <GestureHandlerRootView className="flex-1 bg-white">
                <BottomSheetModalProvider>
                    <QueryClientProvider client={queryClient}>
                        <Stack screenOptions={{headerShown: false}}>
                            <Stack.Screen name="index" />
                            <Stack.Screen name="(auth)" />
                            <Stack.Screen name="(screens)" />
                        </Stack>
                    </QueryClientProvider>
                </BottomSheetModalProvider>
            </GestureHandlerRootView>
        </AuthProvider>
    )
}

export default RootLayout
