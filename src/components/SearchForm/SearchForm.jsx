import './SearchForm.css';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import SelectedCharacterContext from '../../context/SelectedCharacterContext';

export default function SearchForm({ setPage }) {
  const navigate = useNavigate();
  const { setSelectedCharacterId } = useContext(SelectedCharacterContext);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    let name = evt.target[0].value;
    navigate(`/search/${name}`);
    setSelectedCharacterId(0);
    setPage(1);
  };

  return (
    <form onSubmit={handleSubmit} className='search-bar'>
      <input type='text' required />
      <Button width='200px'>Buscar</Button>
    </form>
  );
}
