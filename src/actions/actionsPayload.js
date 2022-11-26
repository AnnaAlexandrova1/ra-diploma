import * as actions from './actions'

export const changeCategory = (categoryID) => ({
    type: actions.CHANGE_CATEGORY,
    payload: {categoryID}
})

export const inputSearch = (searchText) => ({
    type: actions.INPUT_SEARCH,
    payload: {searchText}
})

export const setOffset = () => ({
    type: actions.SET_OFFSET,
})

export const setItems = (charList) => ({
    type: actions.SET_ITEMS,
    payload: {charList}
})