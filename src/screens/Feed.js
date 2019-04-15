import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions, StackActions } from 'react-navigation';
import { checkLogin, checkLogout } from '../actions/AuthActions';
import { getFeed, likePhoto, changeComment } from '../actions/FeedActions';
import FeedItemFake from '../components/feed/FeedItemFake';
import FeedItem from '../components/feed/FeedItem';


export class Feed extends Component {

    static navigationOptions = {
        title:'Devstagram'
    }
    
    constructor(props) {
        super(props);
        // this.state = {
        //     feedFake:[
        //         {
        //             "codigo": 1,
        //             "name": "Antonio",
        //             "codigUsuario": 1,
        //             "likeCount": 0,
        //             "url": "https://fusionhealthcare.com.br/avatarApp/trabalhando-na-praia.jpg",
        //             "dateComment": "2019-04-09",
        //             "avatar": "https://fusionhealthcare.com.br/avatarApp/avatar.png",                    
        //             "comments": [
        //                 {
        //                     "codigo": 1,
        //                     "codigoFeed": 1,
        //                     "codigoUsuario": 1,
        //                     "codigoPhoto": 1,
        //                     "dataComment": "2019-04-08",
        //                     "txt": "Estudando React Native",
        //                     "nome": "Antonio Ishac"
        //                 }
        //             ],
        //             "is_like": 'N',
        //         },
        //         {
        //             "codigo": 2,
        //             "name": "Jesus",
        //             "codigUsuario": 2,
        //             "likeCount": 1,
        //             "url": "https://fusionhealthcare.com.br/avatarApp/natal.jpg",
        //             "dateComment": "2019-04-09",
        //             "avatar": "https://fusionhealthcare.com.br/avatarApp/avatar.png",                    
        //             "comments": [
        //                 {
        //                     "codigo": 3,
        //                     "codigoFeed": 2,
        //                     "codigoUsuario": 2,
        //                     "codigoPhoto": 2,
        //                     "dataComment": "2019-04-08",
        //                     "txt": "Nosso natal FELIZ !!!",
        //                     "nome": "Testador"
        //                 }
        //             ],
        //             "is_like": 'S',
        //         }
        //     ]
        // };

        //this.logoutAction = this.logoutAction.bind(this);
        this.verifyStatus = this.verifyStatus.bind(this);
        this.likeAction = this.likeAction.bind(this);
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

    likeAction(id, is_liked) {
        this.props.likePhoto(id, is_liked)
    }

    render() {
        return(
            <View style={styles.container}>

                {this.props.feedLoading == true &&
					<View>
						<FeedItemFake />
						<FeedItemFake />
					</View>
                }

                {(this.props.feedLoading == false && this.props.feed.length == 0) &&
                    <View style={styles.feedZero}>
                        <Text>Não há itens a serem mostrados</Text>
                    </View>
                }

                {(this.props.feedLoading == false && this.props.feed.length > 0) &&
                    <FlatList
                        data={this.props.feed}
                        renderItem={({item})=><FeedItem data={item} likeAction={this.likeAction} nav={this.props.navigation} />}
                        keyExtractor={(item)=>item.codigo}
                        style={styles.feed}
                    />
                }

                {/* <Text>Feed de fotos</Text> */}

                {/* <Button title="Sair" onPress={this.logoutAction}></Button> */}

                {/* <Button title="Aperte aqui" onPress={ ()=>{
                    this.props.getFeed();
                }} /> */}

                {/* <Text>{this.props.feed.length}</Text> */}
            </View>
        );
    }    
}

const styles = StyleSheet.create({
	container:{
		flex:1
	},
	feedZero:{
		flex:1,
		justifyContent:'center',
		alignItems:'center'
	},
	feed:{
		flex:1
	}
});

const mapStateToProps = (state) => {
    return {
        status:state.auth.status,
        feed:state.feed.feed,
        feedLoading:state.feed.feedLoading
    };
};

const FeedConnect = connect(mapStateToProps, {checkLogin, checkLogout, getFeed, likePhoto, changeComment})(Feed);
export default FeedConnect;