import React from 'react';

const MainLayout = () => {
  return (
    <>
      <header>
        <nav>
          <p>logo</p>
          <ul>
            <li>Sign up</li>
            <li>Sign In</li>
          </ul>
        </nav>
      </header>
      <div className='categories'>
        <div className='upper-section'>
          <div className='box1'>box 1</div>
          <div className='box2'>box 2</div>
          <div className='box3'>box 3</div>
        </div>
        <div className='lower-section'>
          <div className='box4'>box 4</div>
          <div className='box5'>box 5</div>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
