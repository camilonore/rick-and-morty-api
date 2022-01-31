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
      <SearchForm setPage={setPage} />
      <SerieInNumbers />
      <div className='main-container'>
        {loading ? (
          <Spinner />
        ) : characters.length <= 0 ? (
          <h1>El personaje no existe</h1>
        ) : (
          <>
            <ListOfCharacters characters={characters} />
            <SelectedCharacter />
          </>
        )}
      </div>
      <Pagination page={page} setPage={setPage} name={name} />
    </div>
  );
}
