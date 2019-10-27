import React from 'react';
import Logo from './Logo';
import NavLinks from './NavLinks';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DesktopNavWrapper = styled.nav`
  align-items: center;
  background: ${props => props.theme.primary};
  color: black;
  display: flex;
  flex-flow: row nowrap;
  height: 11vh;
  justify-content: space-around;
  width: 100%;
  
  @media screen and (max-width: 800px) {
    flex-flow: column nowrap;
  }

  .nav-links {
    align-items: center;
    animation: fadeIn ease 1s;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
    list-style: none;
    width: 50vw;
    -webkit-animation: fadeIn ease 1s;
    -moz-animation: fadeIn ease 1s;
    -o-animation: fadeIn ease 1s;
    -ms-animation: fadeIn ease 1s;
    @keyframes fadeIn {
      0% {
        opacity: 0;
      } 100% {
        opacity: 1;
      }
    }
    @-moz-keyframes fadeIn {
      0% {
        opacity: 0;
      } 100% {
        opacity: 1;
      }
    }
    @-webkit-keyframes fadeIn {
      0% {
        opacity: 0;
      } 100% {
        opacity: 1;
      }
    }

    @media screen and (max-width: 800px) {
      display: none;
    }
  }

  .link {
    align-items: center;
    border-radius: 8px;
    color: black;
    display: flex;
    flex-flow: column nowrap;
    font-size: 2.5vh;
    justify-content: center;
    padding: 0 1rem;
    text-decoration: none;

    &:focus {
      background: rgba(0, 0, 0, 0.1);
      outline: none;
    }
    &::after {
      content: '';
      background: black;
      display: block;
      height: 2px;
      transition: width 0.4s;
      width: 0;
    }
    &:hover::after {
      transform: width;
      width: 100%;
    }
  }
`;

const MobileNavButton = styled.button`
  background: transparent;
  height: 6vh;
  width: 6vh;
  border: none;
  display: none;

  .menu {
    align-items: center;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;

    &::after {
      content: '';
      background: black;
      display: block;
      height: 2px;
      transition: width 0.4s;
      width: 0;
    }
    &:hover::after {
      transform: width;
      width: 100%;
    }
  }
  &:focus {
    outline: none;
  }

  @media screen and (max-width: 800px) {
    animation: fadeIn ease 1s;
    display: block;
    -webkit-animation: fadeIn ease 1s;
    -moz-animation: fadeIn ease 1s;
    -o-animation: fadeIn ease 1s;
    -ms-animation: fadeIn ease 1s;
    @keyframes fadeIn{
      0% {
        opacity:0;
      } 100% {
        opacity:1;
      }
    }
    @-moz-keyframes fadeIn {
      0% {
        opacity:0;
      } 100% {
        opacity:1;
      }
    }
    @-webkit-keyframes fadeIn {
      0% {
        opacity:0;
      } 100% {
        opacity:1;
      }
    }
  }
`;

const DesktopNav = (props) => {
	return (
		<DesktopNavWrapper>
			<Logo />
			<div className='fade-in'>
				<NavLinks />
			</div>
			<MobileNavButton
				displayMobile={props.displayMobile}
				onClick={props.toggleMobileNav}>
				<p className="menu">MENU</p>
			</MobileNavButton>
		</DesktopNavWrapper>
	);
};

DesktopNav.propTypes = {
	displayMobile: PropTypes.func.isRequired,
	toggleMobileNav: PropTypes.func.isRequired,
};

export default DesktopNav;
