import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { Feather, Ionicons, FontAwesome5, Entypo } from "@expo/vector-icons";
import { gs, colors } from "../../../styles";

export default function Address() {
    return (
        <View >
            <View style={{backgroundColor: '#000'}}>
                <Image source={require('../../../assets/map.png')} style={{height: 200, opacity: 0.75}} />
            </View>

            <View  style={styles.addressContainer}>
                <Image source={require('../../../assets/pin.png')} style={{height: 64, width: 64}} />

                <View style={{marginLeft: 8, marginTop: 24}}> 
                    <Text style={gs.sectionTitle}>Address</Text>
                    <Text style={styles.address}>{`12 Okpo Ewod Street, Bayide CRS\n11103, Naija`}</Text>

                    <View style={{marginTop: 16}}>
                        <TouchableOpacity style={styles.checkButton}>
                            <Text style={gs.smallText}>Check it</Text>
                            <Entypo name="chevron-right" size={12} color="#fff" style={{marginLeft: 4}} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View> 
        </View>
    )
}

const styles = StyleSheet.create({
    addressContainer: {
        ...gs.absoluteFull,
        flexDirection: 'row',
        paddingVertical: 16,
        paddingHorizontal: 32,
    },
    address: {
        ...gs.smallText,
        color: colors.darkHl,
        letterSpacing: 1,
        marginTop: 6,
        lineHeight: 20
    },
    checkButton: {
        ...gs.button,
        paddingVertical: 8,
        paddingHorizontal: 16,
        alignSelf: 'flex-start',
        flexDirection: 'row'
    }
})
