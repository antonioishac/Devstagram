import React, { Component } from 'react';
import { View, ImageBackground, Text, TextInput, TouchableHighlight, StyleSheet } from 'react-native';
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

        this.signUpAction = this.signUpAction.bind(this);
    }

    signUpAction(){
        this.props.navigation.navigate('SignUp');
    }

    render() {
        return(
            <ImageBackground source={require('../assets/bg.jpg')} style={styles.container}>
                <Text style={styles.logo}>Devstagram</Text>

                <TextInput style={styles.input} placeholder="Digite seu e-mail" placeholderTextColor="#FFFFFF" />
                <TextInput style={styles.input} placeholder="Digite sua senha" placeholderTextColor="#FFFFFF" secureTextEntry={true} />

                <TouchableHighlight style={styles.actionButton} onPress={ ()=>{} } underlayColor="#307EAF">
                    <Text style={styles.actionButtonText}>Login</Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.signButton} onPress={this.signUpAction} underlayColor="transparent">
                    <Text style={styles.signButtonText}>Ainda não tem cadastro, clica aqui</Text>
                </TouchableHighlight>
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
        color: '#FFFFFF',
        marginBottom:30
    },
    input: {
        width: "90%",
        height: 50,
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        borderRadius:5,
        color:'#FFFFFF',
        fontSize:17,
        marginBottom:10
    },
    actionButton: {
        width:"90%",
        height:50,
        backgroundColor: 'transparent',
        borderRadius:5,
        borderWidth:2,
        borderColor:'#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    actionButtonText: {
        color:'#FFFFFF',
        fontSize: 17
    },
    signButton: {
        width: "90%",
        height: 50,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:40
        
    },
    signButtonText: {
        color:'#FFFFFF',
        fontSize: 13
    }
});

const mapStateToProps = (state) => {
    return {
        status:state.auth.status
    };
};

const LoginConnect = connect(mapStateToProps, {checkLogin})(Login);
export default LoginConnect;