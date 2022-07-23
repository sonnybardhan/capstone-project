import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Navigation from './components/navigation/Navigation';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='shop' element={<Shop />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;

function Shop() {
  return <div className=''>I am the shop container</div>;
}
