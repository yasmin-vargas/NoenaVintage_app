import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Button } from 'react-native';
import { Styles } from '../Styles/Stylesheet';
import Shipping from '../Components/ShippingAPI';
import Map from '../Components/GoogleMapsAPI';
import axios from 'axios';

function CheckoutScreen({ navigation }) {
    const [billingAddress, setBillingAddress] = useState('');
    const [shippingAddress, setShippingAddress] = useState('');
    const [discountCode, setDiscountCode] = useState('');

    useEffect(() => {
        const fetchOrderSummary = async () => {
            try {
                const response = await axios.get('https://noenavintagedk.ew.r.appspot.com/checkout/ordersummary');
                console.log(response.data); // Log or handle the response as needed
            } catch (error) {
                console.error('Error fetching order summary:', error);
            }
        };
        fetchOrderSummary();
    }, []);

    const handleBuyNow = async () => {
        try {
            const response = await confirmCheckout({  // Make API request to confirm checkout
                billingAddress,
                shippingAddress,
                discountCode,
            });
            console.log(response);  // Handle the response as needed

            setOrderPlaced(true);  // Update state to indicate that the order has been placed
        } catch (error) {
            console.error('Error confirming checkout:', error);
        }
    };

    return (
        <View style={Styles.formStyles.container}>
            <Text style={Styles.textStyles.text}>Your order details:</Text>
            <Text>Item 1...</Text>
            <Text>Item 2...</Text>
            <Text>Subtotal: 00.00 EUR</Text>
            <Text>Shipping cost: 00.00 EUR</Text>
            <Text>Total amount (incl. VAT): 00.00 EUR</Text>
            <Text>Billing Address:</Text>
            <TextInput
                style={Styles.inputStyles}
                value={billingAddress}
                onChangeText={(text) => setBillingAddress(text)}
            />
            <Text>Shipping Address:</Text>
            <TextInput
                style={Styles.inputStyles}
                value={shippingAddress}
                onChangeText={(text) => setShippingAddress(text)}
            />
            <Text>Discount Code:</Text>
            <TextInput
                style={Styles.inputStyles}
                value={discountCode}
                onChangeText={(text) => setDiscountCode(text)}
            />
            <TouchableOpacity
                style={Styles.formStyles.button}
                onPress={handleBuyNow}
            >
                <Text style={Styles.formStyles.buttonText}>Buy now</Text>
            </TouchableOpacity>
        </View>
    );
}

export default CheckoutScreen;