
import { configureStore } from '@reduxjs/toolkit';
import serviceListCardReducer from '../reducers/serviceListCard'
import serviceCatalogReducer from '../reducers/serviceCatalog'
import serviceItemsListReducer from '../reducers/serviceItemsList'


const store = configureStore({
    reducer: {
        serviceListCard: serviceListCardReducer,
        serviceCatalog: serviceCatalogReducer, 
        serviceItemsList: serviceItemsListReducer,
    }
});
 
//const {dispatch, subscribe, getState} = store;

export default store;