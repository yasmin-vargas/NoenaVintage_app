import React from 'react';
import { View, Text, Button, Alert } from 'react-native';
import {Styles } from '../Styles/Stylesheet';
function WishListScreen({ navigation }) {
    const [loading, setLoading] = useState(false);

    const addToBag = async () => {
        setLoading(true);
        try {  // Make a request to your backend API to add the item to the shopping bag
            const response = await fetch('http://127.0.0.1:8080/add-to-bag', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // Add any other headers needed for authentication or other purposes
                },
                body: JSON.stringify({
                    stockID: 'stockID',
                    productName: 'ProductName'
                    productBrand: 'ProductBrand'
                    stockPrice: 'stockPrice',
                    stockColour: 'stockColour',
                    stockSize: 'stockSize',
                    stockQty: 1,
                }),
            });

            // Check if the request was successful (status code 2xx)
            if (response.ok) {
                // Navigate to the ShoppingBagScreen after adding the item
                navigation.navigate('ShoppingBag');
            } else {
                // Handle unsuccessful response (e.g., show an error message)
                Alert.alert('Error', 'Failed to add item to shopping bag');
            }
        } catch (error) {
            // Handle network errors or other exceptions
            console.error('Error adding item to shopping bag:', error);
            Alert.alert('Error', 'Failed to add item to shopping bag');
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={Styles.formStyles}>
            <Text style ={Styles.textStyles}>Add to Shopping Bag</Text>
            <Button
                title={loading ? 'Adding...' : 'Add to Shopping Bag'}
                onPress={addToBag}
                disabled={loading}
            />
        </View>
    );
}
export default WishListScreen;
