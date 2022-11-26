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
      }
    case actions.SET_OFFSET:
      return {
        ...state,
        params: {
          ...state.params,
          offset: state.params.offset + 6
        }
      }
    default:
      return state;
  }
};

export default serviceCatalogReducer;
