import React from 'react';
import './calculator.css';
import {connect} from 'react-redux';
import Calculator from './calculator.jsx';
import {getDollarThunk, setInputValue, setResult} from '../../redux/calculatorReducer.js';

const CalculatorContainer = (props) => {

	return (
		<Calculator onSubmit={data => props.getDollarThunk(data.input)} {...props} />
	)
}

const mapStateToProps = (state) => {
	return {
		dollar: state.calculator.dollar,
		result: state.calculator.result,
		inputValue: state.calculator.inputValue,
		did: state.calculator.did,
		loading: state.calculator.loading,
	}
}

const mapDispatchToProps = {getDollarThunk, setInputValue, setResult};

export default connect(mapStateToProps, mapDispatchToProps)(CalculatorContainer);