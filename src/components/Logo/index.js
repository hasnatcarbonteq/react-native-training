import React from 'react';
import { Image, StyleSheet, Dimensions, View } from 'react-native';

import img from '../../img/logo.png'

const dimensions = Dimensions.get('window');

export const Logo = () => (
    <View style={styles.logoContainer}>
        <Image source={img} style={styles.logo} resizeMode="contain"/>
    </View>
)

const styles = StyleSheet.create({
    logoContainer: {
        alignItems: 'center',
        flex: 0.2,
        borderWidth: 1,
        borderBottomColor: "darksteelblue",
    },
    logo: {
        height: dimensions.width,
        borderBottomWidth: StyleSheet.hairlineWidth
    }
})