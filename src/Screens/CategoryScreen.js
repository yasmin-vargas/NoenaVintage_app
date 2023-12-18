import React, { useState, useEffect } from 'react';
import { ScrollView, Text, TouchableOpacity, CheckBox } from 'react-native';
import axios from 'axios';
import {Styles} from "../Styles/Stylesheet";

// Component to display and handle attribute filters
function AttributeFilters({ attributeTypes, selectedAttributes, onSelect }) {
    return (
        <ScrollView horizontal>
            {attributeTypes.map((attributeType) => (
                <CheckBox
                    key={attributeType}
                    title={attributeType}
                    checked={selectedAttributes.includes(attributeType)}
                    onPress={() => onSelect(attributeType)}
                />
            ))}
        </ScrollView>
    );
}

const CategoryScreen = ({ route, navigation }) => {
    const { category } = route.params || {};
    const [products, setProducts] = useState([]);
    const [attributes, setAttributes] = useState([]);
    const [selectedAttributes, setSelectedAttributes] = useState([]);

    useEffect(() => {  // Fetch products for the selected category
        axios.get(`http://127.0.0.1:8080/products/searchProduct/${category}`)
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error(`Error fetching products for ${category}:`, error);
            });
        fetchAttributes();  // Fetch attributes
    }, [category]);

    const fetchAttributes = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8080/attributes/getAllAttributes');
            setAttributes(response.data); // The response should be an array of attributes
        } catch (error) {
            console.error('Error fetching attributes:', error);
        }
    };
    const handleAttributeToggle = (attributeType) => {
        setSelectedAttributes((prevSelected) => (
            prevSelected.includes(attributeType)
                ? prevSelected.filter((type) => type !== attributeType)
                : [...prevSelected, attributeType]
        ));
    };

    // Apply filtering based on selected attributes
    const filteredProducts = products.filter((product) => (
        selectedAttributes.every((attributeType) => (
            product.attributes.some((attribute) => attribute.attributeType === attributeType)
        ))
    ));

    const handleProductPress = (product) => {
        // Navigate to ProductScreen and pass the selected product
        navigation.navigate('Product Screen', { product });
    };

    return (
        <ScrollView contentContainerStyle={Styles.productStyles.container}>
            <Text>{category}</Text>
            <Text h4>Filter by Attributes</Text>
            <AttributeFilters
                attributeTypes={['Brand', 'Decade', 'Condition', 'Style', 'Material', 'Print', 'Colour', 'Size', 'Price']}
                selectedAttributes={selectedAttributes}
                onSelect={handleAttributeToggle}
            />
            {filteredProducts.map((product) => (
                <TouchableOpacity key={product.id} onPress={() => handleProductPress(product)}>
                    <Text>{product.name}</Text>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
};

export default CategoryScreen;
