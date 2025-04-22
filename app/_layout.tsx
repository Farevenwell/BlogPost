import {Stack} from "expo-router"
import {useReactQueryDevTools} from '@dev-plugins/react-query'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import {useColorScheme, StyleSheet} from "react-native"
import {Colors} from "@/constants/Colors"
import {GestureHandlerRootView} from "react-native-gesture-handler"
import {BottomSheetModalProvider} from "@gorhom/bottom-sheet"
import {AuthProvider} from "@/context/AuthContext";
import App from "@/app/index";

const queryClient = new QueryClient();
const RootLayout = () => {
    useReactQueryDevTools(queryClient)
    return (
        <AuthProvider>
            <GestureHandlerRootView className="flex-1 bg-white">
                <BottomSheetModalProvider>
                    <QueryClientProvider client={queryClient}>
                        <App />
                    </QueryClientProvider>
                </BottomSheetModalProvider>
            </GestureHandlerRootView>
        </AuthProvider>
    )
}

export default RootLayout
