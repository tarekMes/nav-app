import React from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import { CATEGORIES } from '../data/data'
import CategoryGridTile from '../components/CategoryGridTile'

export type props = {
    navigation: any
} 


const CategoriesScreen: React.FC<props> = ({ navigation }) => {
    
    const rendercategoryItem = (dataItem: any) => {

        const onPresshandler = () => {

            navigation.navigate('MealsOverview', {categoryId: dataItem.item.id })
        }

        return <CategoryGridTile onPress={onPresshandler} title={dataItem.item.title} color={dataItem.item.color} />
    }

    return(
        <View style={styles.categoriesScreen}>
            <FlatList data={CATEGORIES}
                renderItem={rendercategoryItem}
                numColumns={2}/>
        </View>
    )
}
const styles = StyleSheet.create({
    categoriesScreen: {
        flex: 1
    }
})

export default CategoriesScreen