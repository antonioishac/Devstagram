import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, Dimensions, TouchableHighlight, Button, TextInput } from 'react-native';

export default class FeedItem extends Component {

    constructor(props) {
        super(props);

        let rawDate = this.props.data.dateComment;
        let date = rawDate.split('-');        
        date = date[2] + '/' + date[1] + '/' + date[0];        

        this.state = {
            dateFormatted: date,
            screenWith:Dimensions.get('window').width,
            photoClickCount:0,
            feedComments: false,
            comment: ''
        }

        this.userClick = this.userClick.bind(this);
        this.photoClick = this.photoClick.bind(this);
        this.directLikeClick = this.directLikeClick.bind(this);
        this.toggleCommentArea = this.toggleCommentArea.bind(this);
        this.enableToggleCommentArea = this.enableToggleCommentArea.bind(this);
    }

    userClick() {
        // Navegando para a tela de perfil com parametros.
        this.props.nav.navigate('Profile', {
            nome: this.props.data.name,
            codigo: this.props.data.codigo
        });        
    }

    commentUserClick(nome, codigo) {
        this.props.nav.navigate('Profile', {
            nome: nome,
            codigo: codigo
        });
    }

    photoClick() {
        let state = this.state;
        state.photoClickCount++;
        this.setState(state);

        if (state.photoClickCount == 2) {
            this.directLikeClick();
        }

        setTimeout( ()=> {
            let state = this.state;
            state.photoClickCount = 0;
            this.setState(state);
        }, 500)
    }

    directLikeClick() {
        //alert('Deu o like: ' + this.props.data.codigo)
        this.props.likeAction(this.props.data.codigo, this.props.data.is_like);
    }

    toggleCommentArea() {
        let state = this.state;
        state.feedComments = true;
        this.setState(state);
        //alert(this.state.feedComments);
    }

    enableToggleCommentArea() {
        let state = this.state;
        state.feedComments = false;
        this.setState(state);

        alert('mensagem: ' + this.state.comment);
    }

    

    render() {

        let likeImage;
        if (this.props.data.is_like == 'S') {
            likeImage = require('../../assets/like_on.png');
        } else {
            likeImage = require('../../assets/like_off.png');
        }

        

        return(
            <View style={styles.feedContainer}>
				<View style={styles.feedHeader}>
					
                    <View style={styles.avatar}>
                        <TouchableHighlight onPress={this.userClick}>
                            <Image source={{uri:this.props.data.avatar}} style={styles.avatarImg} />
                        </TouchableHighlight>
                    </View>
					
                    <View style={styles.userName}>
                        <TouchableHighlight onPress={this.userClick} underlayColor={null}>
                            {/* <Text>{this.props.data.name}</Text> */}
                            <Text>{this.props.data.name} - {this.state.photoClickCount}</Text>
                        </TouchableHighlight>
                    </View>
					
                    <View style={styles.dateArea}>
                        <Image source={require('../../assets/clock.png')} style={styles.clockIcon} />
                        <Text style={styles.postDate}>{this.state.dateFormatted}</Text>
					</View>
				</View>
				
                <View style={styles.feedBody}>
                    <TouchableHighlight onPress={this.photoClick} activeOpacity={1} underlayColor={null}>
                        <Image resizeMode="cover" source={{uri:this.props.data.url}} style={{ with:this.state.screenWith, height:this.state.screenWith }} />
                    </TouchableHighlight>
                </View>

                <View style={styles.feedFooter}>
                    
                    <TouchableHighlight underlayColor={null} onPress={this.directLikeClick}>
                        <View style={styles.likeArea}>
                            <Image source={likeImage} style={styles.footerIcon} />
                            <Text style={styles.likeText}>{this.props.data.likeCount == null ? 0 : this.props.data.likeCount}</Text>
                        </View>
                    </TouchableHighlight>
                    
                    <TouchableHighlight underlayColor={null} onPress={this.toggleCommentArea}>

                        <View style={styles.CommentArea}>
                            <Image source={require('../../assets/comments.png')} style={styles.footerIcon} />
                            <Text style={styles.likeText}>{this.props.data.comments.length}</Text>
                        </View>

                    </TouchableHighlight>


                </View>

                {(this.state.feedComments) &&
                    <View style={styles.textAreaContainer}>

                        <TextInput
                            onChangeText={(comment) => this.setState({comment})}
                            multiline={true}
                            placeholder="Insira seu comentário"
                            numberOfLines={10}
                            style={{ height:200, textAlignVertical: 'top',}}/>                        
                    </View>                    
                }

                {(this.state.feedComments) &&
                
                    <View style={styles.botaoComentarios}>
                        <Button title="Postar comentário" onPress={this.enableToggleCommentArea} />
                    </View>
                }

                {this.props.data.comments.length > 0 &&
                    <View style={styles.commentContainer}>
                        {this.props.data.comments.map((citem)=>{
                            return(
                                <View style={styles.commentItem}>
                                    <TouchableHighlight onPress={()=>{ this.commentUserClick(citem.nome, citem.codigoUsuario) }} style={styles.commentItemUser}>
                                        <Text>{citem.nome}:</Text>
                                    </TouchableHighlight>
                                    <Text>{citem.txt}</Text>
                                </View>
                            );
                        })}
                    </View>
                }
                <View style={styles.feedEndLine}></View>
			</View>
        );
    }
}

const styles = StyleSheet.create({
	feedContainer:{
		width:'100%'
	},
	feedHeader:{
		height:70,
		flexDirection:'row',
		alignItems:'center'
	},
	avatar:{
		width:40,
		height:40,
		backgroundColor:'#CCCCCC',
		marginLeft:10,
		marginRight:15,
		borderRadius:20
    },
    avatarImg:{
        width:40,
        height:40
    },
	userName:{
		width:150,
        height:25,
        fontSize:15
	},
	dateArea:{
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center'
    },
    clockIcon:{
        width:15,
        height:15,
        marginRight:5
    },
	postDate:{		
		height:20,		
        marginRight:10,
        fontSize:15
	},
	feedBody:{
		flex:1,
		backgroundColor:'#EEEEEE'
    },    
    feedFooter:{
        height:60,
        flexDirection:'row',
        justifyContent:'flex-end'
    },
    likeArea:{
        flexDirection: 'row',
        height:60,
        //backgroundColor: '#CCCCCC',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft:20,
        paddingRight:20
    },
    CommentArea:{
        flexDirection: 'row',
        height:60,
        //backgroundColor: '#CCCCCC',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft:20,
        paddingRight:20
    },
    footerIcon:{
        width:25,
        height:25,
        marginRight:10
    },
    likeText:{
        fontSize:18

    },
    commentContainer: {
        padding: 10
    },
    commentItem:{
        flexDirection:'row'
    },
    commentItemUser:{
        marginRight:5
    },
    feedEndLine:{
        height:2,
        backgroundColor: '#CCCCCC'
    },
    textAreaContainer: {
        width: "95%",
        marginLeft: 10,
        fontSize:17,
        paddingLeft: 10,
        borderColor: '#CCCCCC',
        borderWidth: 1
    },
    botaoComentarios:{
        flexDirection:'row',
        justifyContent:'flex-end',
        marginRight:10,
        marginTop:10,
        marginBottom:10
    }
});