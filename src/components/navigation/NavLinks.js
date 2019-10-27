import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const NavLinks = (props) => {
	let tempTabIndex;
	if (props.isMobileLink) {
		tempTabIndex = '-1';
	}
  
	return (
		<ul className='nav-links'>
			<li>
				<Link to='/about' className='link' tabIndex={tempTabIndex}>ABOUT</Link>
			</li>
			<li>
				<Link to='/contact' className='link' tabIndex={tempTabIndex}>CONTACT</Link>
			</li>
		</ul>
	);
};

NavLinks.propTypes = {
	isMobileLink: PropTypes.func,
};

export default NavLinks;
