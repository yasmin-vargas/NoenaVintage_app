import React from 'react';
import { View, Text, Button } from 'react-native';
import {colour, Styles } from '../Styles/Stylesheet';
function WishListScreen({ navigation }) {
    return (
        <View>
            <Text>Add to Shopping Bag</Text>
            <Button
                title="Add to Shopping Bag"
                onPress={() => navigation.navigate('ShoppingBag')}
            />
        </View>
    );
}
export default WishListScreen;
