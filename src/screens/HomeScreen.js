import React from 'react';
import Bio from '../components/bio/Bio';
import PaintingDisplay from '../components/paintings/PaintingDisplay';

const HomeScreen = () => {
	return (
		<div>
			<Bio />
			<PaintingDisplay />
		</div>
	);
};

export default HomeScreen;
