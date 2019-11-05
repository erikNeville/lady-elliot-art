import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LogoWrapper = styled.nav`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  font-size: 3.2vh;
  font-weight: bold;

  .logo-link {
    color: black;
    display: flex;
    flex-flow: column nowrap;
    text-decoration: none;
    transition: all 0.4s ease-out;
    &:hover {
      letter-spacing: 3px;
      text-transform: uppercase;
      /* border: 2px solid black; */
    }

    /* &:focus {
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
    } */
  }
`;

const Logo = (props) => {
	const closeNav = () => {
		if (props.displayMobile === true) {
			props.toggleMobileNav();
		}
	};
	return (
		<LogoWrapper>
			<Link to='/' className='logo-link' onClick={closeNav}>
        Lady Elliot Art
			</Link>
		</LogoWrapper>
	);
};

Logo.propTypes = {
	displayMobile: PropTypes.bool.isRequired,
	toggleMobileNav: PropTypes.func.isRequired,
};

export default Logo;
