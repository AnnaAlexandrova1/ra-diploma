import * as actions from './actions'

export const changeCategory = (categoryID) => ({
    type: actions.CHANGE_CATEGORY,
    payload: {categoryID}
})

export const inputSearch = (searchText) => ({
    type: actions.INPUT_SEARCH,
    payload: {searchText}
})