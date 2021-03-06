import * as types from '../../constants/ActionTypes';

var data = JSON.parse(localStorage.getItem('listChosenItems'));
var initialState = data ? data : [];

var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SAVE_LIST_CHOSEN_ITEMS:
            state = action.listChosenItems
            localStorage.setItem('listChosenItems', JSON.stringify(state));
            return [...state];

        case types.ADD_LIST_CHOSEN_ITEM:
            state.push(action.chosenItem)
            localStorage.setItem('listChosenItems', JSON.stringify(state));
            return [...state];

        case types.DELETE_LIST_CHOSEN_ITEM:
            let NewList = state;
            let itemId = action.itemId;
            NewList = NewList.filter((c) => c.itemid !== itemId);
            state = NewList;
            // state.push(action.itemId)
            localStorage.setItem('listChosenItems', JSON.stringify(state));
            return [...state];

        case types.ADD_NUMBER_RIVALS_CHOSEN_ITEM:
            let itemid = action.itemid;
            let newList = state;
            newList = newList.map((c) => {
                if (c.itemid === itemid) c.chosen = c.chosen + 1;
                return c
            })
            state = newList;
            localStorage.setItem('listChosenItems', JSON.stringify(state));
            return [...state];

        case types.SUBTRACT_NUMBER_RIVALS_CHOSEN_ITEM:
            let itemid2 = action.itemid;
            let newList2 = state;
            newList2 = newList2.map((c) => {
                if (c.itemid === itemid2) c.chosen = c.chosen - 1;
                return c
            })
            state = newList2;
            localStorage.setItem('listChosenItems', JSON.stringify(state));
            return [...state];

        case types.REMOVE_LIST_CHOSEN_ITEMS:
            state = []
            localStorage.removeItem('listChosenItems')
            return [...state];

        case types.CHANGE_STATUS_AUTO_PRICE:
            
            let status = action.status;
            let itemidShop  = action.itemidShop;
            let UpdateState = state.map(c => {
                if(c.itemid === itemidShop) c.auto = status;
                return c;
            })
            state = UpdateState;
            localStorage.setItem('listChosenItems', JSON.stringify(state));
            return [...state];
        default: return state;
    }

}

export default myReducer;