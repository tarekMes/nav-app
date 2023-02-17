import React from "react";
import { View, Pressable, Text, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import Colors from "../../util/Colors";

export type props = {
    onPress: any,
    name: any,
    color: string,
    size: number
}

const IconButton: React.FC<props> = ({ onPress, name, color, size }) => {
    return (
 
            <Pressable onPress={onPress} android_ripple={{color: Colors.primary500}} >
                <View>
                    <Ionicons name={ name ? name : "star"}  size={size ? size : 24} color={color ? color : Colors.primary200}/>
                </View>
            </Pressable>
      
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: Colors.primary200,
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 16,
        elevation: 4,
    },
    text: {
        color: Colors.primary600,
        fontWeight: 'bold',
        fontSize: 18
    }
})

export default IconButton