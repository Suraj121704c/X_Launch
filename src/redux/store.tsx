import {applyMiddleware, combineReducers, createStore} from 'redux';
import {thunk} from 'redux-thunk';

// User defined imports
import {authReducer} from './reducers/loginreducer';
import {launchReducer} from './reducers/launchReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  launch: launchReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
