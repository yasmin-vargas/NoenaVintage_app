import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

const CategoryScreen = ({ route, navigation }) => {
    const { category } = route.params;
    const [categories, setCategories] = useState([]);

    useEffect(() => {  // Fetch subcategories for the selected category
        axios.get(`http://127.0.0.1:8080/products/${category}`)
            .then(response => {
                setSubcategories(response.data);
            })
            .catch(error => {
                console.error(`Error fetching products for ${category}:`, error);
            });
    }, [category]);

    return (
        <View>
            <Text>{category}</Text>
            {categories.map((category) => (
            ))}
        </View>
    );
};

export default CategoryScreen;
