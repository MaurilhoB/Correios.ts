import axios from 'axios';
import cheerio from 'cheerio';

import { TrackingEvent } from '../../../interfaces';

import { BASE_URL } from '../../../utils/rastreamentocorreios';

const rastreamentocorreios = async (code: string): Promise<TrackingEvent[]> => {
  const response = await axios.get<string>(`${BASE_URL}/${code}`);
  return getTrackingEvents(response.data);
};

const getTrackingEvents = (html: string): TrackingEvent[] => {
  const $ = cheerio.load(html);
  $('p i').append('__SEPARATOR__');
  $('br').replaceWith('__SEPARATOR__');

  const eventsHTML = $('.track-card');

  let result: TrackingEvent[] = [];

  eventsHTML.each((_, element) => {
    let event = {} as TrackingEvent;
    const trackInfo = $(element)
      .text()
      .split('\n')
      .filter((str) => str !== '')
      .slice(0, 3);

    event.status = trackInfo[1].trim();
    event.date = trackInfo[0].replace('__SEPARATOR__', ' ').trim();

    if (trackInfo[2].includes('__SEPARATOR__')) {
      const [origin, destination] = trackInfo[2].split('__SEPARATOR__');
      event.origin = origin.replace(', ', ' / ').trim();
      event.destination = destination.replace(', ', ' / ').trim();
    } else event.local = trackInfo[2].replace(', ', ' / ').trim();

    result.push(event);
  });

  return result;
};

export default rastreamentocorreios;
