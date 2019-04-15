const initialState = {
    feed:[],
    offset:0,
    feedLoading:false
};

const FeedReducer = (state = initialState, action)=> {

    // Alteracao dos states

    if (action.type == 'addLike') {

        let feed = state.feed;

        for (let i in feed) {
            if (feed[i].codigo == action.payload.id) {
                feed[i].likeCount++;
                feed[i].is_like = 'S';
            }
        }

        return {...state, feed:feed};

    }

    if (action.type == 'removeLike') {

        let feed = state.feed;

        for (let i in feed) {
            if (feed[i].codigo == action.payload.id) {
                feed[i].likeCount--;
                feed[i].is_like = 'N';
            }
        }

        return {...state, feed:feed};

    }

    if (action.type == 'incrementFeed') {
        return { ...state, feed:state.feed.concat(action.payload.feed) };
    }  
    
    if(action.type == 'changeFeedLoadingStatus') {
		return { ...state, feedLoading:action.payload.status };
    }
    
    if (action.type == 'changeComment') {
        return { ...state, comment:action.payload.comment };
    }

    return state;
}

export default FeedReducer;