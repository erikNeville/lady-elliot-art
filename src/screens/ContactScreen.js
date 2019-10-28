import React from 'react';
import styled from 'styled-components';

const ContactInfo = styled.h3`
  padding: 1rem 3rem;

  .email {
    align-items: flex-start;
    color: black;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    text-decoration: none;

    &::after {
      content: '';
      background: black;
      display: block;
      height: 2px;
      transition: width 0.4s;
      width: 0;
    }
    &:hover::after {
      transform: width;
      width: 30%;
    }
  }
`;

function ContactScreen() {
	return (
		<div>
			<ContactInfo>
        If you&apos;d like to inquire about commissions, purchasing a piece of art or have questions, please contact me via email:
			</ContactInfo>
			<ContactInfo>
				<a className='email' href='mailto:info@ladyelliotart.com'>info@ladyelliotart.com</a>
			</ContactInfo>
			<ContactInfo>
        To follow my story and see upcoming and in-work projects, check out my Instagram at:
			</ContactInfo>
			<ContactInfo>
				<a className='email' href='https://www.instagram.com/lady.elliot.art/'>@lady.elliot.art</a>
			</ContactInfo>
		</div>
	);
}

export default ContactScreen;
