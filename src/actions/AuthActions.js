import { AsyncStorage } from 'react-native';
//import DevstagramApi from '../DevstagramAPI';

export const checkLogin = () => {

    return (dispatch) => {

        AsyncStorage.getItem('access_token')
            .then((data) => {
                if (data != null && data != '') {
                    
                    dispatch({
                        type:'changeStatus',
                        payload:{
                            status:1
                        }
                    });
                } else {

                    dispatch({
                        type:'changeStatus',
                        payload:{
                            status:2
                        }
                    });
                }
            })
            .catch((error)=> {
                dispatch({
                    type:'changeStatus',
                    payload:{
                        status:2
                    }
                });
            });
    };
};

export const checkLogout = () => {

    AsyncStorage.setItem('access_token', '');

    return {
        type:'changeStatus',
        payload:{
            status:2
        }        
    }
};

export const signInUser = (email, senha) => {
    return (dispatch) => {
        
        let endpoint = 'http://10.0.2.2:8082/oauth/token';
        let formBody = 'username=' + email + '&password=' + senha + '&grant_type=password';

        fetch(endpoint, {
            method: 'POST',
            headers: {
                'Authorization': 'Basic cmVhY3Q6cmVhY3Q=',
                //'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formBody
        })
        .then((r) => r.json())
        .then((json) => {
                        
            if (json.error == '' || json.error == undefined) {

                AsyncStorage.setItem('access_token', json.access_token);                
                
                dispatch({
                    type:'changeStatus',
                        payload:{
                            status:1
                        } 
                })
    
                //alert(AsyncStorage.getItem('access_token'));
            } else {
                alert(json.error);
            }

        }).catch((error) => {
            alert('Erro de requisição'+error)
        })
    }
}

export const registerNewUser = (nome, email, senha) => {
    
    return (dispatch) => {
        let endpoint = 'http://10.0.2.2:8082/user';
        //let endpoint = 'http://localhost:8082/user';
        let jsonData = JSON.stringify({
            nome: nome,
            email: email,
            senha: senha
        })
        fetch(endpoint, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: jsonData
        }).then((r) => r.json()).then((json) => {            
            
            // dispatch({
            //     type:'changeStatus',
            //         payload:{
            //             status:1
            //         } 
            // })

        }).catch((error) => {
            alert('Erro de requisição'+error)
        })
    }
}

export const changeNome = (nome)=>{
    return {
        type:'changeNome',
        payload:{
            nome:nome
        }
    }
};

export const changeEmail = (email)=>{
    return {
        type:'changeEmail',
        payload:{
            email:email
        }
    }
};

export const changeSenha = (senha)=> {
    return {
        type:'changeSenha',
        payload:{
            senha:senha
        }
    }
}