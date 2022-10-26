import ReactDOM from 'react-dom';
import { createStore } from "redux";
import clickOrder from '../reducers/clickOrder';
import * as actions from '../actions/actions'

const store = createStore(clickOrder);
 
//const {dispatch, subscribe, getState} = store;

export default store;