import * as SecureStore from 'expo-secure-store'

export const SecureStorePersistence = {
    async getValue(key: string) {
        return await SecureStore.getItemAsync(key)
    },
    async saveValue(key: string, value: string) {
        await SecureStore.setItemAsync(key, value)
    },
    async removeValue(key: string) {
        await SecureStore.deleteItemAsync(key)
    },
}

const StorePreferences = {
    AUTH_TOKEN: "token"
}

export default StorePreferences