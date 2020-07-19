import React from 'react'
import { StyleSheet, Text, View, ScrollView, StatusBar, ActivityIndicator } from 'react-native'
import Header from './components/Header'
import {gs, colors} from '../../styles'

export default class index extends React.Component {
    state = {
        user: {},
        isLoading: true
    }

    async componentDidMount() {
        try{
            let res = await fetch('https://randomuser.me/api/?inc=name,picture,location&noinfo')
            let user = await res.json()

            this.setState({user: user.results[0]}, () => {
                this.setState({isLoading: false})
            })
        } catch(err) {
            console.log(err)
        }
    }

    render(){
        if (this.state.isLoading) {
            return (
                <View style={[gs.center, styles.container]}> 
                    <StatusBar barstyle="light-content" />

                    <ActivityIndicator size="large" />
                </View>
            )
        }
        return (
            <ScrollView style={styles.container}>
                <Header user={this.state.user} />
            </ScrollView>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.darkBg
    }
})
