import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { checkLogin } from '../actions/AuthActions';

export class Home extends Component {
    static navigationOptions = {
        title:'Feed'
    }

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return(
            <View style={styles.container}>
                <Text>Feed de fotos</Text>
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

const HomeConnect = connect(mapStateToProps, {checkLogin})(Home);
export default HomeConnect;