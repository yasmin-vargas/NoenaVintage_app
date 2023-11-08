import CategoryButton from '../Components/Button';
import { View,Text } from 'react-native';
import {colour, Styles } from '../Styles/Stylesheet';

const VintageCategories = [
    'Vintage Day Dresses',
    'Vintage Dress + Jacket Sets',
    'Vintage Cocktail Dresses',
    'Vintage Wedding Dresses',
];
function VintageCategoryScreen({ navigation }) {
    const [VintageCategories, setVintageCategories] = useState([]);

    useEffect(() => {
        // Make the API request within useEffect
        fetch('https://backend-url/api/vintage-categories')
            .then(response => response.json())
            .then(data => {
                setVintageCategories(data);
            })
            .catch(error => {
                console.error('Error fetching vintage categories:', error);
            });
    }, []);
    const handleCategoryPress = (category) => {
        navigation.navigate('VintageCategoryScreen', { VintageCategory: category });
    };
    return (
        <View>
            <Text>Vintage</Text>
            {VintageCategories.map((VintageCategory) => (
                <CategoryButton
                    key={VintageCategoryID}
                    text={VintageCategoryName}
                    onPress={() => handleCategoryPress(VintageCategory)}
                />
            ))}
        </View>
    );
}
export default VintageCategoryScreen;

