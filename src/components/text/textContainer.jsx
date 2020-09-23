import React from 'react';
import './text.css';
import {connect} from 'react-redux';
import Text from './text.jsx';

const TextContainer = (props) => {
	return (
		<Text {...props} />
	)
}

const mapStateToProps = (state) => {
	return {
		
	}
}

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TextContainer);