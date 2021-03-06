import * as types from '../constants/ActionTypes';

var data = JSON.parse(localStorage.getItem('listShop'));
var initialState =data? data:  [];

var myReducer = (state = initialState, action) =>{
    switch(action.type){
        
        case types.SAVE_LIST_SHOP:
            state = action.listShop
            localStorage.setItem('listShop' , JSON.stringify(state) );
            return [...state];

        default: return state;
    }
    
}

export default myReducer;