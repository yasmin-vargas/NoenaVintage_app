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
    const [orderPlaced, setOrderPlaced] = useState(false);

    useEffect(() => {
        const fetchOrderSummary = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8080/checkout/checkoutSummary');
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
        <View contentContainerStyle={Styles.productStyles.container}>
            {orderPlaced ? ( // Show the message when the order has been placed
                <View>
                    <Text style={Styles.textStyles.heading}>Thank you for your order!</Text>
                    <Text style={Styles.textStyles.text}>You will receive a tracking number, once the order has been dispatched</Text>
                </View>
            ) : (
                // Show the checkout form when the order has not been placed
                <>
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
                        onPress={() => {
                            handleBuyNow();
                            setOrderPlaced(true);
                        }}
                    >
                        <Text style={Styles.formStyles.buttonText}>Buy now</Text>
                    </TouchableOpacity>
                </>
            )}
        </View>
    );
}

export default CheckoutScreen;