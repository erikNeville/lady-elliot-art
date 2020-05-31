import React, {useState} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import PaintingInfo from './PaintingInfo';
import styled from 'styled-components';

// try to section different generas into other components

const ImageWrapper = styled.div`
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	flex-flow: row nowrap;
  justify-content: center;
  align-content: center;
	-webkit-flex-wrap: wrap;
	-ms-flex-wrap: wrap;
	overflow: hidden;

	.image-grid {
		margin: 1rem 2rem;
    position: relative;
		transition: all 0.4s;
		@media screen and (max-width: 591px) {
			margin: 1rem 1rem;
		}
	}
	
	.image {
    align-self: center;
		backface-visibility: hidden;
		display: block;
		position: relative;
		width: 100%;
		height: auto;
    opacity: 1;
    transition: all ease 0.4s
	}
`;

const Testing = (props) => {
	const [hovering, setHovering] = useState(false);
	// const handleHover = () => {
	// 	setHovering(!hovering);
	// };
	console.log('home');
	return (
		<ImageWrapper>
			{props.images.map((image) => (
				<div className='image-grid' key={image.src}>
					<img
						className='image'
						src={image.src}
						alt={image.title}
						image={image} />
					<PaintingInfo image={image} />					
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

Testing.propTypes = {
	images: PropTypes.object,
};

export default connect(mapStateToProps)(Testing);
