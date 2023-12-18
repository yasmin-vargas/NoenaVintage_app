import React, { useState, useEffect } from 'react';
import { View, Text, Alert, TouchableOpacity} from 'react-native';
import { Styles } from '../Styles/Stylesheet';
import axios from 'axios';

function WishListScreen({ route, navigation }) {
    const { productID } = route.params || {};
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // Fetch the product details when the component mounts
        fetchProductById(productID);
    }, [productID]);

    const fetchProductById = async (productID) => {
        try {
            const response = await axios.get(`http://127.0.0.1:8080/products/get/${productID}`);
            if (response.status === 200) {
                const productData = response.data;
                setProduct(productData);
            } else {
                console.error('Error fetching product details:', response.status);
            }
        } catch (error) {
            console.error('Error fetching product details:', error);
        }
    };

    const addToBag = async (productID) => {
        setLoading(true);
        try {
            const response = await axios.get(`http://127.0.0.1:8080/shoppingbags/addToBag/${productID}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    productID: 'Product ID',
                    productName: 'Product Name',
                    productBrand: 'Product Brand',
                    productPrice: 'Product Price',
                    productColour: 'Product Colour',
                    productSize: 'Product Size',
                    BagItemQty: 1,
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
                            onPress: () => navigation.navigate('ShoppingBag Screen'),
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
            <TouchableOpacity style={Styles.formStyles.button} onPress={() => addToBag(40000082)} disabled={loading}>
                <Text style={Styles.formStyles.buttonText}>
                {loading ? 'Adding...' : 'Add to Shopping Bag'}
                </Text>
            </TouchableOpacity>
        </View>
    );
}
export default WishListScreen;
