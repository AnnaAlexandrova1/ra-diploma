import link from "../api/link";

export const fetchCategory = (request) => (dispatch) => {
    dispatch(categoryFetching());
    request(`${link.api}/categories`)
        .then(data => dispatch(categoryFetched(data)))
    .catch(() => dispatch(categoryFetchingError()))
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