import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Button, Alert } from 'react-native';
import {Styles } from '../Styles/Stylesheet';
import axios from 'axios';
function LoginScreen({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setUserPassword] = useState('');

    const handleLogin = async () => {
        try {  // Make a request to your backend API for user authentication
            const response = await axios.post('https://noenavintagedk.ew.r.appspot.com/users/login', {
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

    return (
        <View style={Styles.formStyles.container}>
            <Text style={Styles.textStyles.heading}>Welcome! please sign in</Text>
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
            <TouchableOpacity
                style={Styles.formStyles.button}
                onPress={handleLogin}
            >
                <Text style={Styles.formStyles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={Styles.formStyles.button}
                onPress={() => navigation.navigate('Register')}
            >
                <Text style={Styles.formStyles.buttonText}>New here? Register an account</Text>
            </TouchableOpacity>
        </View>
    );
}
export default LoginScreen;