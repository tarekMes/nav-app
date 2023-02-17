import React from 'react'
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { MEALS } from '../data/data';
import MealDetails from '../components/MealDetails';
import List from '../components/MealDetail/List';
import Subtitle from '../components/MealDetail/Subtitle';
import Colors from '../util/Colors';
import PrimaryButton from '../components/UI/PrimaryButton';
import IconButton from '../components/UI/IconButton';
import { FavoritesContext } from '../store/context/favorites-context';
import { TextInput } from 'react-native-gesture-handler';

import { Ionicons } from '@expo/vector-icons'


import { useSelector, useDispatch } from 'react-redux'
import { addorderItem, removeorderItem } from '../store/redux/store';


export type props = {
    navigation: any,
    route: any
}


const DetailsScreen: React.FC<props> = ({ navigation, route }) => {
    
    
    const order = useSelector((state: any) => {
        return  state.order
    })

    const dispatch = useDispatch()
    
    
    const favoriteMealCtx = React.useContext(FavoritesContext) 

    
    const mealId = route.params.mealId

   

    const meal = MEALS.find(meal => {
           return meal.id == mealId
    })   

    const mealIsFavorite = favoriteMealCtx.ids.includes(meal?.id)

     const headerButtonPressHandler = () => {
                if (mealIsFavorite) {
                        favoriteMealCtx.removeFavorite(meal?.id)
                } else {
                    favoriteMealCtx.addFavorite(meal?.id)
                }
    }

    React.useLayoutEffect(() => {
          
        navigation.setOptions({
            title: meal ? meal.title : 'Loading',
            headerRight: () => {
              return <IconButton name={ mealIsFavorite ? 'star' : 'star-outline'} color={Colors.primary200} size={24} onPress={headerButtonPressHandler} /> 
            }
          
        })



    }, [navigation, route, mealIsFavorite])




    const [orderNumber, setOrderNumber] = React.useState('0')

    const inc = () => {
         if (orderNumber == '99') {
            return
        }
        let value:any = parseInt(orderNumber) + 1
        setOrderNumber(value.toString())
    }
    const dec = () => {
        if (orderNumber == '0') {
            return
        }
        let value:any = parseInt(orderNumber) - 1
        setOrderNumber(value.toString())
    }

    
    const orderNumberHandler = (orderNumber:string) => {
        setOrderNumber(orderNumber)
    }

    
    let exist = false 
    let index = -1

    if (order.orderItems && order.orderItems.map(e => e.itemId).includes(meal?.id)) {
        index = order.orderItems.map(e => e.itemId).indexOf(meal?.id)
        exist = true
    }
    console.log('====================================');
    console.log(order);
    console.log('====================================');
    React.useEffect(() => { 
        if (index>-1 ) setOrderNumber(order.orderItems[index].quantity )
        console.log('im here', index, exist);
        
    }, [order])
    
    
   
    
    
    const updateOrder = () => {

        let orderItem = {
            itemId: meal?.id,
            quantity: orderNumber
        }

        console.log(exist);
        

        if (orderNumber != '0' && exist) {
            console.log('case one');
            
            dispatch(removeorderItem({id: meal?.id}))
            dispatch(addorderItem({ orderItem }))
            exist=true
        }

        if (!exist && orderNumber != '0') {
            dispatch(addorderItem({ orderItem }))
            exist=true
            
        }

        if (exist && orderNumber == '0') {
            dispatch(removeorderItem({id: meal?.id}))
        }
  
    }

    return (
        <View style={styles.screen}>
            <View style={styles.header}>
                <Image source={{ uri: meal?.imageUrl }} style={styles.image} />
                <Text style={styles.title}>
                {meal?.title}
                </Text>
                <MealDetails
                        textStyle={{color: 'white'}}
                        duration={meal?.duration} 
                        complexity={meal?.complexity}
                        affordability={meal?.affordability} />
            </View>
           
            <ScrollView style={styles.detailsContainer}>
                 <Subtitle  > Ingredients </Subtitle>
                <List data={meal?.ingredients}/>
                <Subtitle  > Steps </Subtitle>
                <List data={meal?.steps}/>
            </ScrollView>
            
            <View style={styles.orderContainer}>
                <View style={styles.orderItem}>
                    <PrimaryButton onPress={dec} >
                        <Ionicons name="ios-remove" size={24} color={Colors.primary600} />
                    </PrimaryButton>
                </View>
                <View style={[styles.inputContainer, styles.orderItem]}>
                    < TextInput style={styles.input} maxLength={2}
                                keyboardType='numeric'
                                autoCapitalize='none'
                                autoCorrect={false}
                                onChangeText={orderNumberHandler}
                        value={orderNumber}
                       
                    />
                </View>
                <View style={styles.orderItem}>
                    <PrimaryButton onPress={inc} >
                        <Ionicons name="ios-add" size={24} color={Colors.primary600} />
                    </PrimaryButton>   
                </View>         
                <View style={styles.orderItem}>
                    <PrimaryButton onPress={updateOrder} >
                        ADD TO ORDER
                    </PrimaryButton>   
                </View>         
            </View>   
           
            
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        
    },
    header: {
        height: 340,
        backgroundColor: Colors.primary500,
        elevation:4,
    },
    image: {
        width: '100%',
        height: 250
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white'
    },
    detailsContainer: {
        flex: 1,
        // marginBottom: 32
    },
    orderContainer: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingVertical: 16,
        paddingHorizontal: 24,
        backgroundColor: Colors.primary600,
        elevation: 4
    },
    orderItem: {
        // flex: 1
        
    },
    inputContainer: {
        height: 45,
    },
    input: {
        flex:1,
        marginHorizontal: 8,
        width: 50,
        borderBottomWidth: 2,
        borderBottomColor: Colors.primary200,
        fontSize: 34,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center'
    }
 
})


export default DetailsScreen