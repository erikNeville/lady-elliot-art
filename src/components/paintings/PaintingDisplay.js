import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ImageWrapper = styled.div`
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	justify-content: center;
	-webkit-flex-wrap: wrap;
	-ms-flex-wrap: wrap;
	flex-wrap: wrap;
	overflow: hidden;

	.image-grid {
		margin: 1rem 2rem;
		text-align: center;
		-webkit-box-flex: 1;
		-webkit-flex: 1 0 auto;
		-ms-flex: 1 0 auto;
		flex: 1 0 auto;
		max-width: 80vw;
		position: relative;
	}
	
	.image {
		backface-visibility: hidden;
		display: block;
		height: auto;
		width: 100%;
		opacity: 1;
	}

	.info {
		transition: 0.5s ease;
		opacity: 0;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		-ms-transform: translate(-50%, -50%);
		text-align: center;
	}

	.info-text {
		background-color: black;
		border-radius: 20px;
		color: white;
		font-size: 16px;
		padding: 16px;
	}

	.image-grid:hover .image {
		opacity: 0.95;
	}

	.image-grid:hover .info {
		opacity: 0.96;
	}
`;

const MyButton = styled.button`
	background: lightgray;
	outline: none;
	border: none;
`;


const PaintingDisplay = (props) => {
	return (
		<ImageWrapper>
			{props.images.map((image) => (
				<div className='image-grid' key={image.id}>
					<MyButton image={image}>
						<img
							className='image'
							src={image.src}
							alt={image.title}
							image={image} />
						<div className='info'>
							<div className='info-text'>
								<p>{image.title}</p>
								<p>{image.w}&quot; X {image.h}&quot;</p>
							</div>
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
