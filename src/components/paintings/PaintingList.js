import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  max-width: 80vw;
`;

const ImageGrid = styled.div`
    margin: 1rem 1rem;
		text-align: center;
		-webkit-box-flex: 1;
		-webkit-flex: 1 0 auto;
		-ms-flex: 1 0 auto;
		flex: 1 0 auto;
`;

const PaintingList = ({images}) => {
	console.log(images);
	return (
		<ImageGrid>
			{images && images
				.filter(image => {
					return image.src;
				})
				.map(image => {
					return <Image src={image.src} alt={image.title} key={image.id} />;
				})}
		</ImageGrid>
	);
};

export default PaintingList;
