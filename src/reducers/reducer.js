const initialState = { itemId: null }

const reducer = (state = initialState, action) => {
    
    switch (action.type) {
        case "ADD_ITEM":
            return {
                ...state,
                itemId: action.payload
            };
        default:
            return state;
    }
}

export default reducer;