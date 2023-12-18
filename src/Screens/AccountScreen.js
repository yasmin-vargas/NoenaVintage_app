import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from "react-native";
import { Styles } from '../Styles/Stylesheet';
import axios from 'axios';

function AccountScreen ({ navigation }){
    const [orderHistory, setOrderHistory] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8080/orders/history/1')
            .then(response => {
                setOrderHistory(response.data);
            })
            .catch(error => {
                console.error('Error fetching order history:', error);
            });
    }, []);

    return(
        <View>
            <Text style ={Styles.textStyles.heading}>My Account</Text>
            <TouchableOpacity
                style={Styles.formStyles.button}
                onPress={() => navigation.navigate('Order History')}
            >
                <Text style={Styles.formStyles.buttonText}>My Orders</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={Styles.formStyles.button}
                onPress={() => navigation.navigate('Return History')}
            >
                <Text style={Styles.formStyles.buttonText}>My Returns</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={Styles.formStyles.button}
                onPress={() => navigation.navigate('Personal Information')}
            >
                <Text style={Styles.formStyles.buttonText}>My Personal Information</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={Styles.formStyles.button}
                onPress={() => navigation.navigate('Settings')}
            >
                <Text style={Styles.formStyles.buttonText}>My Settings</Text>
            </TouchableOpacity>
        </View>
    );
}

export default AccountScreen;