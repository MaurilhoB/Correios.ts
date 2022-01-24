import axios from 'axios';
import cheerio from 'cheerio';

import {
  formatStatus,
  formateDate,
  formatLocal,
  formatOrigin,
  formatDestination,
  BASE_URL,
} from '../../../utils/linkcorreios';

import { TrackingEvent } from '../../../interfaces';

const linkcorreios = async (code: string): Promise<TrackingEvent[]> => {
  const response = await axios.get<string>(`${BASE_URL}?id=${code}`);
  return getTrackingEvents(response.data);
};

const getTrackingEvents = (html: string): TrackingEvent[] => {
  const $ = cheerio.load(html);
  const eventsHTML = $('.singlepost .linha_status');
  let result: TrackingEvent[] = [];

  eventsHTML.each((_, element) => {
    let event = {} as TrackingEvent;

    const row = $(element);

    row.find('li').each((_, liElem) => {
      const text = $(liElem).text();

      if (text.includes('Status')) event.status = formatStatus(text);
      if (text.includes('Data')) event.date = formateDate(text);
      if (text.includes('Local')) event.local = formatLocal(text);
      if (text.includes('Origem')) event.origin = formatOrigin(text);
      if (text.includes('Destino')) event.destination = formatDestination(text);
    });

    result.push(event);
  });

  return result;
};

export default linkcorreios;
