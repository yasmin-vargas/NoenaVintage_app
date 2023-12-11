import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from "react-native";
import { Styles } from '../Styles/Stylesheet';
import axios from 'axios';

function ReturnHistoryScreen ({ navigation }){
    const [returnHistory, setReturnHistory] = useState([]);

    useEffect(() => {
        axios.get('https://noenavintagedk.ew.r.appspot.com/returns/history/1')
            .then(response => {
                setReturnHistory(response.data);
            })
            .catch(error => {
                console.error('Error fetching return history:', error);
            });
    }, []);

    return(
        <View>
            <Text style ={Styles.textStyles.heading}>My Returns</Text>
        </View>
    );
}

export default ReturnHistoryScreen;