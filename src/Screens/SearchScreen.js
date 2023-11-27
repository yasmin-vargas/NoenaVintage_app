import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import axios from 'axios';

const SearchScreen = ({ navigation }) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {  // Fetch categories from your API endpoint
        axios.get('http://127.0.0.1:8080/categories')
            .then(response => {
                setCategories(response.data);
            })
            .catch(error => {
                console.error('Error fetching categories:', error);
            });
    }, []);

    const organiseCategories = async (categories, parentCategory = null) => {
        const organisedCategories = [];
        for (const category of categories) {
            if (category.parentCategory === parentCategory) {
                const subcategories = await fetchSubcategories(category.categoryName);
                organisedCategories.push({
                    ...category,
                    subcategories: await organiseCategories(subcategories, category.categoryName),
                });
            }
        }
        return organisedCategories;
    };

    const renderCategories = (categoryList) => {
        return categoryList.map((category) => (
            <View key={category.categoryID}>
                {category.categoryName === 'Vintage' && (
                    <TouchableOpacity onPress={() => navigation.navigate('VintageCategoryScreen')}>
                        <Text>{category.categoryName}</Text>
                    </TouchableOpacity>
                )}
                {category.categoryName === 'Repro' && (
                    <TouchableOpacity onPress={() => navigation.navigate('ReproCategoryScreen')}>
                        <Text>{category.categoryName}</Text>
                    </TouchableOpacity>
                )}
                {category.subcategories && renderCategories(category.subcategories)}
            </View>
        ));
    };

    const handleCategoryPress = (category) => {
        // Navigate to the appropriate category screen based on the selected category
        if (category.categoryName === 'Vintage') {
            navigation.navigate('VintageCategoryScreen');
        } else if (category.categoryName === 'Repro') {
            navigation.navigate('ReproCategoryScreen');
        }
    };

    return (
        <View>
            <Text>Main Categories:</Text>
            {renderCategories(organizeCategories(categories))}
        </View>
    );
};

export default SearchScreen;
