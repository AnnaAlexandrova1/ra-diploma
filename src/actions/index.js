import link from "../api/link";

export const fetchCategory = (request) => (dispatch) => {
    dispatch(categoryFetching());
    request(`${link.api}/categories`)
        .then(data => dispatch(categoryFetched(data)))
    .catch(() => dispatch(categoryFetchingError()))
}

export const fetchShoes = (request, url) => (dispatch) => {
    dispatch(shoesFetching());
    request(`${link.api}/items${url}`)
        .then(data => dispatch(shoesFetched(data)))
        .catch(() => dispatch(shoesFetchingError()))
}

export const fetchMoreShoes = (request, url) => (dispatch) => {
    dispatch(moreShoesFetching());
    request(`${link.api}/items${url}`)
        .then(data => dispatch(moreShoesFetched(data)))
        .catch(() => dispatch(moreShoesFetchingError()))
}

export const fetchitemId = (request, id) => (dispatch) => {
    dispatch(itemIdFetching());
    request(`${link.api}/items/${id}`)
        .then(data => dispatch(itemIdFetched(data)))
        .catch(() => dispatch(itemIdFetchingError()))
}


export const categoryFetching = () => {
    return {
        type: 'CATEGORY_FETCHING'
    }
}

export const categoryFetched = (category) => {
    return {
        type: 'CATEGORY_FETCHED',
        payload: category
    }
}

export const categoryFetchingError = () => {
    return {
        type: 'CATEGORY_FETCHING_ERROR'
    }
}

export const activeCategoryChanged = (category) => {
    return {
        type: 'ACTIVE_CATEGORY_CHANGED',
        payload: category
    }
}

export const shoesFetching = () => {
    return {
        type: 'SHOES_FETCHING'
    }
}

export const shoesFetched = (shoes) => {
    return {
        type: 'SHOES_FETCHED',
        payload: shoes
    }
}

export const shoesFetchingError = () => {
    return {
        type: 'SHOES_FETCHING_ERROR'
    }
}

export const moreShoesFetching = () => {
    return {
        type: 'MORE_SHOES_FETCHING',
    }
}

export const moreShoesFetched = (shoes) => {
    return {
        type: 'MORE_SHOES_FETCHED',
        payload: shoes
    }
}

export const moreShoesFetchingError = () => {
    return {
        type: 'MORE_SHOES_FETCHING_ERROR'
    }
}

export const shoesCategoryChanged = () => {
    return {
        type: 'SHOES_CATEGORY_CHANGED',
    }
}

export const searchShoesChanged = (search) => {
    return {
        type: 'SHOES_SEARCH_CHANGED',
        payload: search
    }
}


export const itemIdFetching = () => {
    return {
        type: 'ITEMID_FETCHING',
    }
}

export const itemIdFetched = (data) => {
    return {
        type: 'ITEMID_FETCHED',
        payload: data
    }
}

export const itemIdFetchingError = () => {
    return {
        type: 'ITEMID_FETCHING_ERROR'
    }
}

export const idPull = (id) => {
    return {
        type: 'ID_PULL',
        payload: id
    }
}