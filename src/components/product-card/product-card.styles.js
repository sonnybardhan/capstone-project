import styled from 'styled-components';
import {
  BaseButton,
  InvertedButton,
  GoogleSignInButton,
} from '../button/button.styles';

export const ProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  img {
		width: 100%;
		height: 95%;
		object-fit: cover;
		margin-bottom: 5px;
	}

	${BaseButton},
  ${InvertedButton},
  ${GoogleSignInButton} {
		width: 80%;
		opacity: 0.7;
		position: absolute;
		top: 255px;
		display: none;
	}

	&:hover {
		img {
			opacity: 0.8;
		}

		${BaseButton},
		${InvertedButton},
		${GoogleSignInButton} {
			opacity: 0.85;
			display: flex;
		}
`;

export const Footer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const NameSpan = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const PriceSpan = styled.span`
  width: 10%;
`;
