import './Home.css'
import SearchForm from '../../components/SearchForm/SearchForm'
import SerieInNumbers from '../../components/SerieInNumbers/SerieInNumbers'
import SelectedCharacter from '../../components/SelectedCharacter/SelectedCharacter'
import ListOfCharacters from '../../components/ListOfCharacters/ListOfCharacters'
import Spinner from '../../components/Spinner/Spinner'
import { useCharacters } from '../../hook/useCharacters'
import Pagination from '../../components/Pagination/Pagination'
import { useState } from 'react'

export default function Home () {
  const [page, setPage] = useState(1)

  const { loading, characters } = useCharacters({
    section: 'character',
    page: page,
    name: undefined
  })

  return (
    <>
      <div className='initial-view'>
        <h3 className='initial-view-title'>
          Rick and <br /> Morty Api
        </h3>
        <span className='initial-view-description'>
          I hope you like the website
        </span>
        <SearchForm />
      </div>
      <div className='home-container'>
        <section className='main-container'>
          {loading
            ? (
            <Spinner />
              )
            : (
            <>
              <ListOfCharacters characters={characters} />
              <SelectedCharacter characters={characters}/>
            </>
              )}
        </section>
        {loading
          ? (
              ''
            )
          : (
          <Pagination page={page} setPage={setPage} name={undefined} />
            )}
        <SerieInNumbers/>
      </div>
    </>
  )
}
