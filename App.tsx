import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View, Button } from 'react-native';
import CategoriesScreen from './screens/categories';

import {  NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from '@react-navigation/drawer';

import MealOverview from './screens/MealOverview';
import Colors from './util/Colors';
import DetailsScreen from './screens/DetailsScreen';
import Favorites from './screens/Favorites';
import FavoritesContextProvider, { FavoritesContext } from './store/context/favorites-context';
import Info from './screens/Info';
import { Provider } from 'react-redux';
import { store } from './store/redux/store';


const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
   
      <Drawer.Navigator screenOptions={{
          headerStyle: { backgroundColor: Colors.primary600 },
          headerTintColor: 'white',
          sceneContainerStyle: { backgroundColor: Colors.primary500 },
          drawerContentStyle: { backgroundColor: Colors.primary200 },
          drawerInactiveTintColor: Colors.primary500,
          drawerActiveTintColor: Colors.primary600
          }}>
      <Drawer.Screen  name='Categories' component={CategoriesScreen} options={{
              title: 'All Categories'
            }} />
      <Drawer.Screen  name='Favorites' component={Favorites}/>
      <Drawer.Screen  name='Info' component={Info}/>
      </Drawer.Navigator>
    
  )
}

export default function App() {
  return (
    <>
    <Provider store={store}>
    <FavoritesContextProvider>
    <StatusBar style='light' />
      <NavigationContainer >
        <Stack.Navigator screenOptions={{
          headerStyle: { backgroundColor: Colors.primary600 },
          headerTintColor: 'white',
          contentStyle: { backgroundColor: Colors.primary500 }
            }}>
          <Stack.Screen name='MealsCategories' component={DrawerNavigator}  options={{
            headerShown: false
           }}/>
          <Stack.Screen name='MealsOverview' component={MealOverview}
            // options={({ route, navigation }) => {
            // const categoryId = route.params.categoryId
            // return {
            //   title: categoryId
            // }
            // }}
          />
          <Stack.Screen name='DetailsScreen' component={DetailsScreen}  />
        </Stack.Navigator>        
        </NavigationContainer>
        </FavoritesContextProvider>
        </Provider>
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40
  },
});
