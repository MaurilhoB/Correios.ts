export interface TrackingEvent {
  status: string;
  date: string;
  origin?: string;
  destination?: string;
  local?: string;
}

export interface CepResponse {
  cep: string;
  logradouro?: string;
  complemento?: string;
  bairro?: string;
  localidade: string;
  uf: string;
  ibge?: string;
  gia?: string;
  ddd?: string;
  siafi?: string;
}
