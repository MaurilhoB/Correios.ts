import viacep from './services/viacep';

import { CepResponse } from '../../interfaces';

const cep = async (cep: string): Promise<CepResponse> => {
  const sanitizedCep = cep.replaceAll(/\D/g, '').slice(0, 8);
  const services = [viacep];

  if (sanitizedCep.length < 8) {
    throw new Error('Tamanho de cep inválido');
  }

  for (const service of services) {
    try {
      return await service(sanitizedCep);
    } catch (error) {
      console.log(error);
    }
  }
};

export default cep;
