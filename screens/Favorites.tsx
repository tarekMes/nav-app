import React from 'react'
import { View, Text , StyleSheet} from "react-native";
import MealsList from '../components/MealList/MealsList';
import { FavoritesContext } from '../store/context/favorites-context';
import { MEALS } from '../data/data';
import Meal from '../models/Meal';


export type props =   {
    navigation: any  ,
}


const Favorites: React.FC<props> = ({ navigation }) => {
    
    const [favoriteMeals, setfavoriteMeals] = React.useState<Meal[]>([])
    const favoritMealsContext = React.useContext(FavoritesContext)
    
    React.useLayoutEffect(() => {
        setfavoriteMeals( MEALS.filter(e => favoritMealsContext.ids.includes(e.id)))
    }, [MEALS])
    

    if (favoriteMeals.length == 0) {
        return ( 
            <View style={styles.rootContainer}>
                <Text style={styles.text}>
                    You Have no favorite meals yet.
                </Text>
            </View>
        )
    } else {
         return (
                <MealsList navigation={navigation} categoryId='favorites' displayedMeals={favoriteMeals} />
            ) 
           
    }
   
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }, 
    text: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold'
    }
})


export default Favorites