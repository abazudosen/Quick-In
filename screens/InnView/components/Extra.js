import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { gs, colors } from '../../../styles'

export default function Extra() {
    const extras = [
        'All-Day Breakfasts',
        'Pick-Up/Drop-Off Service',
        'Offer Something For Free',
        'Personalization',
        'Luggage Forwarding',
        'Rental Clothing',
        'State-Of-The-Art TV'
    ]

    return (
        <View style={styles.container}>
            <Text style={gs.sectionTitle}>Before you go</Text>

            <View style={styles.list}>
                {extras.map((extra, key) => {
                    return (
                        <Text style={styles.listItem} key={key}>
                            &mdash; {extra}
                        </Text>
                    );
                })}
            </View>

            <View style={{marginTop: 32, marginBottom: -40}}>
                <TouchableOpacity style={styles.filterButton}>
                    <Text style={{fontWeight: '700', color: '#fff'}}>Filter</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        ...gs.sectionContainter,
        marginTop: 8,
        marginBottom: 64,
    }, 
    list: {
        marginTop: 16,
        marginLeft: 8,
    },
    listItem: {
        color: colors.textSec,
        marginVertical: 8
    },
    filterButton: {
        ...gs.button,
        paddingVertical: 16
    }
})
