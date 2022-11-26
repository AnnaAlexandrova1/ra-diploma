import * as actions from './actions'

export const changeCategory = (category) => ({
    type: actions.CHANGE_CATEGORY,
    payload: {category}
})

export const inputSearch = (searchText) => ({
    type: actions.INPUT_SEARCH,
    payload: {searchText}
})