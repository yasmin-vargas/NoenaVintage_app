import CategoryButton from '../Components/Button';
import { View,Text } from 'react-native';
import { Styles } from '../Styles/Stylesheet';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function VintageScreen({ navigation }) {
    const [vtgDayDresses, setVintageDayDresses] = useState([])
    const [vtgDressJacketSets, setVintageDressJacketSets] = useState([])
    const [vtgCocktailDresses, setVintageCocktailDresses] = useState([])
    const [vtgWeddingDresses, setVintageWeddingDresses] = useState([])

    useEffect(() => {  // Fetch vintage categories
        axios.get('https://noenavintagedk.ew.r.appspot.com/categories/parent/vintage')
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
        // Navigate to a screen to display products for the selected category
        navigation.navigate('CategoryScreen', { category });
    };

    return (
        <View>
            <Text>Vintage</Text>
            {/* Map over the fetched vintage categories */}
            {vtgDayDresses.map((vintageCategory) => (
                <CategoryButton
                    key={vintageCategory.id}
                    text={vintageCategory.name}
                    onPress={() => handleCategoryPress(vintageCategory)}
                />
            ))}
            {vtgDressJacketSets.map((vintageCategory) => (
                <CategoryButton
                    key={vintageCategory.id}
                    text={vintageCategory.name}
                    onPress={() => handleCategoryPress(vintageCategory)}
                />
            ))}
            {vtgCocktailDresses.map((vintageCategory) => (
                <CategoryButton
                    key={vintageCategory.id}
                    text={vintageCategory.name}
                    onPress={() => handleCategoryPress(vintageCategory)}
                />
            ))}
            {vtgWeddingDresses.map((vintageCategory) => (
                <CategoryButton
                    key={vintageCategory.id}
                    text={vintageCategory.name}
                    onPress={() => handleCategoryPress(vintageCategory)}
                />
            ))}
        </View>
    );
}
export default VintageScreen;

