import { createContext, useState } from "react";

const Context = createContext({})

export function SelectedCharacterProvider ({children}){

  const [selectedCharacterId, setSelectedCharacterId] = useState(0)

  return <Context.Provider value={{selectedCharacterId, setSelectedCharacterId}}>
    {children}
  </Context.Provider>
}

export default Context