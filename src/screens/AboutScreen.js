import React from 'react';
import {BodyContainer} from '../components/containers/BodyContainer';
import {ScreenContainer} from '../components/containers/ScreenContainer';
import styled from 'styled-components';

const StyledAbout = styled.h3`
	padding: 1rem 3rem;
	@media screen and (max-width: 480px) {
		font-size: 1.33em;
	}
`;

const Heading = styled.h3`
	display: flex;
	flex-flow: row nowrap;
	text-align: flex-start;
	margin: 12px 3rem 0 3rem; 
	font-size: 2.2em;
	font-weight: 600;
	@media screen and (max-width: 709px) {
		flex-flow: column nowrap;
		text-align: flex-start;
	}
	@media screen and (max-width: 480px) {
		font-size: 1.6em;
	}
`;

function AboutScreen() {
	return (
		<BodyContainer>
			<ScreenContainer>
				<Heading>
					Artist Statement & Background Information
				</Heading>
				<hr/>
				<StyledAbout>
					Lady Elliot is a local Seattle artist working with acrylic paint medium to create bright, vivid and imaginative images to lighten up the months of Seattle grey.  All Lady Elliot work is created in her home studio space and is often displayed around Seattle in pubs and coffee shop spaces. 
				</StyledAbout>
				<StyledAbout>
					More details and background info on painting themes and inspiration coming soon!
				</StyledAbout>
			</ScreenContainer>
		</BodyContainer>
	);
}

export default AboutScreen;
