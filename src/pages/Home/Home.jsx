import './Home.css'
import { useState } from 'react'

import ListOfCharacters from '../../components/ListOfCharacters/ListOfCharacters'
import Pagination from '../../components/Pagination/Pagination'
import SearchForm from '../../components/SearchForm/SearchForm'
import SelectedCharacter from '../../components/SelectedCharacter/SelectedCharacter'
import SerieInNumbers from '../../components/SerieInNumbers/SerieInNumbers'
import Spinner from '../../components/Spinner/Spinner'
import { useCharacters } from '../../hook/useCharacters'

export default function Home () {
  const [page, setPage] = useState(1)

  const { loading, characters } = useCharacters({
    section: 'character',
    page: page,
    name: null
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
        <SearchForm setPage={setPage}/>
      </div>
      <div className='home-container'>
        {loading
          ? (
            <Spinner />
            )
          : (
            <>
              <section className='main-container'>
                <ListOfCharacters characters={characters} />
                <SelectedCharacter characters={characters}/>
              </section>

              <Pagination page={page} setPage={setPage} name={undefined} />
            </>
            )}
        <SerieInNumbers/>
      </div>
    </>
  )
}
