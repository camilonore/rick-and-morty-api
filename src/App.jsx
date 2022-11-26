import Home from './pages/Home/Home'
import SearchResults from './pages/SearchResult/SearchResult'
import Header from './components/Header/Header'
import { SelectedCharacterProvider } from './context/SelectedCharacterContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App () {
  return (
    <BrowserRouter>
      <Header />
        <SelectedCharacterProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/search/:name' element={<SearchResults />} />
          </Routes>
        </SelectedCharacterProvider>
    </BrowserRouter>
  )
}

export default App
