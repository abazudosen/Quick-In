import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'
import {Ionicons, Entypo} from '@expo/vector-icons'
import {gs, colors} from '../../../styles'


export default class Header extends Component {
    render() {
        const user = this.props.user
        const name = `${user.name.first} ${user.name.last}`
        return (
            <LinearGradient colors={[colors.orange, colors.pink]} start={[0,0]} end={[1,1]}>
                <View style={{marginHorizontal: 32, paddingVertical: 64}}>
                    <View style={gs.rowBetween}>
                        <Ionicons name="md-arrow-back" color={colors.text} size={32} />
                        <Entypo name="dots-three-vertical" color={colors.text} size={24} />
                    </View>

                    <View style={styles.imageContainer}>
                        <View>
                            <View styel={styles.check}>
                                <Ionicons name="md-checkmark" size={20} color={colors.pink} />
                            </View>

                            <Image source={{uri: user.picture.large}} style={{width: 100, height: 100, borderRadius: 32}} />
                        </View>
                    </View>
                </View>
            </LinearGradient>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        ...gs.center,
        marginTop: 16,
        shadowColor: colors.darkBg,
        shadowOffset: { height: 3, width: 1},
        shadowOpacity: 0.5
    },
    check: {
        ...gs.center,
        backgroundColor: colors.text,
        borderRadius: 100,
        width: 32,
        height: 32,
        shadowColor: colors.darkBg,
        shadowOffset: {height: 3, width: 1},
        shadowOpacity: 0.3,
        position: 'absolute',
        zIndex: 1,
        right: -16,
        bottom: 16
    }
})
