import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

const CategoryScreen = ({ route, navigation }) => {
    const { category } = route.params;
    const [products, setProducts] = useState([]);
    const [attributes, setAttributes] = useState([]);
    const [selectedAttributes, setSelectedAttributes] = useState([]);

    useEffect(() => {  // Fetch products for the selected category
        axios.get('https://noenavintagedk.ew.r.appspot.com/products/searchProducts/${category}')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error(`Error fetching products for ${category}:`, error);
            });

        // Fetch attributes
        fetchAttributes();
    }, [category]);

    const fetchAttributes = async () => {
        try {
            const response = await axios.get('https://noenavintagedk.ew.r.appspot.com/attributes');
            setAttributes(response.data); // assuming the response is an array of attributes
        } catch (error) {
            console.error('Error fetching attributes:', error);
        }
    };

    const handleCategoryPress = (category) => {
        // Navigate to ProductScreen
        navigation.navigate('ProductScreen', { Category });
    };

    const handleAttributeToggle = (attributeID) => {
        // Toggle the selected attribute
        setSelectedAttributes((prevSelected) => {
            const isSelected = prevSelected.includes(attributeID);
            if (isSelected) {
                // Attribute is already selected, remove it
                return prevSelected.filter((id) => id !== attributeID);
            } else {
                // Attribute is not selected, add it
                return [...prevSelected, attributeID];
            }
        });
    };

    // Apply filtering based on selected attributes
    const filteredProducts = products.filter((product) => {
        // Check if the product has all selected attributes
        return selectedAttributes.every((attributeId) => {
            return product.attributeIDs.includes(attributeId);
        });
    });

    return (
        <ScrollView>
            <Text>{category}</Text>
            <Text h4>Filter by Attributes</Text>
            {attributes.map((attribute) => (
                <CheckBox
                    key={attribute.attributeID}
                    title={attribute.attributeValue} // Adjust according to your attribute structure
                    checked={selectedAttributes.includes(attribute.attributeID)}
                    onPress={() => handleAttributeToggle(attribute.attributeID)}
                />
            ))}

            {/* Map over the fetched and filtered products */}
            {filteredProducts.map((product) => (
                <TouchableOpacity key={product.id} onPress={() => handleProductPress(product)}>
                    <Text>{product.name}</Text>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
};

export default CategoryScreen;
