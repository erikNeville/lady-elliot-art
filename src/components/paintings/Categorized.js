import React from 'react';
import {BodyContainer} from '../containers/BodyContainer';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import PaintingInfo from './PaintingInfo';
import styled from 'styled-components';

const Header = styled.div`
  display: flex;
  flex-direction: row nowrap;
`;

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

const Categorized = (props) => {
	const {name, type} = props;
	console.log(name);
	console.log(props);
	return (
		<BodyContainer>
			<Header>
				<h1>{name}</h1>
			</Header>
			<ImageWrapper>
				{type && type.map((img) => (
					<div className='image-grid' key={img.src}>
						<img
							className='image'
							src={img.src}
							alt={img.title}
							image={type} />
					</div>
				))}
			</ImageWrapper>
		</BodyContainer>
	);
};

export default Categorized;
