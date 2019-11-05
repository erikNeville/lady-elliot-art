import React from 'react';
import styled from 'styled-components';

const ImageGrid = styled.div`
	align-self: flex-start;
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

const PaintingInfo = (props) => {
	return (
		<ImageGrid>
			{props.image.title}
		</ImageGrid>
	);
};

export default PaintingInfo;
