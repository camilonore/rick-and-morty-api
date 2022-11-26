import './ListOfCharacters.css'
import PropTypes from 'prop-types'

import CharacterCard from '../CharacterCard/CharacterCard'

export default function ListOfCharacters ({ characters }) {
  return (
    <div className='characters-container'>
      {characters.map(({ name, status, species, image }, index) => {
        return (
          <CharacterCard
            key={index}
            id={index}
            name={name}
            status={status}
            species={species}
            image={image}
          />
        )
      })}
    </div>
  )
}
ListOfCharacters.propTypes = {
  characters: PropTypes.array
}
