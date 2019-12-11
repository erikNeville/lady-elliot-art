import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PaintingDesc = styled.div`
	text-align: center;
	display: flex;
	flex-flow: column nowrap;
	padding-top: 12px;
	line-height: 4px;
	.desc {
		font-size: 12px;
	}
	.info {
		display: flex;
		flex-flow: row nowrap;
		justify-content: center;
	}
	.title {
		font-weight: 600;
		font-size: 17px;
		flex-wrap: wrap;
	}
	.medium {
		justify-self: flex-end;
		font-size: 12px;
	}
	.size {
		font-size: 15px;
	}
`;

const PaintingInfo = (props) => {
	return (
		<PaintingDesc>
			<div className='title'>
				<p>{props.image.title}</p>
			</div>
			<div className='info'>
				<p className='size'>{props.image.w}&quot; X {props.image.h}&quot; <strong>|</strong></p>
				<p className='medium'>&nbsp;{props.image.medium}</p>
			</div>
		</PaintingDesc>
	);
};

PaintingInfo.propTypes = {
	image: PropTypes.shape({
		title: PropTypes.string.isRequired,
		w: PropTypes.number.isRequired,
		h: PropTypes.number.isRequired,
		medium: PropTypes.string.isRequired,
	}),
};

export default PaintingInfo;
