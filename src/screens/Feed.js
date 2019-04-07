import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions, StackActions } from 'react-navigation';
import { checkLogin, checkLogout } from '../actions/AuthActions';
import { getFeed } from '../actions/FeedActions';

export class Feed extends Component {

    static navigationOptions = {
        title:'Devstagram'
    }
    
    constructor(props) {
        super(props);
        this.state = {};

        //this.logoutAction = this.logoutAction.bind(this);
        this.verifyStatus = this.verifyStatus.bind(this);
    }

    verifyStatus() {

        if (this.props.status == 2) {
            this.props.navigation.dispatch(StackActions.reset({
                index:0,
                actions:[
                    NavigationActions.navigate({routeName: 'Login'})
                ]
            }));
        }
    }

    componentDidUpdate() {
        this.verifyStatus();
    }

    componentDidMount() {
        this.props.getFeed();
    }

    logoutAction() {
        this.props.checkLogout();
        this.props.navigation.dispatch(StackActions.reset({
            index:0,
            key:null,
            actions:[
                NavigationActions.navigate({routeName: 'Login'})
            ]
        }));
    }

    render() {
        return(
            <View style={styles.container}>
                <Text>Feed de fotos</Text>

                {/* <Button title="Sair" onPress={this.logoutAction}></Button> */}

                {/* <Button title="Aperte aqui" onPress={ ()=>{
                    this.props.getFeed();
                }} /> */}

                <Text>{this.props.feed.length}</Text>
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
        status:state.auth.status,
        feed:state.feed.feed
    };
};

const FeedConnect = connect(mapStateToProps, {checkLogin, checkLogout, getFeed})(Feed);
export default FeedConnect;