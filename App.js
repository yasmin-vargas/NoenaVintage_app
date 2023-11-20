import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { SimpleLineIcons, Ionicons } from '@expo/vector-icons';
import ErrorBoundary from 'react-native-error-boundary';
import HomeScreen from './src/Screens/HomeScreen'
import VintageCategoryScreen from './src/Screens/VintageCategoryScreen';
import ReproCategoryScreen from './src/Screens/VintageCategoryScreen';
import WishListScreen from './src/Screens/WishListScreen';
import ShoppingBagScreen from './src/Screens/ShoppingBagScreen';
import AccountScreen from './src/Screens/AccountScreen';
import {Styles } from './src/Styles/Stylesheet';

const Tab = createMaterialBottomTabNavigator();
const SearchStack = createStackNavigator();
const MyAccountStack = createStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      activeColor={Styles.tabStyles.tabLabel.activeColor}
      inactiveColor={Styles.tabStyles.tabLabel.inactiveColor}
    >
      <Tab.Screen name="Home" component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size, focused }) => (
            <SimpleLineIcons name="home" color={focused ? Styles.tabStyles.tabIcon.activeColor : Styles.tabStyles.tabIcon.inactiveColor} size={Styles.tabStyles.tabIcon.size} />
          ),
        }} />
      <Tab.Screen name="Search" component={SearchStackNavigator}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name="ios-search" color={focused ? Styles.tabStyles.tabIcon.activeColor : Styles.tabStyles.tabIcon.inactiveColor} size={Styles.tabStyles.tabIcon.size} />
          ),
        }} />
      <Tab.Screen name="Wish List" component={WishListScreen}
        options={{
           tabBarLabel: 'WishList',
           tabBarIcon: ({ color, size, focused }) =>(
             <Ionicons name="heart-outline" color={focused ? Styles.tabStyles.tabIcon.activeColor : Styles.tabStyles.tabIcon.inactiveColor} size={Styles.tabStyles.tabIcon.size} />
           ),
        }} />
      <Tab.Screen name="Shopping Bag" component={ShoppingBagScreen}
        options={{
            tabBarLabel: 'ShoppingBag',
            tabBarIcon: ({ color, size, focused }) =>(
                <SimpleLineIcons name="handbag" color={focused ? Styles.tabStyles.tabIcon.activeColor : Styles.tabStyles.tabIcon.inactiveColor} size={Styles.tabStyles.tabIcon.size} />
            ),
        }} />
      <Tab.Screen name="My Account" component={AccountScreen}
        options={{
             tabBarLabel: 'Account',
             tabBarIcon: ({ color, size, focused }) =>(
               <SimpleLineIcons name="user-female" color={focused ? Styles.tabStyles.tabIcon.activeColor : Styles.tabStyles.tabIcon.inactiveColor} size={Styles.tabStyles.tabIcon.size} />
           ),
        }} />
    </Tab.Navigator>
  )
}

function SearchStackNavigator() {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name="Vintage Category" component={VintageCategoryScreen} />
      <SearchStack.Screen name="Repro Category" component={ReproCategoryScreen} />
    </SearchStack.Navigator>
  )
}

function MyAccountStackNavigator() {
    return (
        <MyAccountStack.Navigator>
            <MyAccountStack.Screen name="My Account" component={AccountScreen} />
        </MyAccountStack.Navigator>
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
