import './CharacterCard.css'
import SelectedCharacterContext from '../../context/SelectedCharacterContext'
import { useContext } from 'react'

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
