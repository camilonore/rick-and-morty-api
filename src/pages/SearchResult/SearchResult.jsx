import { useState } from 'react'

import { useParams } from 'react-router-dom'

import './SearchResult.css'
import ListOfCharacters from '../../components/ListOfCharacters/ListOfCharacters'
import NoCharacter from '../../components/NoCharacter/NoCharacter'
import Pagination from '../../components/Pagination/Pagination'
import SearchForm from '../../components/SearchForm/SearchForm'
import SelectedCharacter from '../../components/SelectedCharacter/SelectedCharacter'
import SerieInNumbers from '../../components/SerieInNumbers/SerieInNumbers'
import Spinner from '../../components/Spinner/Spinner'
import { useCharacters } from '../../hook/useCharacters'

export default function Home () {
  const { name } = useParams()

  const [page, setPage] = useState(1)

  const { loading, characters } = useCharacters({
    section: 'character',
    page: page,
    name
  })
  return (
    <div className='home-container'>
      <section className='search-bar'>
        <SearchForm setPage={setPage} />
      </section>
      <section className='main-container'>
        {loading
          ? (
          <Spinner />
            )
          : characters.length <= 0
            ? (
          <NoCharacter />
              )
            : (
          <>
            <ListOfCharacters characters={characters} />
            <SelectedCharacter characters={characters}/>
          </>
              )}
      </section>
      {loading ? '' : <Pagination page={page} setPage={setPage} name={name} />}
      <SerieInNumbers />
    </div>
  )
}
