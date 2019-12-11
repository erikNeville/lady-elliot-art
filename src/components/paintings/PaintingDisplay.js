import React from 'react';
import Categorized from './Categorized';
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
		transition: all 0.4s
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

// const MyButton = styled.button`
// 	background: lightgray;
// 	outline: none;
// 	border: none;
// `;


const PaintingDisplay = ({images}) => {
	const {music, misc} = images.category;
	// const [hovering, setHovering] = useState(false);
	// const handleHover = () => {
	// 	setHovering(!hovering);
	// };
	return (
		<ImageWrapper>
			<Categorized name='Music' type={music} />
			<Categorized name='Miscellaneous' type={misc} />
			{/* {images.map((image) => (
				<div className='image-grid' key={image.src}>
					<img
						className='image'
						src={image.src}
						alt={image.title}
						image={image} />
					<PaintingInfo image={image} />					
				</div>
			))} */}
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
