import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import {Entypo} from '@expo/vector-icons'
import {gs, colors} from '../../../styles'

export default function Location() {
    return (
        <View style={styles.container}>
            <View style={{width: 75, height: 75}}>
                <Image source={require('../../../assets/location.png')} style={{flex: 1, width: 50}} resizeMode="center" />
            </View>

            <View style={{flex: 1}}>
                <Text style={styles.location}>Bayside</Text>
                <Text style={styles.distance}>7km away</Text>
            </View>
            <Entypo name="chevron-right" color={colors.darkHl} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        ...gs.rowCenter,
        backgroundColor: colors.lightBg,
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    location: {
        fontSize: 18,
        color: colors.text,
        fontWeight: '500',
    },
    distance: {
        ...gs.smallText,
        color: colors.darkHl,
        marginTop: 4,
        textTransform: 'uppercase'
    }
})