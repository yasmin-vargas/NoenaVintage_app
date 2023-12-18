import React, { useEffect, useState } from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import axios from 'axios';
import {Styles} from '../Styles/Stylesheet';

function HomeScreen({ navigation }) {
    const [newestProducts, setNewestProducts] = useState([]);

    useEffect(() => {  // Fetch the newest products from your API
        const fetchNewestProducts = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8080/products/getAllProducts', {
                    headers: {
                        Accept: 'application/json', // Set Accept header to request JSON
                    },
                });
                setNewestProducts(response.data);
            } catch (error) {
                console.error('Error fetching newest products:', error);
            }
        };
        fetchNewestProducts();
    }, []); // Empty dependency array to run the effect only once when the component mounts

    return (
        <View style={Styles.productStyles.container}>
            <Text style={Styles.textStyles.heading}>Welcome to Noena Vintage!</Text>
            <TouchableOpacity
                style={Styles.formStyles.button}
                onPress={() => navigation.navigate('Login Screen')}
            >
                <Text style={Styles.formStyles.buttonText}>Login here</Text>
            </TouchableOpacity>
            <Text style={Styles.textStyles.text}>Newest Products:</Text>

            <FlatList
                contentContainerStyle={Styles.productStyles.container}
                data={newestProducts}
                keyExtractor={(item) => item.ID.toString()}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('ProductDetails', { productID: item.ID })}>
                            <View style={Styles.productStyles.container}>
                                <Text style={Styles.productStyles.productName}>Name: {item.productName}</Text>
                                <Text style={Styles.productStyles.productBrand}>Brand: {item.productBrand}</Text>
                                <Text style={Styles.productStyles.productPrice}>Price: {item.productPrice}</Text>
                                {item.productImageURL && (
                                    <Image style={ Styles.productStyles.productImage }
                                       source={{ uri: item.productImageURL }}
                                    />
                                )}
                            </View>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
}
export default HomeScreen;
