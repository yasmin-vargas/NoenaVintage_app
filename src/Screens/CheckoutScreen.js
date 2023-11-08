import React from 'react';
import { View, Text, Button } from 'react-native';
import {colour, Styles } from '../Styles/Stylesheet';
function CheckoutScreen({ navigation }) {
    return (
        <View>
            <Text>Your order details...</Text>
            <Text>Item 1...</Text>
            <Text>Item 2...</Text>
            <Text>Subtotal: 00.00 EUR</Text>
            <Text>Delivery: 00.00 EUR</Text>
            <Text>Total price (incl. VAT): 00.00 EUR</Text>
            <Button
                title="Buy now"
                onPress={() => navigation.navigate('ShoppingBag')}
            />
        </View>
    );
}
export default CheckoutScreen;