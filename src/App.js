function App() {
  const categories = [
    {
      id: 1,
      title: 'Hats',
      img: '',
    },
    {
      id: 2,
      title: 'Jackets',
      img: '',
    },
    {
      id: 3,
      title: 'Sneeakers',
      img: '',
    },
    {
      id: 4,
      title: 'Mens',
      img: '',
    },
    {
      id: 5,
      title: 'Womens',
      img: '',
    },
  ];

  return (
    <div className='categories-container'>
      {categories.map(({ id, title }) => (
        <CategoryComponent key={id} title={title} />
      ))}
    </div>
  );
}

export default App;

const CategoryComponent = ({ img, title }) => {
  return (
    <div className='category-container'>
      <div className='background-image'></div>
      <div className='category-body-container'>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};
