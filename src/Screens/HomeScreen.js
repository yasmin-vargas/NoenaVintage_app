import React, { useEffect, useState } from 'react';
import {View, ScrollView, Text, FlatList, TouchableOpacity, Button} from 'react-native';
import axios from 'axios';
import {Styles} from '../Styles/Stylesheet';

function HomeScreen({ navigation }) {
    const [newestProducts, setNewestProducts] = useState([]);

    useEffect(() => {  // Fetch the newest products from your API
        const fetchNewestProducts = async () => {
            try {
                const response = await axios.get('https://noenavintagedk.ew.r.appspot.com/products/sortByDateDesc')
                setNewestProducts(response.data);
            } catch (error) {
                console.error('Error fetching newest products:', error);
            }
        };
        fetchNewestProducts();
    }, []); // Empty dependency array to run the effect only once when the component mounts

    return (
         <ScrollView style={Styles.formStyles}>
             <Text style={Styles.textStyles.heading}>Welcome to Noena Vintage!</Text>
                    <TouchableOpacity
                        style={Styles.formStyles.button}
                        onPress={() => navigation.navigate('Login')}
                    >
                        <Text style={Styles.formStyles.buttonText}>Login here</Text>
                    </TouchableOpacity>
                    <Text style={Styles.textStyles.text}>Newest Products:</Text>
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
         </ScrollView>
    );
}
export default HomeScreen;
