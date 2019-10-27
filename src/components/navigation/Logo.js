import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const LogoWrapper = styled.nav`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  font-size: 4vh;
  font-weight: bold;

  .logo-link {
    color: black;
    display: flex;
    flex-flow: column nowrap;
    text-decoration: none;

    &:focus {
      outline: none;
    }
    &::after {
      content: '';
      align-self: center;
      background: black;
      display: block;
      height: 2px;
      transition: width 0.4s;
      width: 0;
    }
    &:hover::after {
      transform: width;
      width: 80%;
    }
  }
`;

function Logo() {
	return (
		<LogoWrapper>
			<Link to='/' className='logo-link'>
        Lady Elliot Art
			</Link>
		</LogoWrapper>
	);
}

export default Logo;
