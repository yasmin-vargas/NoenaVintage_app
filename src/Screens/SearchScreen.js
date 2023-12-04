import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import axios from 'axios';

const SearchScreen = ({ navigation }) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {  // Fetch categories with parentCategory Vintage or Repro
        axios.get('https://noenavintagedk.appspot.com/categories/parent/vintage-repro')
            .then(response => {
                setCategories(response.data);
            })
            .catch(error => {
                console.error('Error fetching categories:', error);
            });
    }, []);

    const handleCategoryPress = (category) => {
        // Navigate to the category screen based on selected parentCategory
       navigation.navigate(`${category.parentCategory}Screen`);

    };

    return (
        <View>
            <Text>Main Categories:</Text>
            {categories.map((category) => (
                <TouchableOpacity key={category.categoryID} onPress={() => handleCategoryPress(category.parentCategory)}>
                    <Text>{category.parentCategory}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

export default SearchScreen;
