import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
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
            <View style={styles.container}>
                <Text>Página de Login</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});

const mapStateToProps = (state) => {
    return {
        status:state.auth.status
    };
};

const LoginConnect = connect(mapStateToProps, {checkLogin})(Login);
export default LoginConnect;