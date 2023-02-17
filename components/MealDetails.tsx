import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


export type props = {
    duration: number | undefined,
    complexity: string | undefined,
    
    affordability: string | undefined,
    textStyle: Object 
}

const MealDetails: React.FC<props> = ({ duration, complexity, affordability, textStyle }) => {
    return (<View style={styles.detailsContainer}>
                        <Text style={[styles.detailsItem, textStyle]}> { duration } m</Text>
                        <Text style={[styles.detailsItem, textStyle]}>{ complexity?.toUpperCase() }</Text>
                        <Text style={[styles.detailsItem, textStyle]}>{ affordability?.toUpperCase() }</Text>
             </View>)
}

const styles = StyleSheet.create({
      detailsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
                margin: 8

    },
    detailsItem: {
        flex: 1,
        fontWeight: 'bold'
    }
})

export default MealDetails