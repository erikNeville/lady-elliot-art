import React, {useEffect, useState} from 'react';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import Spacer from './Spacer';
import styled from 'styled-components';

const NavbarWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  overflow: hidden;
  box-shadow: 0 10px 10px -5px;
	text-align: center;
  width: 100%;
	position: fixed;
	z-index: 1030;
`;

const Navbar = () => {
	const [displayMobile, setDisplayMobile] = useState(false);
	const toggleMobileNav = () => {
		setDisplayMobile(!displayMobile);
	};
	const handleScroll = () => {
		if (displayMobile) {
			toggleMobileNav();
		}
	};
	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
	});
	const autoHideMobileNav = () => {
		const screenWidth = window.innerWidth;
		if (displayMobile && screenWidth > 768) {
			setDisplayMobile(false);
		}
	};
	useEffect(() => {
		window.addEventListener('resize', autoHideMobileNav);
	});
  
	return (
		<div>
			<NavbarWrapper>
				<DesktopNav
					displayMobile={displayMobile}
					toggleMobileNav={toggleMobileNav} />
				<MobileNav
					displayMobile={displayMobile}
					toggleMobileNav={toggleMobileNav} />
			</NavbarWrapper>
			<Spacer displayMobile={displayMobile} />
		</div>
	);
};

export default Navbar;
