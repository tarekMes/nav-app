import React from "react";
import {
StyleSheet, 
} from 'react-native'
import { CATEGORIES, MEALS } from "../data/data";
import MealsList from "../components/MealList/MealsList";



export type props = {
    route: any,
    navigation: any
}

const MealOverview: React.FC<props> = ({ route, navigation }) => {
    
    const categoryId = route.params.categoryId
    
    const displayedMeals = MEALS.filter(e => {
        return e.categoryIds.indexOf(categoryId) != -1
    })
    const category = CATEGORIES.find((category) => {
        return category.id == categoryId
    })

    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: category ? category.title : 'general'
        })
    }, [categoryId, navigation])
   
    return (
        <MealsList categoryId={categoryId} displayedMeals={displayedMeals} navigation={ navigation } />

    )
}
const style = StyleSheet.create({
    container: {

    }
}) 


export default MealOverview