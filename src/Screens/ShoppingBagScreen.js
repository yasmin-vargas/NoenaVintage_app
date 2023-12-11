import React, { useState, useEffect } from 'react';
import {View, ScrollView, Text, Button, TouchableOpacity} from 'react-native';
import { Styles } from '../Styles/Stylesheet';
import axios from 'axios';

function ShoppingBagScreen({ navigation }) {
    const [bagItems, setBagItems] = useState([]);

    useEffect(() => {  // Fetch bagitems for ShoppingBag based on UserID
        const fetchShoppingBagItems = async () => {
            try {
                const response = await axios.get(`https://noenavintagedk.ew.r.appspot.com/shoppingbag/bagitems`);
                setBagItems(response.data);
            } catch (error) {
                console.error('Error fetching shopping bag items:', error);
            }
        };
        fetchShoppingBagItems(); // Call the fetch function
    }, []); // Empty dependency array to run the effect only once when the component mounts

    return (
        <ScrollView>
            <Text style ={Styles.textStyles.text}>See the items in your shopping bag here!</Text>
            {bagItems.map((item) => (
                <TouchableOpacity key={item.productID} onPress={() => handleProductPress(item)}>
                    <View style={Styles.productStyles.container}>
                        <Text style={Styles.productStyles.productName}>{item.productName}</Text>
                        <Text style={Styles.productStyles.productBrand}>{item.productBrand}</Text>
                        <Text style={Styles.productStyles.productPrice}>{item.productPrice}</Text>
                    </View>
                </TouchableOpacity>
            ))}
            <TouchableOpacity
                style={Styles.formStyles.button}
                onPress={() => navigation.navigate('Checkout')}
            >
                <Text style={Styles.formStyles.buttonText}>Checkout</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}
export default ShoppingBagScreen;