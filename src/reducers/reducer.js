//itemId id артикула который передается на страницу ItemPage при клике на странице каталога или главной на "заказать"

const initialState = {
    itemId: null,
    shoppingBag: [],
}

const reducer = (state = initialState, action) => {
    
    switch (action.type) {
        case "ADD_ITEM":
            return {
                ...state,
                itemId: action.payload
            };
         case "ADD_TO_SHOPPINGBAG":
            return {
                ...state,
                shoppingBag: [...state.shoppingBag, action.payload] 
            };
        default:
            return state;
    }
}

export default reducer;