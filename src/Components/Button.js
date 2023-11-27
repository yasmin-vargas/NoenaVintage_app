import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CategoryButton = ({ text, onPress }) => {
    return (
        <TouchableOpacity style={Styles.formStyles.button} onPress={onPress}>
            <Text style={Styles.formStyles.buttonText}>{text}</Text>
        </TouchableOpacity>
    );
};

export default CategoryButton;

