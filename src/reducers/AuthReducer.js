const initialState = {
    nome:'',
    email:'',
    senha:'',
    status:5
};

const AuthReducer = (state = initialState, action)=> {

    // Alteracao dos states
    if (action.type == 'changeNome') {
        return { ...state, nome:action.payload.nome };
    }

    if (action.type == 'changeEmail') {
        return { ...state, email:action.payload.email };
    }

    if (action.type == 'changeStatus') {
        return { ...state, status:action.payload.status }
    }

    if (action.type =='changeSenha') {
        return { ...state, senha:action.payload.senha }
    }

    return state;
}

export default AuthReducer;