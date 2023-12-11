import React, { useState } from 'react';
import {View, Text, Button, Alert, TouchableOpacity} from 'react-native';
import {Styles } from '../Styles/Stylesheet';
function WishListScreen({ navigation }) {
    const [loading, setLoading] = useState(false);

    const addToBag = async () => {
        setLoading(true);
        try {  // Make a request to your backend API to addToBag
            const response = await fetch('https://noenavintagedk.ew.r.appspot.com/add-to-bag', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    stockID: 'stockID',
                    productName: 'ProductName',
                    productBrand: 'ProductBrand',
                    stockPrice: 'stockPrice',
                    stockColour: 'stockColour',
                    stockSize: 'stockSize',
                    stockQty: 1,
                }),
            });

            // Check if the request was successful
            if (response.ok) {
                // Show an option to redirect to the ShoppingBagScreen
                Alert.alert(
                    'Item Added',
                    'Item added to Shopping Bag. See your Shopping Bag?',
                    [
                        {
                            text: 'No',
                            onPress: () => console.log('No Pressed'),
                        },
                        {
                            text: 'Yes',
                            onPress: () => navigation.navigate('ShoppingBag'),
                        },
                    ],
                );
            } else {
                Alert.alert('Error', 'Failed to add item to Shopping Bag');
            }
        } catch (error) {
            console.error('Error adding item to shopping bag:', error);
            Alert.alert('Error', 'Failed to add item to shopping bag');
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={Styles.formStyles}>
            <Text style ={Styles.textStyles.text}>See your favorite items here!</Text>
            <TouchableOpacity style={Styles.formStyles.button} onPress={addToBag} disabled={loading}>
                <Text style={Styles.formStyles.buttonText}>
                {loading ? 'Adding...' : 'Add to Shopping Bag'}
                </Text>
            </TouchableOpacity>
        </View>
    );
}
export default WishListScreen;
