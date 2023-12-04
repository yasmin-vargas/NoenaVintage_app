import React, { useEffect, useState } from 'react';
import { View, Text } from "react-native";
import { Styles } from '../Styles/Stylesheet';
import axios from 'axios';

function AccountScreen ({ navigation }){
    const [orderHistory, setOrderHistory] = useState([]);

    useEffect(() => {
        axios.get('https://noenavintagedk.appspot.com/orders/all-orders')
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
            <Text>My Orders: </Text>
            {orderHistory.map(order => (
                <View key={order.id}>
                    {/* Display relevant information about each order */}
                    <Text>Order ID: {order.id}</Text>
                    {/* Add more details as needed */}
                </View>
            ))}
        </View>
    );
}

export default AccountScreen;