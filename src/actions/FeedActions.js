import { AsyncStorage } from 'react-native';
import { checkLogout } from './AuthActions';

export const getFeed = () => {
    
    
    return (dispatch) => {

        dispatch({
			type:'changeFeedLoadingStatus',
			payload:{
				status:true
			}
        });        

        AsyncStorage.getItem('access_token')
        .then((data)=>{
            
            if (data != null && data != '') {

                let endpoint = 'http://10.0.2.2:8082/feed';
                fetch(endpoint, {
                    method: 'GET',
                    headers: {
                        'Authorization': 'Bearer ' + data,
                        'Accept': 'application/json'                            
                    },
                    body: null
                })
                .then((r) => r.json())
                .then((json) => {                        
                    if (json.error == '' || json.error == undefined) {                
                        
                        dispatch({
                            type:'changeFeedLoadingStatus',
                            payload:{
                                status:false
                            }
                        });

                        dispatch({
                            type:'incrementFeed',
                            payload:{
                                feed:json
                            }
                        });
            
                    } else {
                        alert('Token inválido: ' + json.error);

                        dispatch(checkLogout());
                    }

                }).catch((error) => {
                    alert('Erro de requisição ' + error)
                })

            } else {
                dispatch(checkLogout());
            }

        })
        .catch(()=>{
            dispatch(checkLogout());
        })            
    }    
}

