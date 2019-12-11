import React from 'react';
import {BodyContainer} from '../components/containers/BodyContainer';
import {ScreenContainer} from '../components/containers/ScreenContainer';
// import PaintingDisplay from '../components/paintings/PaintingDisplay';
import Testing from '../components/paintings/Testing';

const HomeScreen = () => {
	return (
		<BodyContainer>
			<ScreenContainer>
				<Testing />
			</ScreenContainer>
		</BodyContainer>
	);
};

export default HomeScreen;
