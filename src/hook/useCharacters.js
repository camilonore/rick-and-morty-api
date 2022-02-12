import { useEffect, useState } from 'react'

import getData from '../services/getData'

export function useCharacters (
  { section, page, name } = {
    section: null,
    page: null,
    name: null
  }
) {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(
    function () {
      setLoading(true)
      getData({ section, page, name }).then((character) => {
        if (character.status === 404) {
          setLoading(false)
          setCharacters([])
        } else {
          setCharacters(character.data.results)
          setLoading(false)
        }
      })
    },
    [section, page, setCharacters, name]
  )

  return { loading, characters, setCharacters }
}
