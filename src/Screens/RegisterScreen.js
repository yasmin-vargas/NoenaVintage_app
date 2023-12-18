import React, { useState } from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert, ActivityIndicator} from 'react-native';
import { Styles } from '../Styles/Stylesheet';
import axios from 'axios';

function RegisterScreen({ navigation }) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleRegister = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:8080/login/register', {
                firstName: firstName,
                lastName: lastName,
                birthDate: birthDate,
                email: email,
                phone: phone,
                password: password,
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
        } finally {
            setLoading(false);  // Set loading back to false after the request is completed
        }
    };

    const handleReturn = () => {   // Navigate back to the previous screen
        navigation.goBack();
    };

    return (
        <View style={Styles.formStyles.container}>
            <Text style={Styles.textStyles.heading}>Registration Form</Text>
            <TextInput
                placeholder="First Name"
                value={firstName}
                onChangeText={(text) => setFirstName(text)}
            />
            <TextInput
                placeholder="Last Name"
                value={lastName}
                onChangeText={(text) => setLastName(text)}
            />
            <TextInput
                placeholder="Birth Date"
                value={birthDate}
                onChangeText={(text) => setBirthDate(text)}
            />
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={(text) => setEmail(text)}
            />
            <TextInput
                placeholder="Phone"
                value={phone}
                onChangeText={(text) => setPhone(text)}
            />
            <TextInput
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={(text) => setPassword(text)}
            />
            <TouchableOpacity
                style={Styles.formStyles.button}
                onPress={handleRegister}
            >
                <Text style={Styles.formStyles.buttonText}>Register now</Text>
            </TouchableOpacity>

            {loading && (
                <View style={Styles.formStyles.container}>
                    <ActivityIndicator size="large" color="#0000ff" />
                    <Text style={Styles.textStyles.Text}>Creating an account...</Text>
                </View>
            )}
        </View>
    );
}

export default RegisterScreen;