import React from "react";
import {
    View, 
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    TextInput,
   } from 'react-native';

   const openDoodle = require('../../assets/openDoodle.png');

   export default function OnBoard() {
    return (

        <view>
            <Image style={styles.openDoodle} source={openDoodle}/>
        </view>

    );
}