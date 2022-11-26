//itemId id артикула который передается на страницу ItemPage при клике на странице каталога или главной на "заказать"
import * as actions from '../actions/actions'


const initialState = {
    itemId: null,
    qty: 0,
}

const serviceListCardReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case actions.ADD_ITEM:
            return {
                ...state,
                itemId: action.payload
            };
         case actions.QTY_SHOPPINGBAG:
            return {
                ...state,
                qty: action.payload
            };
        default:
            return state;
    }
}

export default serviceListCardReducer;