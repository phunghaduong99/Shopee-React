import * as types from '../constants/ActionTypes';

// var data = JSON.parse(localStorage.getItem('token'));
var initialState =  [];

var myReducer = (state = initialState, action) =>{
    switch(action.type){
        case types.SAVE_LIST_SEARCH_ITEMS:
            state = action.listSearchItems
            return [...state];
        
        default: return state;
    }
    
}

export default myReducer;