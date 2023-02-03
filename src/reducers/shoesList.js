const initialState = {
    shoes: [],
    shoesLoadingStatus: 'idle',
    offset: 0,
    end: false,
    search: ''
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
                offset: state.offset + 6,
                shoes: action.payload,
                shoesLoadingStatus: 'idle'
            }
        case 'SHOES_FETCHING_ERROR':
            return {
                ...state,
                shoesLoadingStatus: 'error'
            }
        case 'MORE_SHOES_FETCHING':
            return {
                ...state,
                //offset: state.offset + 6
            }
         case 'MORE_SHOES_FETCHED':
            return {
                ...state,
                offset: state.offset + 6,
                shoes: [...state.shoes, ...action.payload],
                shoesLoadingStatus: 'idle',
                end: action.payload.length < 6
            }
        case 'MORE_SHOES_FETCHING_ERROR':
            return {
                ...state,
                shoesLoadingStatus: 'error'
            }
        case 'SHOES_CATEGORY_CHANGED':
            return {
                ...state,
                shoes: [],
                offset: 0,
                end: false
            }
        case 'SHOES_SEARCH_CHANGED':
            return {
                ...state,
                search: action.payload
            }
        default: return state
    }
}

export default shoesList;