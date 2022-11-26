
import { configureStore } from '@reduxjs/toolkit';
import serviceListCardReducer from '../reducers/serviceListCard'
import serviceCatalogReducer from '../reducers/serviceCatalog'


const store = configureStore({
    reducer: {
        serviceListCard: serviceListCardReducer,
        serviceCatalog: serviceCatalogReducer,  
    }
});
 
//const {dispatch, subscribe, getState} = store;

export default store;