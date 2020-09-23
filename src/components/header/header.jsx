import React from 'react';
import './header.css';
import {NavLink} from 'react-router-dom';

const Header = (props) => {
	return (
		<header className="header">
			<div className="header__buttons">
				<NavLink className="header__calc" to="/">Калькулятор</NavLink>
				<NavLink className="header__text" to="/text">Текстовая</NavLink>
			</div>
		</header>
	)
}

export default Header;