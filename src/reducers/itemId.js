const initialState = {
    id:'',
    itemLoadingStatus: 'idle',
    item:{}
}

const itemId = (state = initialState, action) => {
    switch (action.type) {
         case 'ID_PULL':
            return {
                ...state,
                id: action.payload,
            }
        case 'ITEMID_FETCHING':
            return {
                ...state,
                itemLoadingStatus: 'loading'
            }
        case 'ITEMID_FETCHED':
            return {
                ...state,
                item: action.payload,
                itemLoadingStatus: 'idle'
            }
        case 'ITEMID_FETCHING_ERROR':
            return {
                ...state,
                itemLoadingStatus: 'error'
            }
         default: return state
     }
}

export default itemId