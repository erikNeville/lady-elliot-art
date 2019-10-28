import React from 'react';
import styled from 'styled-components';

const StyledBio = styled.h5`
  padding: 0.5rem 2.5rem;
	
	.info {
		padding: 0.5rem 2.5rem;
	}
`;

function Bio() {
	return (
		<StyledBio>
			<p className='info'>Welcome to Lady Elliot Art online, where you can view all my current work for sale, order prints and also commission paintings.  </p>
			<p className='info'>My website is currently under construction, so I appreciate your patience while we develop this space.  Please refer to my contact page for any inquiries. Thanks!</p>
		</StyledBio>
	);
}

export default Bio;
