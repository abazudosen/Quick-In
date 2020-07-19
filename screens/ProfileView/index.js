import React from 'react'
import { StyleSheet, Text, View, StatusBar, ActivityIndicator } from 'react-native'
import Header from './components/Header'
import Stats from './components/Stats'
import Location from './components/Location'
import Photo from './components/Photo'
import About from './components/About'
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
            });
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
            <View style={styles.container}>
                <StatusBar barStyle="light-content" />
                <Header user={this.state.user} />
                <Stats />
                <About />
                <Location />
                <Photo />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.darkBg
    }
})
