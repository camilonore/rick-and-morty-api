import './CharacterCard.css';
import Button from '../Button/Button';
import SelectedCharacterContext from '../../context/SelectedCharacterContext';
import Dot from '../Dot/Dot';
import { useContext } from 'react';

export default function CharacterCard({ id, name, status, species, image }) {
  const statusColors = {
    Alive: '#86dc3d',
    Dead: '#dc143c',
    unknown: '#737373',
  };
  const { setSelectedCharacterId } = useContext(SelectedCharacterContext);
  const handleDetails = (id) => () => {
    setSelectedCharacterId(id);
    if (window.innerWidth < 690) {
      document.querySelector('.selected-character-container').style.display =
        'flex';
    }
  };

  return (
    <div className='card-container'>
      <img src={image} alt={name} className='character-image' />
      <div className='character-details'>
        <h3>{name}</h3>
        <p className='status'>
          <Dot color={statusColors[status]} />
          {status}
        </p>
        <p className='species'>{species}</p>
        <div className='button-container'>
          <Button onClick={handleDetails(id)}>Detalle</Button>
        </div>
      </div>
    </div>
  );
}
