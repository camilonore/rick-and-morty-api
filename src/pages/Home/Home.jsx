import './Home.css';
import SearchForm from '../../components/SearchForm/SearchForm';
import SerieInNumbers from '../../components/SerieInNumbers/SerieInNumbers';
import SelectedCharacter from '../../components/SelectedCharacter/SelectedCharacter';
import ListOfCharacters from '../../components/ListOfCharacters/ListOfCharacters';
import Spinner from '../../components/Spinner/Spinner';
import { useCharacters } from '../../hook/useCharacters';
import Pagination from '../../components/Pagination/Pagination';
import { useState } from 'react';

export default function Home() {
  const [page, setPage] = useState(1);

  const { loading, characters } = useCharacters({
    section: 'character',
    page: page,
    name: null,
  });

  return (
    <div className='home-container'>
      <SearchForm />
      <SerieInNumbers />
      <div className='main-container'>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <ListOfCharacters characters={characters} />
            <SelectedCharacter />
          </>
        )}
      </div>
      <Pagination page={page} setPage={setPage} name={null} />
    </div>
  );
}
