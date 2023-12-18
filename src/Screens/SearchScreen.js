import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text, TouchableOpacity, TextInput } from 'react-native';
import { Styles } from "../Styles/Stylesheet";
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';

function SearchScreen({ navigation }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [isSearchIconClicked, setIsSearchIconClicked] = useState(false);
    const handleNavigateToVintage = () => {navigation.navigate('Vintage Screen');};
    const handleNavigateToRepro = () => {navigation.navigate('Repro Screen');};

    const handleSearch = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8080/products/searchProduct', {
                params: { searchTerm: searchTerm },
            });

            // API response should return a list of products
            setProducts(response.data);
            setError(null);
        } catch (error) {
            console.error('Error fetching products:', error);
            setProducts([]);
            setError('Error fetching products. Please try again.');
        }
    };

    return (
        <ScrollView contentContainerStyle={Styles.productStyles.container}>
            <View style={Styles.searchContainer}>
                <TextInput
                    style={Styles.searchInput}
                    placeholder="Search for products"
                    value={searchTerm}
                    onChangeText={(text) => setSearchTerm(text)}
                />
                <TouchableOpacity style={Styles.searchButton} onPress={() => {
                    handleSearch();
                    setIsSearchIconClicked(true);
                }}>
                    <Ionicons name="ios-search" color={isSearchIconClicked ? Styles.tabStyles.tabIcon.activeColor : Styles.tabStyles.tabIcon.inactiveColor}
                    size={Styles.tabStyles.tabIcon.size}
                    />
                </TouchableOpacity>
            </View>

            <Text style={Styles.textStyles.text}> See our Vintage Items!</Text>
            <TouchableOpacity style={Styles.formStyles.button} onPress={handleNavigateToVintage}>
                <Text style={Styles.formStyles.buttonText}>Vintage</Text>
            </TouchableOpacity>

            <Text style={Styles.textStyles.text}>See our Repro Items!</Text>
            <TouchableOpacity style={Styles.formStyles.button} onPress={handleNavigateToRepro}>
                <Text style={Styles.formStyles.buttonText}>Repro</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

export default SearchScreen;
