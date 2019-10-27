import React from 'react';
import styled from 'styled-components';

const ImageGrid = styled.div`
  flex: 1 0 auto;
  margin: 1rem 1rem;
  text-align: center;
  -webkit-box-flex: 1 0 auto;
  -webkit-flex: 1 0 auto;
  -ms-flex: 1 0 auto;

  .Image {
    max-width: 80vw;
  }
`;

const PaintingInfo = ({images}) => {
	console.log(images);
	return (
		<div>
			{images && images.map(image => (
				<ImageGrid key={image.id}>
					<img
						className='Image'
						src={image.src}
						alt={image.title} />
				</ImageGrid>
			))}
		</div>
	);
};

export default PaintingInfo;
