import React from "react";
import { View, Pressable, Text, StyleSheet } from "react-native";
import Colors from "../../util/Colors";

export type props = {
    children: string | JSX.Element ,
    onPress: any
}

const PrimaryButton: React.FC<props> = ({children, onPress}) => {
    return (
        <View>
            <Pressable onPress={onPress} android_ripple={{color: Colors.primary500}} style={styles.buttonContainer}>
                <View>
                    <Text style={styles.text}>
                        {children}
                    </Text>
                </View>
            </Pressable>
        </View>
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

export default PrimaryButton