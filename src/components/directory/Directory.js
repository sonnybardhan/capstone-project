import './directory.styles.js';
import DirectoryItem from '../directory-item/directory-item';
import { DirectoryContainer } from './directory.styles.js';

const Directory = ({ categories }) => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
