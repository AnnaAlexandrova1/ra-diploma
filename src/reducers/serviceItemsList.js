import * as actions from "../actions/actions";

const initialState = [];

const serviceItemsListReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.SET_ITEMS:
            return [
                ...state, ...action.payload.charList
            ]
            
        default:
            return state
    
}
}

export default serviceItemsListReducer