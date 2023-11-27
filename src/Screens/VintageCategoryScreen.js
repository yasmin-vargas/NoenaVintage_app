import CategoryButton from '../Components/Button';
import { View,Text } from 'react-native';
import { Styles } from '../Styles/Stylesheet';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const VintageCategories = [
    'Vintage Day Dresses',
    'Vintage Dress + Jacket Sets',
    'Vintage Cocktail Dresses',
    'Vintage Wedding Dresses',
];
function VintageCategoryScreen({ navigation }) {
    const [vintagedaydresses, setVintageDayDresses] = useState([])
    const [vintagedressjacketsets, setVintageDressJacketSets] = useState([])
    const [vintagecocktaildresses, setVintageCocktailDresses] = useState([])
    const [vintageweddingdresses, setVintageWeddingDresses] = useState([])

    useEffect(() => {
        // Make the API request within useEffect
        axios.get('http://127.0.0.1:8000/vintage-categories')
            .then(response => {
                console.log(response);
                setVintageDayDresses(response.data.filter(item => item.category === 'Day Dresses'));
                setVintageDressJacketSets(response.data.filter(item => item.category === 'Dress + Jacket Sets'));
                setVintageCocktailDresses(response.data.filter(item => item.category === 'Cocktail Dresses'));
                setVintageWeddingDresses(response.data.filter(item => item.category === 'Wedding Dresses'));
            })
            .catch(error => {
                console.error('Error fetching vintage categories:', error);
            });
    }, []);
    const handleCategoryPress = (category) => {
        navigation.navigate('Vintage Categories', { VintageCategory: category });
    };
    return (
        <View>
            <Text>Vintage</Text>
            {VintageCategories.map((VintageCategory) => (
                <CategoryButton
                    key={VintageCategory.id}
                    text={VintageCategory.name}
                    onPress={() => handleCategoryPress(VintageCategory)}
                />
            ))}
        </View>
    );
}
export default VintageCategoryScreen;

