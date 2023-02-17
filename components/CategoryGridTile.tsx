import React from 'react'
import {
    Pressable, View,
Text,
    StyleSheet,
Platform} from 'react-native'

export type props = {
    title: string,
    color: string,
    onPress: any
}


const CategoryCridTile: React.FC<props> = ({title, color, onPress}) => {
    return (
        <View style={[styles.gridItem, {backgroundColor: color}]}>
            <Pressable
                android_ripple={{ color: 'ccc' }}
                style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null]}
                onPress={onPress}>
                
                    <View style={styles.innerGridItem}>
                    <Text style={styles.title}>{title}</Text>    
                    
                    </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    },
    button: {
        flex: 1
    },
    buttonPressed: {
        opacity: .5
    },
    innerGridItem: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})

export default CategoryCridTile