import { Text, TouchableOpacity } from 'react-native';
import {Styles} from '../Styles/Stylesheet';

const CategoryButton = ({ text, onPress }) => {
    return (
        <TouchableOpacity style={Styles.formStyles.button} onPress={onPress}>
            <Text style={Styles.formStyles.buttonText}>{text}</Text>
        </TouchableOpacity>
    );
};

export default CategoryButton;

