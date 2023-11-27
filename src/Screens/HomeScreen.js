import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';
import {Styles} from '../Styles/Stylesheet';

function HomeScreen({ navigation }) {
    const [newestProducts, setNewestProducts] = useState([]);

    useEffect(() => {  // Fetch the newest products from your API
        const fetchNewestProducts = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8080/sortByDateDesc');
                setNewestProducts(response.data);
            } catch (error) {
                console.error('Error fetching newest products:', error);
            }
        };
        fetchNewestProducts();
    }, []); // Empty dependency array to run the effect only once when the component mounts

    return (
        <View style={Styles.formStyles}>
            <Text style={Styles.textStyles}>Welcome to Noena Vintage!</Text>
            {newestProducts.length > 0 && (
                <View>
                    <TouchableOpacity
                        style={Styles.formStyles.button}
                        onPress={() => navigation.navigate('Login')}
                    >
                        <Text>Login here</Text>
                    </TouchableOpacity>
                    <Text>Newest Products:</Text>
                    <FlatList
                        data={newestProducts}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => navigation.navigate('ProductDetails', { productID: item.id })}>
                                <View>
                                    <Text>{item.name}</Text>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            )}
            <Text>No products available</Text>
        </View>
    );
}

export default HomeScreen;
