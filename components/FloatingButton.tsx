import React from 'react'
import {MaterialIcons} from "@expo/vector-icons";

interface PropsFAB {
    onPress: () => void
}

const FloatingButton = (props: PropsFAB) => {
    return (
        <MaterialIcons
            className="absolute bottom-4 right-4 bg-blue-500 rounded-full p-4 shadow-md"
            onPress={props.onPress}
            name="add" size={28}
            color="white"
        />
    )
}
export default FloatingButton
