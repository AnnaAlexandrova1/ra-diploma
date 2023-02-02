const initialState = {
    categoryes: [],
    categoryLoadingStatus: 'idle',
    activeCategory: {
        name: 'all',
        id: ''
    }
    
}

const categoryes = (state = initialState, action) => {
    switch (action.type) {
        case 'CATEGORY_FETCHING':
            return {
                ...state,
                categoryLoadingStatus: 'loading'
            }
        case 'CATEGORY_FETCHED':
            return {
                ...state,
                categoryes: action.payload,
                categoryLoadingStatus: 'idle'
            }
        case 'CATEGORY_FETCHING_ERROR':
            return {
                ...state,
                categoryLoadingStatus: 'error'
            }
        case 'ACTIVE_CATEGORY_CHANGED':
            return {
                ...state,
                activeCategory: {...state.activeCategory, name: action.payload.name, id: action.payload.id }
            }
        default: return state
    }
}
export default categoryes