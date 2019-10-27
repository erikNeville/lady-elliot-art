import React from 'react';
import Collapse from 'react-bootstrap/Collapse';
import NavLinks from './NavLinks';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MobileNavWrapper = styled.nav`
  align-self: center;
  background: ${props => props.theme.primary};
  display: block;
  flex-flow: column nowrap;
  justify-content: center;
  max-height: 20vh;
  width: 100%;

  .nav-links {
    max-height: ${props => props.displayMobile ? ('20vh') : ('0')};
    overflow: hidden;
    text-align: center;
    transition: ${props => props.displayMobile ? ('max-height 0.4s ease-in') : ('max-height 0.4s ease-out')};
  }

  .link {
    color: black;
    display: flex;
    flex-flow: column nowrap;
    font-size: 2.5vh;
    text-align: center;
    text-decoration: none;
    &:focus {
      outline: none;
    }
    &::after {
      content: '';
      background: black;
      display: block;
      align-self: center;
      height: 2px;
      transition: width 0.4s;
      width: 0;
    }
    &:hover::after {
      transform: width;
      width: 12%;
    }
  }
`;

const MobileNav = (props) => {
	return (
		<Collapse in={props.displayMobile}>
			<MobileNavWrapper displayMobile={props.displayMobile}>
				<NavLinks isMobileLink={true} />
			</MobileNavWrapper>
		</Collapse>
	);
};

MobileNav.propTypes = {
	displayMobile: PropTypes.func.isRequired,
};

export default MobileNav;