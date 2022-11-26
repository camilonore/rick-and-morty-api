import './SerieInNumbers.css'
import useSerieData from '../../hook/useSerieData'

export default function SerieInNumbers () {
  const [serieEpisode, serieLocation, serieDataCharacter] = useSerieData()

  return (
    <div className='serie-numbers-container' id='footer'>
      <p>{serieEpisode} Total episodes</p>
      <p>{serieLocation} Total locations</p>
      <p>{serieDataCharacter} Total characters</p>
    </div>
  )
}
