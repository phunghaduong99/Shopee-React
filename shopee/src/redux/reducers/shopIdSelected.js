import * as types from '../constants/ActionTypes';

var data = JSON.parse(sessionStorage.getItem('shopIdSelected'));
var initialState =data? data:  "";

var myReducer = (state = initialState, action) =>{
    switch(action.type){
        
        case types.SAVE_SHOP_ID_SELECTED:
            state = action.shopIdSelected;
            sessionStorage.setItem('shopIdSelected' , JSON.stringify(state) );
            return state;

        default: return state;
    }
    
}

export default myReducer;