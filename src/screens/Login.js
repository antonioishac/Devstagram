import React, { Component } from 'react';
import { View, ImageBackground, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { checkLogin } from '../actions/AuthActions';

export class Login extends Component {
    static navigationOptions = {
        title:'Login',
        header: null
    }

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return(
            <ImageBackground source={require('../assets/bg.jpg')} style={styles.container}>
                <Text style={styles.logo}>Devstagram</Text>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        resizeMode: 'contain'
    },
    logo: {
        fontSize: 27,
        color: '#FFFFFF'
    }
});

const mapStateToProps = (state) => {
    return {
        status:state.auth.status
    };
};

const LoginConnect = connect(mapStateToProps, {checkLogin})(Login);
export default LoginConnect;