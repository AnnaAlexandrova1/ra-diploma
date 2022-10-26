const initialState = { id: null }

const clickOrder = (state = initialState, action) => {
    
    switch (action.type) {
        case "RND":
            return {
                ...state,
                value: action.payload
            };
        default:
            return state;
    }
}

export default clickOrder;