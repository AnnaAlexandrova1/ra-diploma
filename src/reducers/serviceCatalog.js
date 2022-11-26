import * as actions from "../actions/actions";

const initialState = {
  isSearch: false,
  params: {
    category: null,
    searchText: '',
  },
};

const serviceCatalogReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.CHANGE_CATEGORY:
      return {
        ...state,
        isSearch: true,
        params: {
          ...state.params,
          category: action.payload.category,
        }
      }
      case actions.INPUT_SEARCH:
          return {
        ...state,
        isSearch: true,
        params: {
          ...state.params,
          searchText: action.payload.searchText,
        },
          };
    default:
      return state;
  }
};

export default serviceCatalogReducer;
