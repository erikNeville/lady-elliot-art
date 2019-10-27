import React, {useEffect, useState} from 'react';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import styled from 'styled-components';

const NavbarWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  overflow: hidden;
`;

const Navbar = () => {
	const [displayMobile, setDisplayMobile] = useState(false);
	const toggleMobileNav = () => {
		setDisplayMobile(!displayMobile);
	};
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
		<NavbarWrapper>
			<DesktopNav
				displayMobile={displayMobile}
				toggleMobileNav={toggleMobileNav} />
			<MobileNav
				displayMobile={displayMobile} />
		</NavbarWrapper>
	);
};

export default Navbar;
