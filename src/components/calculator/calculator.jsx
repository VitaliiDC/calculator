import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {Input} from '../../tools/forms.jsx';
import {didTouch, maxLength} from '../../tools/validation.js';
import PreLoader from '../../tools/preloader.jsx';

const maxLength13 = maxLength(13);

const Calculator = (props) => {
	return (
		<div className="calculator block">
			{props.loading && <PreLoader />}
			<h1 className="title">Калькулятор</h1>
			<form onSubmit={props.handleSubmit}>
				<Field type="number" component={Input} validate={[didTouch, maxLength13]} name="input" placeholder="Сумма, грн" />
				{props.did && <label htmlFor="input"><b>{props.inputValue + 'грн'}</b> по курсу <b>{props.dollar+'$'}</b> это <b>{props.result+'$'}</b></label>}
				<button>Посчитать</button>
			</form>
		</div>
	)
}

export default reduxForm({form: 'calculator'})(Calculator);