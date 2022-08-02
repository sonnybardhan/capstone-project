import React from 'react';
import { Link } from 'react-router-dom';
import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
  H2,
  P,
} from './directory-item.styles';
import './directory-item.styles.scss';

const DirectoryItem = ({ category }) => {
  const { title, imageUrl } = category;
  return (
    <DirectoryItemContainer>
      <BackgroundImage
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></BackgroundImage>
      <Body>
        <Link to={`/shop/${title}`}>
          <H2>{title}</H2>
          <P>Shop Now</P>
        </Link>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
