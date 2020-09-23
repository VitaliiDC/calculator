import React from 'react';
import {connect} from 'react-redux';
import Header from './header.jsx';

const HeaderContainer = (props) => {
	return (
		<Header {...props} />
	);
}

const mapStateToProps = (state) => {
	return {

	}
}

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);