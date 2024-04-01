import {applyMiddleware, combineReducers, createStore} from 'redux';
import {thunk} from 'redux-thunk';

// User defined imports
import {authReducer} from './reducers/loginreducer';

const rootReducer = combineReducers({
  auth: authReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
