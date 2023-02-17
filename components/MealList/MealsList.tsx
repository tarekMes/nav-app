import React from "react";
import { View, StyleSheet, Text, FlatList } from 'react-native'
import MealItem from "../MealItem";
import { useNavigation } from "@react-navigation/native";
import Meal from "../../models/Meal";

interface props {
    categoryId: string,
    displayedMeals: Meal[],
    navigation: any
}

const MealsList: React.FC<props> = ({categoryId, displayedMeals, navigation}) => {

    const renderMeals = (renderItem: any) => {

        const onPressHandler = () => {
            
             navigation.navigate('DetailsScreen', {mealId: renderItem.item.id })
        }

        const mealItemProps = {
            index: renderItem.index,
            title:renderItem.item.title,
            imageUrl:renderItem.item.imageUrl,
            affordability:renderItem.item.affordability,
            duration:renderItem.item.duration,
            complexity:renderItem.item.complexity,
        }

        return <MealItem {...mealItemProps}  onPress={onPressHandler}/>
    }

    return (<View>
        {/* <Text>MealOverview {categoryId}</Text> */}
        <FlatList data={displayedMeals} renderItem={renderMeals} />
    </View>)
}

const styles = StyleSheet.create({

})

export default MealsList