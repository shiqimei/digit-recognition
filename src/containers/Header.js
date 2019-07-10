import React from 'react';
import styled from 'styled-components';

import logo from '../assets/images/digits-logo.png';

class Header extends React.Component {
	render() {
		return (
			<header style={headerStyle}>
				<Logo src={logo} />
				<Title>手写数字识别</Title>
			</header>
		);
	}
}

const headerStyle = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	marginTop: 50,
	marginBottom: 20
}

const Logo = styled.img`
	height: 80px;
`;

const Title = styled.span`
	color: rgba(0, 0, 0, 0.87);
	font-size: 40px;
	font-weight: 700;
`;

export default Header;