import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ImageGrid = styled.div`
	text-align: center;
	display: flex;
	flex-flow: column nowrap;
	padding-top: 12px;

	.title-size {
		line-height: 2px;
	}
`;

const PaintingInfo = (props) => {
	return (
		<ImageGrid>
			<div className="title-size">
				<p>{props.image.title}</p>
				<p>{props.image.w}&quot; X {props.image.h}&quot;</p>
			</div>
		</ImageGrid>
	);
};

PaintingInfo.propTypes = {
	image: PropTypes.shape({
		title: PropTypes.string.isRequired,
		w: PropTypes.number.isRequired,
		h: PropTypes.number.isRequired,
	}),
};

export default PaintingInfo;
