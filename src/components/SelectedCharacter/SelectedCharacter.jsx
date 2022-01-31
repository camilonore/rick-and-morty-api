import './SelectedCharacter.css';
import { useContext, useEffect, useState } from 'react';
import CharactersContext from '../../context/CharactersContext';
import SelectedCharacterContext from '../../context/SelectedCharacterContext';

export default function SelectedCharacter() {
  const { characters } = useContext(CharactersContext);
  const [selectedCharacter, setSelectedCharacter] = useState(characters[0]);
  const { selectedCharacterId } = useContext(SelectedCharacterContext);

  useEffect(() => {
    setSelectedCharacter(characters[selectedCharacterId]);
  }, [characters, selectedCharacterId]);

  const handleCloseModal = () => {
    document.querySelector('.selected-character-container').style.display =
      'none';
  };
  const handleResize = () => {
    if (window.innerWidth > 692) {
      document.querySelector('.selected-character-container').style.display =
        'flex';
    } else {
      document.querySelector('.selected-character-container').style.display =
        'none';
    }
  };
  window.onresize = handleResize;

  return (
    <div className='selected-character-container'>
      <button className='close-modal' onClick={handleCloseModal}>
        &times;
      </button>
      <section className='detail-main-section'>
        <h3 className='title'>Detalle</h3>
        <img
          className='character-image'
          src={selectedCharacter?.image}
          alt={selectedCharacter?.name}
        />
        <h3>{selectedCharacter?.name}</h3>
      </section>
      <p>- {selectedCharacter?.gender}</p>
      <p>- {selectedCharacter?.origin?.name}</p>
      <p>- {selectedCharacter?.location?.name}</p>
      <p className='episodes'>- {selectedCharacter?.episode.length} episodes</p>
    </div>
  );
}
