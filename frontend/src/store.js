import { userReducer, combineReducers  } from './reducers';
import { createStore } from 'redux';

const rootReducer = combineReducers({
    user: userReducer
  })

const store = createStore(rootReducer)

export default store;