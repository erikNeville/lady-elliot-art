import React from 'react';
import {connect} from 'react-redux';
import PaintingList from './PaintingList';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ImageWrapper = styled.div`
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	-webkit-flex-wrap: wrap;
	-ms-flex-wrap: wrap;
	flex-wrap: wrap;

	.image-grid {
		margin: 1rem 1rem;
		text-align: center;
		-webkit-box-flex: 1;
		-webkit-flex: 1 0 auto;
		-ms-flex: 1 0 auto;
		flex: 1 0 auto;
	}
`;

const MyImage = styled.img`
	max-width: 80vw;

	&:hover {
		opacity: 0.8;
	}
`;


const PaintingDisplay = (props) => {
	return (
		<ImageWrapper>
			{props.images.map((image) => (
				<div className='image-grid' key={image.id}>
					<MyImage
						src={image.src}
						alt={image.title} />
				</div>
			))}
		</ImageWrapper>
	);
};

const mapStateToProps = (state) => {
	return {
		images: state.images.images,
	};
};

PaintingDisplay.propTypes = {
	images: PropTypes.object,
};

export default connect(mapStateToProps)(PaintingDisplay);
