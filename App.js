import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { SimpleLineIcons, Ionicons } from '@expo/vector-icons';
import ErrorBoundary from 'react-native-error-boundary';
import HomeScreen from './src/Screens/HomeScreen'
import VintageCategoryScreen from './src/Screens/VintageCategoryScreen';
import WishListScreen from './src/Screens/WishListScreen';
import ShoppingBagScreen from './src/Screens/ShoppingBagScreen';
import AccountScreen from './src/Screens/AccountScreen';
import {colour, Styles } from './src/Styles/Stylesheet';

const Tab = createMaterialBottomTabNavigator();
const VintageCategoryStack = createStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <SimpleLineIcons name="home" color={Styles.tabStyles.tabIcon.color} size={Styles.tabStyles.tabIcon.size} />
          ),
        }} />
      <Tab.Screen name="Categories" component={VintageCategoryStackNavigator}
        options={{
          tabBarLabel: 'Category',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-search" color={Styles.tabStyles.tabIcon.color} size={Styles.tabStyles.tabIcon.size} />
          ),
        }} />
      <Tab.Screen name="WishList" component={WishListScreen}
        options={{
           tabBarLabel: 'WishList',
           tabBarIcon: ({ color, size }) =>(
             <Ionicons name="heart-outline" color={Styles.tabStyles.tabIcon.color} size={Styles.tabStyles.tabIcon.size} />
           ),
        }} />
      <Tab.Screen name="Shopping Bag" component={ShoppingBagScreen}
        options={{
            tabBarLabel: 'ShoppingBag',
            tabBarIcon: ({ color, size }) =>(
                <SimpleLineIcons name="handbag" color={Styles.tabStyles.tabIcon.color} size={Styles.tabStyles.tabIcon.size} />
            ),
        }} />
      <Tab.Screen name="My Account" component={AccountScreen}
        options={{
             tabBarLabel: 'MyAccount',
             tabBarIcon: ({ color, size }) =>(
               <SimpleLineIcons name="user-female" color={Styles.tabStyles.tabIcon.color} size={Styles.tabStyles.tabIcon.size} />
           ),
        }} />
    </Tab.Navigator>
  )
}

function VintageCategoryStackNavigator() {
  return (
    <VintageCategoryStack.Navigator>
      <VintageCategoryStack.Screen name="VintageCategory" component={VintageCategoryScreen} />
    </VintageCategoryStack.Navigator>
  )
}

export default function App() {
  const handleError = (error, stackTrace) => {
    console.error(error);
  };

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <ErrorBoundary onError={handleError}>
        <TabNavigator />
      </ErrorBoundary>
    </NavigationContainer>
    
  );
}
