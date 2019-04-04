const initialState = {
    email:'',
    password:'',
    status:5
};

const AuthReducer = (state = initialState, action)=> {

    // Alteracao dos states
    if (action.type == 'changeEmail') {
        return { ...state, email:action.payload.email };
    }

    if (action.type == 'changeStatus') {
        return { ...state, status:action.payload.status }
    }

    return state;
}

export default AuthReducer;