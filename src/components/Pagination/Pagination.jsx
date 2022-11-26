import './Pagination.css'
import { useEffect, useState } from 'react'

import PropTypes from 'prop-types'

import getData from '../../services/getData'
import Button from '../Button/Button'

export default function Pagination ({ page, setPage, name }) {
  const [maxPage, setMaxPage] = useState(0)

  useEffect(() => {
    getData({ name: name, section: 'character' })
      .then(res => {
        if (res.status !== 404) {
          setMaxPage(res.data.info.pages)
        }
      })
  }, [])

  const hanldePrevious = () => {
    setPage(page - 1)
    setTimeout(() => scrollTo(0, innerHeight / 1.5), 150)
  }
  const hanldeNext = () => {
    setPage(page + 1)
    setTimeout(() => scrollTo(0, innerHeight / 1.5), 150)
  }

  return (
    <>
      {maxPage === 0
        ? ''
        : <div className='pagination-container'>
          {page > 1 ? <Button onClick={hanldePrevious}>Previous</Button> : ''}
          {page < maxPage ? <Button onClick={hanldeNext}>Next</Button> : ''}
        </div>
      }
    </>
  )
}
Pagination.propTypes = {
  page: PropTypes.number,
  setPage: PropTypes.func,
  name: PropTypes.string
}
