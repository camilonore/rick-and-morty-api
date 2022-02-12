import './SearchForm.css'
import { useContext } from 'react'

import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

import SelectedCharacterContext from '../../context/SelectedCharacterContext'
import SearchIcon from '../SearchIcon/SearchIcon'

export default function SearchForm ({ setPage }) {
  const navigate = useNavigate()
  const { setSelectedCharacterId } = useContext(SelectedCharacterContext)

  const handleSubmit = (evt) => {
    evt.preventDefault()
    const name = evt.target[0].value
    navigate(`/search/${name}`)
    setSelectedCharacterId(0)
    setPage(1)
  }

  return (
    <div className='form-container'>
      <SearchIcon height='18px' color='#c3c3c3'/>
      <form onSubmit={handleSubmit} className='search-bar'>
        <input type='text' required placeholder='Search a character...'/>
      </form>
    </div>
  )
}

SearchForm.propTypes = {
  setPage: PropTypes.func
}
