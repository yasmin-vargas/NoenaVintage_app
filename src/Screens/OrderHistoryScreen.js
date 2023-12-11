import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from "react-native";
import { Styles } from '../Styles/Stylesheet';
import axios from 'axios';

function OrderHistoryScreen ({ navigation }){
    const [orderHistory, setOrderHistory] = useState([]);

    useEffect(() => {
        axios.get('https://noenavintagedk.ew.r.appspot.com/orders/history/1')
            .then(response => {
                setOrderHistory(response.data);
            })
            .catch(error => {
                console.error('Error fetching order history:', error);
            });
    }, []);

    return(
        <View>
            <Text style ={Styles.textStyles.heading}>My Orders:</Text>
            {orderHistory.map(order => (
                <View key={order.orderNumber}>
                    <Text>Order Number #: {order.orderNumber}</Text>
                    <Text>Order Date: {order.orderDate}</Text>
                    <Text>Total Amount: {order.totalAmount}</Text>
                    <Text>--------------------</Text>
                </View>
            ))}
        </View>
    );
}

export default OrderHistoryScreen;