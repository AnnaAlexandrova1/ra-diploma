import link from "../api/link";

export const fetchCategory = (request) => (dispatch) => {
    dispatch(categoryFetching());
    request(`${link.api}/categories`)
        .then(data => dispatch(categoryFetched(data)))
    .catch(() => dispatch(categoryFetchingError()))
}

export const fetchShoes = (request, url) => (dispatch) => {
    dispatch(shoesFetching());
    request(url)
        .then(data => dispatch(shoesFetched(data)))
        .catch(() => dispatch(shoesFetchingError()))
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