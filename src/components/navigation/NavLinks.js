import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const NavLinks = (props) => {
	const closeNav = () => {
		if (props.displayMobile) {
			props.toggleMobileNav();
		}
	};
	let tempTabIndex;
	if (props.isMobileLink) {
		tempTabIndex = '-1';
	}
  
	return (
		<ul className='nav-links'>
			<li>
				<Link
					to='/about'
					className='link'
					onClick={closeNav}
					tabIndex={tempTabIndex}>
					ABOUT
				</Link>
			</li>
			<li>
				<Link
					to='/contact'
					className='link'
					onClick={closeNav}
					tabIndex={tempTabIndex}>
					CONTACT
				</Link>
			</li>
		</ul>
	);
};

NavLinks.propTypes = {
	isMobileLink: PropTypes.bool,
	displayMobile: PropTypes.bool.isRequired,
	toggleMobileNav: PropTypes.func.isRequired,
};

export default NavLinks;
