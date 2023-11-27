import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { SimpleLineIcons, Ionicons } from '@expo/vector-icons';
import ErrorBoundary from 'react-native-error-boundary';
import HomeScreen from './src/Screens/HomeScreen'
import LoginScreen from './src/Screens/LoginScreen';
import SearchScreen from './src/Screens/SearchScreen';
import VintageScreen from './src/Screens/VintageScreen';
import ReproCategoryScreen from './src/Screens/VintageScreen';
import WishListScreen from './src/Screens/WishListScreen';
import ShoppingBagScreen from './src/Screens/ShoppingBagScreen';
import CheckoutScreen from './src/Screens/AccountScreen';
import AccountScreen from './src/Screens/AccountScreen';
import {Styles} from './src/Styles/Stylesheet';

const Tab = createMaterialBottomTabNavigator();
const HomeStack = createStackNavigator();
const SearchStack = createStackNavigator();
const WishListStack = createStackNavigator();
const ShoppingBagStack = createStackNavigator();
const MyAccountStack = createStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      activeColor={Styles.tabStyles.tabLabel.activeColor}
      inactiveColor={Styles.tabStyles.tabLabel.inactiveColor}
    >
      <Tab.Screen name="Home" component={HomeStackNavigator}
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
      <Tab.Screen name="Wish List" component={WishListStackNavigator}
        options={{
           tabBarLabel: 'WishList',
           tabBarIcon: ({ color, size, focused }) =>(
             <Ionicons name="heart-outline" color={focused ? Styles.tabStyles.tabIcon.activeColor : Styles.tabStyles.tabIcon.inactiveColor} size={Styles.tabStyles.tabIcon.size} />
           ),
        }} />
      <Tab.Screen name="Shopping Bag" component={ShoppingBagStackNavigator}
        options={{
            tabBarLabel: 'ShoppingBag',
            tabBarIcon: ({ color, size, focused }) =>(
                <SimpleLineIcons name="handbag" color={focused ? Styles.tabStyles.tabIcon.activeColor : Styles.tabStyles.tabIcon.inactiveColor} size={Styles.tabStyles.tabIcon.size} />
            ),
        }} />
      <Tab.Screen name="My Account" component={MyAccountStackNavigator}
        options={{
             tabBarLabel: 'Account',
             tabBarIcon: ({ color, size, focused }) =>(
               <SimpleLineIcons name="user-female" color={focused ? Styles.tabStyles.tabIcon.activeColor : Styles.tabStyles.tabIcon.inactiveColor} size={Styles.tabStyles.tabIcon.size} />
           ),
        }} />
    </Tab.Navigator>
  )
}

function HomeStackNavigator() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={HomeScreen} />
            <HomeStack.Screen name="Login" component={LoginScreen} />
        </HomeStack.Navigator>
    )
}
function SearchStackNavigator() {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name="Search Category" component={SearchScreen} />
      <SearchStack.Screen name="VintageCategory" component={VintageScreen} />
      <SearchStack.Screen name="ReproCategory" component={ReproCategoryScreen} />
    </SearchStack.Navigator>
  )
}

function WishListStackNavigator() {
    return (
        <WishListStack.Navigator>
            <WishListStack.Screen name="Wish List" component={WishListScreen} />
            <WishListStack.Screen name="ShoppingBag" component={ShoppingBagScreen} />
        </WishListStack.Navigator>
    )
}

function ShoppingBagStackNavigator() {
    return (
        <ShoppingBagStack.Navigator>
            <ShoppingBagStack.Screen name="ShoppingBag" component={ShoppingBagScreen} />
            <ShoppingBagStack.Screen name="Checkout" component={CheckoutScreen} />
        </ShoppingBagStack.Navigator>
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
