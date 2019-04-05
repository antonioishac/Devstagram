import React, { Component } from 'react';
import { View, ImageBackground, Text, TextInput, TouchableHighlight, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { checkLogin } from '../actions/AuthActions';

export class SignUp extends Component {
    static navigationOptions = {
        title:'SignUp',
        header: null
    }

    constructor(props) {
        super(props);
        this.state = {};

        this.signInAction = this.signInAction.bind(this);
    }

    signInAction(){
        this.props.navigation.goBack();
    }

    render() {
        return(
            <ImageBackground source={require('../assets/bg.jpg')} style={styles.container}>
                <Text style={styles.logo}>Cadastro</Text>

                <TextInput style={styles.input} placeholder="Digite seu nome" placeholderTextColor="#FFFFFF" />
                <TextInput style={styles.input} placeholder="Digite seu e-mail" placeholderTextColor="#FFFFFF" />
                <TextInput style={styles.input} placeholder="Digite sua senha" placeholderTextColor="#FFFFFF" secureTextEntry={true} />

                <TouchableHighlight style={styles.actionButton} onPress={ ()=>{} } underlayColor="#307EAF">
                    <Text style={styles.actionButtonText}>Cadastrar</Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.signButton} onPress={this.signInAction} underlayColor="transparent">
                    <Text style={styles.signButtonText}>Deseja fazer login, clica aqui</Text>
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

const SignUpConnect = connect(mapStateToProps, {checkLogin})(SignUp);
export default SignUpConnect;