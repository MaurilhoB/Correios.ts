import linkcorreios from './services/linkcorreios';
import rastreamentocorreios from './services/rastreamentocorreios';

const track = async (code: string) => {
  const services = [linkcorreios, rastreamentocorreios];

  for (const service of services) {
    try {
      return await service(code);
    } catch (error) {
      console.log(error);
    }
  }
};

export default track;
