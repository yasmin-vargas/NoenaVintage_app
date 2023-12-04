import CategoryButton from '../Components/Button';
import { View,Text } from 'react-native';
import { Styles } from '../Styles/Stylesheet';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
function ReproScreen({ navigation }) {
    const [reproKitchen, setReproKitchen] = useState([])
    const [reproLingerie, setReproLingerie] = useState([])
    const [reproAccessories, setReproAccessories] = useState([])
    const [reproShoes, setReproShoes] = useState([])

    useEffect(() => {   // Fetch repro categories
        axios.get('https://noenavintagedk.appspot.com/categories/parent/repro')
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
        // Navigate to a screen to display products for the selected category
        navigation.navigate('CategoryScreen', { category });
    };

    return (
        <View>
            <Text>Repro</Text>
            {/* Map over the fetched repro categories */}
            {reproKitchen.map((reproCategory) => (
                <CategoryButton
                    key={reproCategory.id}
                    text={reproCategory.name}
                    onPress={() => handleCategoryPress(reproCategory)}
                />
            ))}
            {reproLingerie.map((reproCategory) => (
                <CategoryButton
                    key={reproCategory.id}
                    text={reproCategory.name}
                    onPress={() => handleCategoryPress(reproCategory)}
                />
            ))}
            {reproAccessories.map((reproCategory) => (
                <CategoryButton
                    key={reproCategory.id}
                    text={reproCategory.name}
                    onPress={() => handleCategoryPress(reproCategory)}
                />
            ))}
            {reproShoes.map((reproCategory) => (
                <CategoryButton
                    key={reproCategory.id}
                    text={reproCategory.name}
                    onPress={() => handleCategoryPress(reproCategory)}
                />
            ))}
        </View>
    );
}
export default ReproScreen;

