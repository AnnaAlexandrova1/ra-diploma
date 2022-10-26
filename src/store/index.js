import ReactDOM from 'react-dom';
// import { configureStore } from '@reduxjs/toolkit';
// import  { Reducer } from '@reduxjs/toolkit'
import { createStore } from 'redux'
import reducer from '../reducers/reducer';
import * as actions from '../actions/actions'

const store = createStore(reducer);
 
//const {dispatch, subscribe, getState} = store;

export default store;