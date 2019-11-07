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
  justify-content: center;
  align-content: center;
	-webkit-flex-wrap: wrap;
	-ms-flex-wrap: wrap;
	overflow: hidden;

	.image-grid {
		margin: 1rem 2rem;
    position: relative;
    max-width: 80vw;
	}
	
	.image {
    align-self: center;
		backface-visibility: hidden;
		display: block;
		width: 100%;
    opacity: 1;
    transition: 0.5s all ease;
    /* this is a clue why the images aren't lining up right */
    /* &:hover {
      width: 101%;
    } */
	}
`;

const MyButton = styled.button`
	background: lightgray;
	outline: none;
	border: none;
`;


const Testing = (props) => {
	const [hovering, setHovering] = useState(false);
	const handleHover = () => {
		setHovering(!hovering);
	};
	console.log(hovering);
	return (
		<ImageWrapper>
			{props.images.map((image) => (
				<div className='image-grid' key={image.id}>
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
