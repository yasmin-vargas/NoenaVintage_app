import React, { useEffect, useState } from 'react';
import { View, Text } from "react-native";
import { Styles } from '../Styles/Stylesheet';
import axios from 'axios';

function AccountScreen ({ navigation }){
    const [orderHistory, setOrderHistory] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/orders')
            .then(response => {
                setOrderHistory(response.data);
            })
            .catch(error => {
                console.error('Error fetching order history:', error);
            });
    }, []);

    return(
        <View>
            <Text>My Account</Text>
            <Text>My Orders: {orderHistory}</Text>
        </View>
    );
}

export default AccountScreen;