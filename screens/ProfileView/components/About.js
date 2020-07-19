import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {gs, colors} from '../../../styles'

export default function About() {
    return (
        <View style={styles.container}>
            <Text style={gs.sectionTitle}>ABOUT US</Text>
            <Text style={styles.about}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, s Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            ed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 32,
    },
    about: {
        fontSize: 15,
        fontWeight: '500',
        color: colors.darkHl,
        marginTop: 8,
        lineHeight: 22,  
    }
})