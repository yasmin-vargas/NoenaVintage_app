import CategoryButton from '../Components/Button';
import { View,Text } from 'react-native';
import { Styles } from '../Styles/Stylesheet';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ReproCategories = [
    'Repro Kitchen',
    'Repro Lingerie',
    'Repro Accessories',
    'Repro Shoes',
];
function ReproCategoryScreen({ navigation }) {
    const [reprokitchen, setReproKitchen] = useState([])
    const [reprolingerie, setReproLingerie] = useState([])
    const [reproaccessories, setReproAccessories] = useState([])
    const [reproshoes, setReproShoes] = useState([])

    useEffect(() => {
        // Make the API request within useEffect
        axios.get('http://127.0.0.1:8000/repro-categories')
            .then(response => {
                console.log(response);
                setReproKitchen(response.data.filter(item => item.category === 'Repro Kitchen' || item.category === 'Table Cloth'));
                setReproLingerie(response.data.filter(item => item.category === 'Repro Lingerie'));
                setReproAccessories(response.data.filter(item => item.category === 'Repro Accessories'));
                setReproShoes(response.data.filter(item => item.category === 'Repro Shoes'));
            })
            .catch(error => {
                console.error('Error fetching repro categories:', error);
            });
    }, []);
    const handleCategoryPress = (category) => {
        navigation.navigate('Repro Categories', { ReproCategory: category });
    };
    return (
        <View>
            <Text>Repro</Text>
            {ReproCategories.map((ReproCategory) => (
                <CategoryButton
                    key={ReproCategory.id}
                    text={ReproCategory.name}
                    onPress={() => handleCategoryPress(ReproCategory)}
                />
            ))}
        </View>
    );
}
export default ReproCategoryScreen;

