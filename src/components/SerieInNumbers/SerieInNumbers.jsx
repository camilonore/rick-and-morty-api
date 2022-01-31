import './SerieInNumbers.css';
import useSerieData from '../../hook/useSerieData';

export default function SerieInNumbers() {
  const [serieEpisode, serieLocation, serieDataCharacter] = useSerieData();

  return (
    <div className='serie-numbers-container'>
      <h3>La serie en números:</h3>
      <p>{serieEpisode} Número de episodios</p>
      <p>{serieLocation} Número de locations</p>
      <p>{serieDataCharacter} Número de personajes</p>
    </div>
  );
}
