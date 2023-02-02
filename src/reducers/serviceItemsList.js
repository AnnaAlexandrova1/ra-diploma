import * as actions from "../actions/actions";

const initialState = {
    items: [],
    loading: false,
    error: false,
};

const serviceItemsListReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.SET_ITEMS:
            return {
                ...state,
                items: [ ...action.payload.items]
            }
        case actions.SET_MORE_ITEMS:
            return {
                ...state,
                items: [ ...state.items, ...action.payload.items]
            }
        default:
            return state
    
}
}



export default serviceItemsListReducer