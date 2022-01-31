import getData from '../services/getData';
import { useEffect, useState } from 'react';

export default function useSerieData() {
  const [serieEpisode, setSerieEpisode] = useState('');
  const [serieLocation, setSerieLocation] = useState('');
  const [serieDataCharacter, setSerieDataCharacter] = useState('');

  useEffect(() => {
    getData({ section: 'episode' }).then((res) =>
      setSerieEpisode(res.data.info.count)
    );
    getData({ section: 'location' }).then((res) =>
      setSerieLocation(res.data.info.count)
    );
    getData({ section: 'character' }).then((res) =>
      setSerieDataCharacter(res.data.info.count)
    );
  }, []);

  return [serieEpisode, serieLocation, serieDataCharacter];
}
