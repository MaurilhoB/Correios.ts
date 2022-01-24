export const formatStatus = (text: string) =>
  text.replace('Status: ', '').trim();

export const formateDate = (text: string) =>
  text
    .replaceAll(' ', '')
    .replace('Data:', '')
    .replace('Hora:', '')
    .replace('|', ' ');

export const formatLocal = (text: string) => text.replace('Local: ', '');

export const formatOrigin = (text: string) => text.replace('Origem: ', '');

export const formatDestination = (text: string) =>
  text.replace('Destino: ', '');

export const BASE_URL = 'http://rastreamentocorreios.info/consulta/';
