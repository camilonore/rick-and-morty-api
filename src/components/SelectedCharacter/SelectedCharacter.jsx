import './SelectedCharacter.css'
import { useContext, useEffect, useState } from 'react'

import PropTypes from 'prop-types'

import SelectedCharacterContext from '../../context/SelectedCharacterContext'

export default function SelectedCharacter ({ characters }) {
  const [selectedCharacter, setSelectedCharacter] = useState(characters[0])
  const { selectedCharacterId } = useContext(SelectedCharacterContext)

  useEffect(() => {
    setSelectedCharacter(characters[selectedCharacterId])
  }, [characters, selectedCharacterId])

  const handleCloseModal = () => {
    document.querySelector('.selected-character-container').style.display =
      'none'
  }
  const handleResize = () => {
    if (window.innerWidth > 692) {
      document.querySelector('.selected-character-container').style.display =
        'flex'
    } else {
      document.querySelector('.selected-character-container').style.display =
        'none'
    }
  }
  window.onresize = handleResize

  return (
    <div className='selected-character-container'>
      <button className='close-modal' onClick={handleCloseModal}>
        &times;
      </button>
      <img
        className='selected-character-image'
        src={selectedCharacter?.image}
        alt={selectedCharacter?.name}
      />
      <div className='details-container' id='characters'>
        <h3>{selectedCharacter?.name}</h3>
        <p>
          <span className='character-span'>Gender:</span>{' '}
          {selectedCharacter?.gender}
        </p>
        <p>
          <span className='character-span'>Origin:</span>{' '}
          {selectedCharacter?.origin?.name}
        </p>
        <p>
          <span className='character-span'>Location:</span>{' '}
          {selectedCharacter?.location?.name}
        </p>
        <p>
          {' '}
          {selectedCharacter?.episode.length} episodes
        </p>
        <p>
          <span className='character-span'>Status:</span>{' '}
          {selectedCharacter?.status}
        </p>
      </div>
    </div>
  )
}

SelectedCharacter.propTypes = {
  characters: PropTypes.array
}
