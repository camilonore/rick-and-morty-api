import './SearchResult.css';
import SearchForm from '../../components/SearchForm/SearchForm';
import SerieInNumbers from '../../components/SerieInNumbers/SerieInNumbers';
import SelectedCharacter from '../../components/SelectedCharacter/SelectedCharacter';
import ListOfCharacters from '../../components/ListOfCharacters/ListOfCharacters';
import { useCharacters } from '../../hook/useCharacters';
import Spinner from '../../components/Spinner/Spinner';
import { useParams } from 'react-router-dom';
import Pagination from '../../components/Pagination/Pagination';
import { useState } from 'react';
import NoCharacter from '../../components/NoCharacter/NoCharacter';

export default function Home() {
  let { name } = useParams();

  const [page, setPage] = useState(1);

  const { loading, characters } = useCharacters({
    section: 'character',
    page: page,
    name,
  });
  return (
    <div className='home-container'>
      <section className='search-bar'>
        <SearchForm setPage={setPage} />
      </section>
      <section className='main-container'>
        {loading ? (
          <Spinner />
        ) : characters.length <= 0 ? (
          <NoCharacter />
        ) : (
          <>
            <ListOfCharacters characters={characters} />
            <SelectedCharacter />
          </>
        )}
      </section>
      {loading ? '' : <Pagination page={page} setPage={setPage} name={name} />}
      <SerieInNumbers />
    </div>
  );
}
