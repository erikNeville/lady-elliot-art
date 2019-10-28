import React from 'react';
import {connect} from 'react-redux';
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
	position: relative;
	overflow: hidden;
	

	.image-grid {
		margin: 1rem 1rem;
		text-align: center;
		-webkit-box-flex: 1;
		-webkit-flex: 1 0 auto;
		-ms-flex: 1 0 auto;
		flex: 1 0 auto;
	}
`;

const MyButton = styled.button`
	background: lightgray;
	outline: none;
	border: none;

	.image-overlay {
		background: rgba(0, 0, 0, 0.7);
		position: absolute;
		height: 99%;
		width: 100%;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		opacity: 0;
		-webkit-transition: all 0.4s ease-in-out 0s;
		-moz-transition: all 0.4s ease-in-out 0s;
		transition: all 0.4s ease-in-out 0s;
	}
	.image-overlay:hover {
		opacity: 1;
	}

	.image-details {
		position: absolute;
		text-align: center;
		padding-left: 1em;
		padding-right: 1em;
		width: 100%;
		top: 50%;
		left: 50%;
		opacity: 0;
		-webkit-transform: translate(-50%, -50%);
		-moz-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
		-webkit-transition: all 0.3s ease-in-out 0s;
		-moz-transition: all 0.3s ease-in-out 0s;
		transition: all 0.3s ease-in-out 0s;
	}

	.image-details:hover {
		top: 50%;
		left: 50%;
		opacity: 1;
	}
`;

const MyImage = styled.img`
	max-width: 80vw;
	/* backface-visibility: hidden;
	&:hover {
		opacity: 0.8;
	}
	&::after {
		content: ${props => props.image.title};
	} */
`;


const PaintingDisplay = (props) => {
	return (
		<ImageWrapper>
			{props.images.map((image) => (
				<div className='image-grid' key={image.id}>
					<div className='image-overlay'></div>

					<MyButton image={image}>
						<MyImage
							src={image.src}
							alt={image.title}
							image={image} />
						<div className="image-details">
							<h3>{image.title}</h3>
						</div>
					</MyButton>
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
