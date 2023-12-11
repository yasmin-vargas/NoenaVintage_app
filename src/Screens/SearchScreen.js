import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import axios from 'axios';
import {Styles} from "../Styles/Stylesheet";

function SearchScreen ({ navigation }) {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const handleCategoryPress = (category) => {
        // Navigate to the category screen based on selected parentCategory
        navigation.navigate(`${category.categoryID}Screen`);
    };

    useEffect(() => {  // Fetch categories with parentCategory Vintage or Repro
        axios.get('https://noenavintagedk.ew.r.appspot.com/categories/GetAllCategories')
            .then(response => {
                setCategories(response.data);
            })
            .catch(error => {
                console.error('Error fetching categories:', error);
                setError('Error fetching categories. Please try again.');
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return (
        <ScrollView style={Styles.formStyles}>
            {error && <Text style={{ color: 'red' }}>{error}</Text>}
            <Text style={Styles.textStyles.text}>Main Categories:</Text>
            {categories.map((category) => (
                <TouchableOpacity key={category.categoryID} onPress={() => handleCategoryPress(category)}>
                    <Text>{category}</Text>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
};

export default SearchScreen;
