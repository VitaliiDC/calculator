import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunkMiddleWare from 'redux-thunk';
import calculatorReducer from './calculatorReducer.js';
import {reducer as formReducer} from 'redux-form';

const reducers = combineReducers({
	calculator: calculatorReducer,
	form: formReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleWare));

window.store = store;

export default store;