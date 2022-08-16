import { userReducer } from './reducers';
import { legacy_createStore as createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';


const store = createStore(userReducer, devToolsEnhancer());

export default store;