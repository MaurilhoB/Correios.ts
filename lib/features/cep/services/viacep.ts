import axios from 'axios';
import { CepResponse } from '../../../interfaces';

const viacep = async (cep: string): Promise<CepResponse> => {
  const response = await axios.get<CepResponse>(
    `https://viacep.com.br/ws/${cep}/json/`
  );
  return response.data;
};

export default viacep;
