import React from 'react';
import { View, Text, Button } from 'react-native';
import {Styles } from '../Styles/Stylesheet';
import axios from 'axios';
function LoginScreen({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setUserPassword] = useState('');
    const handleLogin = async () => {
        try {  // Make a request to your backend API for user authentication
            const response = await axios.post('https://noenavintagedk.appspot.com/login/login', {
                username: username,
                password: password,
            });
            if (response.data.success) {  // Check if the authentication was successful
                navigation.navigate('Home');
            } else {
                Alert.alert('Login Failed', response.data.message);
            }
        } catch (error) {
            console.error('Error during login:', error);
            Alert.alert('Error', 'Failed to login. Please try again.');
        }
    };
    const handleRegister = async () => {
        try{
            //Make a request to backend for user registration
            const response = await axios.post('https://noenavintagedk.appspot.com/users', {
                firstName: firstName,
                lastName: lastName,
                birthDate: birthDate,
                email: email,
                phone: phone,
                password: userPassword,
            });
            // Check if the registration was successful
            if (response.data.success) {
                Alert.alert('Registration successful! you can now login');
                navigation.navigate('Login');
            } else {
                Alert.alert('Registration Failed', response.data.message);
            }
        } catch (error) {
        console.error('Error during registration:', error);
        Alert.alert('Error', 'Failed to register. Please try again.');
        }
    };

    return (
        <View style={Styles.formStyles}>
            <Text>Welcome, please Sign in below</Text>
            <TextInput
                placeholder="Username"
                value={username}
                onChangeText={(text) => setUsername(text)}
            />
            <TextInput
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={(text) => setUserPassword(text)}
            />
            <Button title="Login" onPress={handleLogin} />
            <Button title="New here? Register an account" onPress={handleRegister} />
        </View>
    );
};
export default LoginScreen;