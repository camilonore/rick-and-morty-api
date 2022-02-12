import './Pagination.css'
import Button from '../Button/Button'
import getDatata from '../../services/getData'
import { useState } from 'react'
import PropTypes from 'prop-types'

export default function Pagination ({ page, setPage, name }) {
  const [maxPage, setMaxPage] = useState(0)

  const data = getDatata({ name: name, page: undefined, section: 'character' })
  data.then((data) => setMaxPage(data.data.info.pages))

  const hanldePrevious = () => {
    setPage(page - 1)
    setTimeout(() => scrollTo(0, innerHeight / 1.5), 100)
  }
  const hanldeNext = () => {
    setPage(page + 1)
    setTimeout(() => scrollTo(0, innerHeight / 1.5), 100)
  }

  return (
    <div className='pagination-container'>
      {page > 1 ? <Button onClick={hanldePrevious}>Previous</Button> : ''}
      {page < maxPage ? <Button onClick={hanldeNext}>Next</Button> : ''}
    </div>
  )
}
Pagination.propTypes = {
  page: PropTypes.number,
  setPage: PropTypes.func,
  name: PropTypes.string
}
