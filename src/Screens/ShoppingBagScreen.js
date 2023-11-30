import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { Styles } from '../Styles/Stylesheet';

function ShoppingBagScreen({ navigation }) {
    // Use useEffect to fetch data when the component mounts
    useEffect(() => {
        const fetchDataShoppingBag = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:8080/api/shopping-bag`);
                const data = await response.json();
                console.log('Data from SpringBootAPI:', data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchDataShoppingBag(); // Call the fetch function
    }, []); // Empty dependency array to run the effect only once when the component mounts

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