/* import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {View, Text} from 'react-native';

const ShipmondoAPIKey = '9f7a5f87-9634-4854-a8ca-8080e6086cd9'
const ShippingModuleAPIKey = '4961ceb0-6be8-48a2-86d5-48d091253ba2'
const GoogleMapsAPIKey= 'AIzaSyAYNjZljvIzCgFT8vYAkXGuEvBdgwFXFd0'

const ShippingAPI = ({ shipmentData }) => {
    const [shippingRates, setShippingRates] = useState(null);

    useEffect(() => {
        const fetchShippingRates = async () => {
            try {
                const response = await ShipmondoAPIKey.post('/shipments/rates', shipmentData);
                setShippingRates(response.data);
            } catch (error) {
                console.error('Error fetching shipping rates:', error);
            }
        };
        fetchShippingRates();
    }, [shipmentData]);

    return (
        <View>
            <Text style={Styles.textStyles.text}>
                Shipping Information
            </Text>
            {shippingRates && (
                <View>
                    <Text>Shipping rate: {shippingRates.someProperty} EUR</Text>
                </View>
            )}
        </View>
    );
};

export default ShippingAPI;

 */