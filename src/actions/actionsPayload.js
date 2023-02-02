import * as actions from './actions'

export const changeCategory = (categoryID) => ({
    type: actions.CHANGE_CATEGORY,
    payload: {categoryID}
})

export const selectAllCategory = () => ({
     type: actions.SELECT_ALL_CATEGORY,
})

export const inputSearch = (searchText) => ({
    type: actions.INPUT_SEARCH,
    payload: {searchText}
})

export const setOffset = () => ({
    type: actions.SET_OFFSET,
})

export const setItems = (items) => ({
    type: actions.SET_ITEMS,
    payload: {items}
})

export const setMoreItems = (items) => ({
    type: actions.SET_MORE_ITEMS,
    payload: {items}
})