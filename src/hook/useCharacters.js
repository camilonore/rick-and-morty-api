import { useContext, useEffect, useState } from 'react';
import getData from '../services/getData';
import CharactersContext from '../context/CharactersContext';

export function useCharacters(
  { section, page, name } = { section: null, page: null, name: false }
) {
  const { characters, setCharacters } = useContext(CharactersContext);
  const [loading, setLoading] = useState(true);

  useEffect(
    function () {
      setLoading(true);
      getData({ section, page, name }).then((character) => {
        if (character === 'error') {
          setLoading(false);
          setCharacters([]);
        } else {
          setCharacters(character.data.results);
          setLoading(false);
        }
      });
    },
    [section, page, setCharacters, name]
  );

  return { loading, characters, setCharacters };
}
