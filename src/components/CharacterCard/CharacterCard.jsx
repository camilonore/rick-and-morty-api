import './CharacterCard.css'
import { useContext } from 'react'

import PropTypes from 'prop-types'

import SelectedCharacterContext from '../../context/SelectedCharacterContext'

export default function CharacterCard ({ id, name, status, species, image }) {
  const { setSelectedCharacterId } = useContext(SelectedCharacterContext)

  const handleDetails = (id) => () => {
    setSelectedCharacterId(id)
    if (window.innerWidth < 690) {
      document.querySelector('.selected-character-container').style.display =
        'flex'
    }
  }

  return (
    <button className='card-container'>
      <img src={image} alt={name} onClick={handleDetails(id)} className='character-image' />
    </button>
  )
}

CharacterCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  status: PropTypes.string,
  species: PropTypes.string,
  image: PropTypes.string
}
