const initialState = {
    shoes: [],
    shoesLoadingStatus: 'idle'
}

const shoesList = (state = initialState, action) => {
    switch (action.type) {
        case 'SHOES_FETCHING':
            return {
                ...state,
                shoesLoadingStatus: 'loading'
            }
        case 'SHOES_FETCHED':
            return {
                ...state,
                shoes: action.payload,
                shoesLoadingStatus: 'idle'
            }
        case 'SHOES_FETCHING_ERROR':
            return {
                ...state,
                shoesLoadingStatus: 'error'
            }
        default: return state
    }
}

export default shoesList;