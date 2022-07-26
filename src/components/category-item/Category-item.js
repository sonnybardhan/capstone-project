import React from 'react';
import { useNavigate } from 'react-router-dom';
import './category-item.styles.scss';

const CategoryItem = ({ category }) => {
  const { title, imageUrl } = category;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/shop/${title}`);
  };

  return (
    <div className='category-container'>
      <div
        className='background-image'
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className='category-body-container' onClick={handleClick}>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
