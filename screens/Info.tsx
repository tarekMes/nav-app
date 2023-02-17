import React from 'react'
import { View, Text , StyleSheet, VirtualizedList} from "react-native";
import MealsList from '../components/MealList/MealsList';
import { FavoritesContext } from '../store/context/favorites-context';
import { MEALS } from '../data/data';
import Meal from '../models/Meal';

import { useSelector } from 'react-redux'

export type props =   {
    navigation: any  ,
}


const Info: React.FC<props> = ({ navigation }) => {
    
   const order = useSelector((state: any) => {
        return  state.order
    })
    console.log('====================================');
    console.log(order.orderItems.length , order.orderItems);
    console.log('====================================');

    if (order.orderItems.length == 0) {
        return ( 
            <View style={styles.rootContainer}>
                <Text style={styles.text}>
                    You Have no favorite meals yet.
                </Text>
            </View>
        )
    } else {
         return (
             <View>
                 {order.orderItems.map((item:any, index:any) => {
                     <View key={ index }>
                          <Text style={styles.text}>{ item.itemId}</Text>
                          <Text style={styles.text}>{ item.quantity}</Text>
                     </View>
                    
                 })}  
            </View>
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


export default Info