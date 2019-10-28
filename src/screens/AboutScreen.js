import React from 'react';
import styled from 'styled-components';

const StyledAbout = styled.h3`
	padding: 1rem 3rem;
`;

function AboutScreen() {
	return (
		<div>
			<StyledAbout>
				Artist Statement & Background Information
			</StyledAbout>
			<StyledAbout>
			Lady Elliot is a local Seattle artist working with acrylic paint medium to create bright, vivid and imaginative images to lighten up the months of Seattle grey.  All Lady Elliot work is created in her home studio space and is often displayed around Seattle in pubs and coffee shop spaces. 
			</StyledAbout>
			<StyledAbout>
				More details and background info on painting themes and inspiration coming soon!
			</StyledAbout>
		</div>
	);
}

export default AboutScreen;
