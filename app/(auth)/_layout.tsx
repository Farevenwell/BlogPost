import React, {useContext, useEffect, useState} from 'react'
import {Redirect, Stack} from 'expo-router'
import {AuthContext} from "@/context/AuthContext";
import StorePreferences, {SecureStorePersistence} from "@/services/util/StorePreferences";

const _Layout = () => {
    const [isAuthorized, setIsAuthorized] = useState(false)
    useEffect(() => {
        const checkToken = async () => {
            const token = await SecureStorePersistence.getValue(StorePreferences.AUTH_TOKEN)
            if (token !== null) {
                setIsAuthorized(true)
            }
        }
        checkToken()
            .catch(err => console.log(err))
    }, []);

    if (isAuthorized) {
        return <Redirect href="/home"/>;
    }
    return (
        <Stack screenOptions={{headerShown: false}}>
            <Stack.Screen name="sign-in"/>
            <Stack.Screen name="sign-up"/>
        </Stack>
    )
}
export default _Layout
