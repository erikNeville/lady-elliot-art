import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faFacebookF} from '@fortawesome/free-brands-svg-icons';

const FooterWrapper = styled.div`
  /* figure out how to put footer at bottom of viewport */
  /* background: #c77d7e; */
  align-items: center;
  bottom: 0;
  display: flex;
  height: 25px;
  justify-content: space-between;
  margin-top: 25px;
  padding: 25px 8px;
  text-align: center;
  width: 100%;
  padding-bottom: 30px;
  @media screen and (max-width: 321px) {
    flex-flow: column nowrap;
    line-height: 25px;
    margin-top: 0;
  }

  .social-wrapper {
    display: flex;
    justify-content: space-around;
    width: 23.333vw;
  }
  .social {
    color: black;
    text-decoration: none;
    align-self: center;
    font-size: 12px;
		transition: font-size 0.2s;
  }
  .social:hover {
    font-size: 15px;
  }
  .copyright {
		color: #808080;
    align-self: center;
    width: 53.33vw;
    font-size: 11px;
  }
  .web-design-wrapper {
    width: 23.33vw;
    font-size: 11px;
  }
  .web {
    align-items: center;
    align-content: center;
    justify-content: center;
    color: #808080;
    display: flex;
    flex-flow: column nowrap;
    text-decoration: none;
    &:focus {
      outline: none;
    }
    &::after {
      content: '';
      align-self: center;
      background: #808080;
      display: block;
      height: 1px;
      transition: width 0.4s ease;
      width: 0;
    }
    &:hover::after {
      transform: width;
      width: 80%;
      @media screen and (max-width: 400px) {
        width: 115%;
      }
    }
  }
`;


function Footer() {
	return (
		<FooterWrapper>
			<div className='social-wrapper'>
				<a
					className='social'
					href='https://www.instagram.com/lady.elliot.art/'
					rel='noopener noreferrer'
					target='_blank' >
					<FontAwesomeIcon icon={faInstagram} size='2x' />
				</a>
				<a
					className='social'
					href='https://www.facebook.com/Lady-Elliot-Art-110471590384822/'
					rel='noopener noreferrer'
					target='_blank' >
					<FontAwesomeIcon icon={faFacebookF} size='2x' />
				</a>
			</div>
			<div className='copyright'>
        Copyright&copy; 2020 All Rights Reserved
			</div>
			<div className='web-design-wrapper'>
				<a
					className='web'
					href='mailto:erikeneville@gmail.com'>
          Web Design by Erik Neville
				</a>
			</div>
		</FooterWrapper>
	);
}

export default Footer;