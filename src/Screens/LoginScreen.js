import React from 'react';
import { View, Text, Button } from 'react-native';
import {colour, Styles } from '../Styles/Stylesheet';
function LoginScreen({ navigation }) {
    return (
        <View>
            <Text>Sign in</Text>
            <Button
                title="Sign in"
                onPress={() => navigation.navigate('Details')}
            />
            <Text>Are you new here?</Text>
            <Button
                title="Register Account"
                onPress={() => navigation.navigate('Details')}
            />
        </View>
    );
}
export default LoginScreen;