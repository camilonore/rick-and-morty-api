import './Pagination.css';
import Button from '../Button/Button';
import getDatata from '../../services/getData';
import { useState } from 'react';

export default function Pagination({ page, setPage, name }) {
  const [maxPage, setMaxPage] = useState(0);

  const data = getDatata({ name: name, page: null, section: 'character' });
  data.then((data) => setMaxPage(data.data.info.pages));

  const hanldePrevious = () => {
    setPage(page - 1);
  };
  const hanldeNext = () => {
    setPage(page + 1);
  };

  return (
    <div className='pagination-container'>
      {page > 1 ? <Button onClick={hanldePrevious}>Anterior</Button> : ''}
      {page < maxPage ? <Button onClick={hanldeNext}>Siguiente</Button> : ''}
    </div>
  );
}
