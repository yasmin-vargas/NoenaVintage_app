import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import {Styles } from '../Styles/Stylesheet';
import axios from 'axios';

function LoginScreen({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = async () => {
        // Hardcoded username and password for testing
        const testUsername = 'NoenaAdmin';
        const testPassword = 'Noena3000';

        try {
            setLoading(true);

            // Simulate an API request delay
            await new Promise(resolve => setTimeout(resolve, 1000));
            console.log('Attempting login with:', username, password);

            if (username === testUsername && password === testPassword) {
                console.log('Login Successful');
                Alert.alert('Login Successful', 'You will be redirected to your Account Screen.');
                navigation.navigate('Account Screen');
            } else {
                console.log('Login Failed');
                Alert.alert('Login Failed', 'Invalid username or password.');
            }
        } finally {
            setLoading(false);
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
                onChangeText={(text) => setPassword(text)}
            />
            <TouchableOpacity
                style={Styles.formStyles.button}
                onPress={handleLogin}
            >
                <Text style={Styles.formStyles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={Styles.formStyles.button}
                onPress={() => navigation.navigate('Register Screen')}
            >
                <Text style={Styles.formStyles.buttonText}>New here? Register an account</Text>
            </TouchableOpacity>

            {loading && (
                <View style={Styles.formStyles.container}>
                    <ActivityIndicator size="large" color="#0000ff" />
                    <Text style={Styles.textStyles.Text}>Logging in...</Text>
                </View>
            )}
        </View>
    );
}
export default LoginScreen;