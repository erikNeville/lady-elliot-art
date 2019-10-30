import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SpacerWrapper = styled.nav`
  height: ${props => props.displayMobile ? ('20vh') : ('10vh')};
  width: 100%;
`;

const Spacer = (props) => {
	return (
		<SpacerWrapper displayMobile={props.displayMobile} />
	);
};

Spacer.propTypes = {
	displayMobile: PropTypes.func.isRequired,
};

export default Spacer;