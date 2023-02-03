import {createStore, combineReducers, compose, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';


import categoryes from '../reducers/categoryes';
import shoesList from '../reducers/shoesList';
import itemId from '../reducers/itemId';

const stringMiddleware = () => (next) => (action) => {
    if (typeof action === 'string') {
        return next({
            type: action
        })
    }
    return next(action)
};

const store = createStore(
    combineReducers({categoryes, shoesList, itemId}),
                compose(applyMiddleware(ReduxThunk, stringMiddleware),
                        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);
 

export default store;