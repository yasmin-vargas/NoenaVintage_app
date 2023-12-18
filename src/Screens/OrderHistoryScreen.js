import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from "react-native";
import { Styles } from '../Styles/Stylesheet';
import axios from 'axios';

function OrderHistoryScreen ({ navigation }){
    const [orderHistory, setOrderHistory] = useState([]);

    useEffect(() => {
        const fetchOrderHistory = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8080/orders/history/1');
                setOrderHistory(response.data);
            } catch (error) {
            console.error('Error fetching order history:', error);
            setError('Error fetching order history. Please try again.');
            } finally {
            setLoading(false);
            }
        };
        fetchOrderHistory();
    }, []);

    return(
        <View contentContainerStyle={Styles.productStyles.container}>
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