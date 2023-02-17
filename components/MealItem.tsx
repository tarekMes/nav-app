import React from 'react'
import { View, Text, StyleSheet, Pressable, Image, Platform } from 'react-native'
import MealDetails from './MealDetails'


export type props = {
    index:number,
    title: string,
    imageUrl: string,
    duration: number,
    complexity: string,
    affordability: string,
    onPress: any
}


const MealItem: React.FC<props> = ({index, title, imageUrl, duration, complexity, affordability, onPress}) => {
    return (
        <View key={index} style={styles.mealItem}>
            <Pressable android_ripple={{color: '#ccc'}} onPress={onPress}>
                <View>
                    <View>
                        <Image source={{ uri: imageUrl }} style={ styles.image } />
                        <Text style={styles.title}> {title} </Text>
                    </View>
                    <MealDetails duration={duration}
                        complexity={complexity}
                        affordability={affordability}
                        textStyle={{}}/>
                    
                </View>
            </Pressable>
            
        </View>
    )
}

const styles = StyleSheet.create({
    mealItem: { 
        marginHorizontal: 16,
        marginVertical: 10,
        borderRadius: 12,
        backgroundColor: 'white',
        paddingVertical: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    },
    innerMealItem: {
        borderRadius: 12,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    },
    image: {
        width: '100%',
        height: 200
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8
    }
})

export default MealItem