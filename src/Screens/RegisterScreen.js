import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Button, Alert } from 'react-native';
import { Styles } from '../Styles/Stylesheet';
import axios from 'axios';

function RegisterScreen({ navigation }) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async () => {
        try {
            //Make a request to backend for user registration
            const response = await axios.post('https://noenavintagedk.ew.r.appspot.com/users/post', {
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
        </View>
    );
}

export default RegisterScreen;