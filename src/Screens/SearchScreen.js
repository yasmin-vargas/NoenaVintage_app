import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import axios from 'axios';

const SearchScreen = ({ navigation }) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        // Fetch categories from your API endpoint
        axios.get('http://127.0.0.1:8000/category')
            .then(response => {
                setCategories(response.data);
            })
            .catch(error => {
                console.error('Error fetching categories:', error);
            });
    }, []);

    const organizeCategories = (categories, parentCategory = null) => {
        return categories
            .filter(category => category.parentCategory === parentCategory)
            .map(category => ({
                ...category,
                subcategories: organizeCategories(categories, category.categoryID),
            }));
    };

    const renderCategories = (categoryList) => {
        return categoryList.map((category) => (
            <View key={category.categoryID}>
                <TouchableOpacity onPress={() => handleCategoryPress(category)}>
                    <Text>{category.categoryName}</Text>
                </TouchableOpacity>
                {category.subcategories && renderCategories(category.subcategories)}
            </View>
        ));
    };

    const handleCategoryPress = (category) => {
        // Implement navigation or other actions based on the selected category
        console.log(`Selected category: ${category.categoryName}`);
    };

    return (
        <View>
            <Text>Main Categories:</Text>
            {renderCategories(organizeCategories(categories))}
        </View>
    );
};

export default SearchScreen;
