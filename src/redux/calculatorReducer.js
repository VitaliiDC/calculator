import api from '../api/api.js';

let initialState = {
	dollar: 0,
	inputValue: 0,
	result: 0,
	did: false,
	loading: false,
}

const calculatorReducer = (state = initialState, action) => {
	switch(action.type){
		case 'setDollar':
			return {...state, dollar: action.value}
		case 'setInputValue':
			return {...state, inputValue: action.value}
		case 'setResult':
			return {...state, result: action.value}
		case 'setDid':
			return {...state, did: action.value}
		case 'setLoading':
			return {...state, loading: action.value}
		default:
			return state;
	}
}

export const setDollar = (value) => ({type: 'setDollar', value});
export const setInputValue = (value) => ({type: 'setInputValue', value});
export const setResult = (value) => ({type: 'setResult', value});
export const setDid = (value) => ({type: 'setDid', value});
export const setLoading = (value) => ({type: 'setLoading', value});

export const getDollarThunk = (inputValue) => async (dispatch) => {
	if(inputValue){
		dispatch(setLoading(true));
		let responce = await api.getDollar();
		dispatch(setDollar(Number(responce).toFixed(2)));
		dispatch(setInputValue(Number(inputValue)));
		dispatch(setResult((inputValue/responce).toFixed(2)));
		dispatch(setDid(true));
		dispatch(setLoading(false));
	}else{
		dispatch(setDid(false));
	}
}

export default calculatorReducer;