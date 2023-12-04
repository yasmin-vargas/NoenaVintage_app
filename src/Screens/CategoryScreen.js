import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

const CategoryScreen = ({ route, navigation }) => {
    const { category } = route.params;
    const [products, setProducts] = useState([]);

    useEffect(() => {  // Fetch products for the selected category
        axios.get(`https://noenavintagedk.appspot.com/products/searchProducts/${category}`)
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error(`Error fetching products for ${category}:`, error);
            });
    }, [category]);
    const handleCategoryPress = (category) => {
        // Navigate to ProductScreen
        navigation.navigate('ProductScreen', { ProductScreen });
    };

    return (
        <View>
            <Text>{category}</Text>
            {/* Map over the fetched products */}
            {products.map((product) => (
                <TouchableOpacity key={product.id} onPress={() => handleProductPress(product)}>
                    <Text>{product.name}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

export default CategoryScreen;
