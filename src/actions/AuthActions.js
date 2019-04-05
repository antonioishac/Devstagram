import { AsyncStorage } from 'react-native';

export const checkLogin = () => {

    //temporiariamente
    return {
        type: 'changeStatus',
        payload: {
            status: 2
        }
    }
};

export const signInUser = (email, senha) => {
    alert('caiu');
    return (dispatch) => {
        let endpoint = 'http://10.0.2.2:8082/oauth/token';
        let formBody = JSON.stringify({
            'client': 'react',
            'username': email,
            'password': senha,
            'grant_type': 'password'
        });

        fetch(endpoint, {
            method: 'POST',
            headers: {
                // 'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            body: formBody
        }).then((r) => r.json()).then((json) => {            
                
            AsyncStorage.setItem('access_token', json.access_token)
            
            dispatch({
                type:'changeStatus',
                    payload:{
                        status:1
                    } 
            })

        }).catch((error) => {
            alert('Erro de requisição'+error)
        })
    }
}

export const registerNewUser = (nome, email, senha) => {
    return (dispatch) => {
        let endpoint = 'http://10.0.2.2:8082/user';       
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
                
            // AsyncStorage.setItem('jwt', json.jwt)
            dispatch({
                type:'changeStatus',
                    payload:{
                        status:1
                    } 
            })

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