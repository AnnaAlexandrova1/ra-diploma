import * as actions from "../actions/actions";

const initialState = {
  isSearch: false,
  params: {
    categoryID: null,
    searchText: '',
    offset: 0,
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
          categoryID: action.payload.categoryID,
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
