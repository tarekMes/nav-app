import React, { Children } from "react";
import { View, Text, StyleSheet } from "react-native";

export type props = {
children: string
}

const Subtitle:React.FC<props> = ({children }) => {
    return (<View style={styles.subtitleContainer}>
                <Text style={styles.subtitle}>{children}</Text>
            </View>)
}

const styles = StyleSheet.create({
    subtitle: {
        color: '#e2b497',
        fontSize: 18,
        fontWeight: 'bold',
        margin: 4,
        textAlign: 'center',
       
    },
    subtitleContainer: {
        padding: 6,
        margin: 18,
        marginHorizontal: 12,
        borderBottomWidth: 2,
        borderBottomColor: 'white',
    }
})
export default Subtitle 