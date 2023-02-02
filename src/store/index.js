import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import filters from '../reducers/testreducer';
import thunk from 'redux-thunk'


const store = configureStore({
    reducer: {
        filters: filters
    }
});
 

export default store;