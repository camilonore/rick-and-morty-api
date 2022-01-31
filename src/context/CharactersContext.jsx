import { createContext, useState } from "react";

const Context = createContext({})

export function CharactersContextProvider ({children}){

  const [characters, setCharacters] = useState([])

  return <Context.Provider value={{characters, setCharacters}}>
    {children}
  </Context.Provider>
}

export default Context