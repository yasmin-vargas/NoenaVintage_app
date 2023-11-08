import React from 'react';
import { View, Text, Button } from 'react-native';
import {colour, Styles } from '../Styles/Stylesheet';
function ShoppingBagScreen({ navigation }) {
    return (
        <View>
            <Text>Checkout now</Text>
            <Button
                title="Checkout"
                onPress={() => navigation.navigate('Checkout')}
            />
        </View>
    );
}
export default ShoppingBagScreen;