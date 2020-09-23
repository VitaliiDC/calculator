import React from 'react';

const Text = (props) => {
	return (
		<div className="text block">
			<h1 className="title">Текстовая страница</h1>
			<div className="text__text">
				Это простая текстовая страница для отображения параметров роута. Параметры:<br/>- id: xxxx <br/>- date: xxxx
			</div>
		</div>
	)
}

export default Text;