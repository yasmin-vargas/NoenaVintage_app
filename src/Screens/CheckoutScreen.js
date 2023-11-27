import React from 'react';
import { View, Text, Button } from 'react-native';
import { Styles } from '../Styles/Stylesheet';
import Shipping from '.Components/ShippingAPI';
import Map from '.Components/GoogleMaps';

function CheckoutScreen({ navigation }) {
    const [shippingRates, setShippingRates] = useState([]);
    useEffect(() => {
        const shipmentData = {
            // Provide the necessary shipment data as required by Shipmondo
        };

        getShippingRates(shipmentData)
            .then((rates) => {
                setShippingRates(rates);
            })
            .catch((error) => {
                // Handle error
            });
    }, []);

    return (
        <View styles>{Styles.formStyles}
            <Text>Your order details...</Text>
            <Text>Item 1...</Text>
            <Text>Item 2...</Text>
            <Text>Subtotal: 00.00 EUR</Text>
            <Text>Shipping Rates:</Text>
            <Shipping />
            <ul>
                {shippingRates.map((rate, index) => (
                    <li key={index}>{rate.description}: {rate.price}</li>
                ))}
            </ul>
            <Text>Delivery: 00.00 EUR</Text>
            <Text>Total price (incl. VAT): 00.00 EUR</Text>
            <Shipping />
            <Map />
            <Button
                title="Buy now"
                onPress={() => navigation.navigate('ShoppingBag')}
            />
        </View>
    );
}

export default CheckoutScreen;