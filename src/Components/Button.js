import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CategoryButton = ({ text, onPress }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#61a492', // Noena Mint green
        borderRadius: 10, // Adjust this value to control the roundness of the edges
        padding: 10, // Adjust this value to control the padding inside the button
        alignItems: 'center', // Center horizontally
    },
    buttonText: {
        color: 'white', // Text color
        fontSize: 18, // Adjust this value to control the text size
    },
});
export default CategoryButton;

