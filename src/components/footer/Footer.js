import React from 'react';
import styled from 'styled-components';

const Copywrite = styled.p`
	background: white;
  color: #B8B8B8;
	bottom: 0;
	left: 0;
	padding: 0.5rem 1.5rem;
	

	.developer {
		color: #A8A8A8;
		display: flex;
		flex-flow: column nowrap;
		justify-content: center;
		text-decoration: none;
		font-size: 12px;
	}
	&:focus {
		outline: none;
	}
	&::after {
		content: '';
		background: #303030;
		display: block;
		height: 1.6px;
		transition: width 0.4s;
		width: 0;
	}
	&:hover::after {
		transform: width;
		width: 157px;
	}
`;

function Footer() {
	return (
		<div>
			<Copywrite>
				<a className='developer' href='mailto:erikeneville@gmail.com'>Web Development by Erik Neville</a>
			</Copywrite>
		</div>
	);
}

export default Footer;
