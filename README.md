# Correios.ts

Módulo simples para rastreio de encomendas e consulta de CEP dos Correios Brasil

## Exemplo de uso

```javascript
import correios from '@maurilhob/correios.ts';

correios.track('OS591389025BR')

[
  {
    status: 'Objeto entregue ao destinatário',
    date: '12/01/2022 10:01',
    local: 'Unidade de Distribuição - Sorocaba / SP'
  },
  {
    status: 'Objeto saiu para entrega ao destinatário',
    date: '12/01/2022 09:27',
    local: 'Unidade de Distribuição - Sorocaba / SP'
  },
  {
    status: 'Objeto em trânsito - por favor aguarde',
    date: '12/01/2022 07:28',
    origin: 'Unidade de Tratamento - Sorocaba / SP',
    destination: 'Unidade de Distribuição - Sorocaba / SP'
  },
  {
    status: 'Objeto em trânsito - por favor aguarde',
    date: '11/01/2022 20:56',
    origin: 'Unidade de Tratamento - Sao Paulo / SP',
    destination: 'Unidade de Tratamento - Sorocaba / SP'
  },
  {
    status: 'Objeto em trânsito - por favor aguarde',
    date: '11/01/2022 17:16',
    origin: 'Agência dos Correios - Sao Paulo / SP',
    destination: 'Unidade de Tratamento - Sao Paulo / SP'
  },
  {
    status: 'Objeto postado',
    date: '11/01/2022 17:07',
    local: 'Agência dos Correios - Sao Paulo / SP'
  }
]


correios.cep('39960000')

{
  cep: '39960-000',
  logradouro: '',
  complemento: '',
  bairro: '',
  localidade: 'Jequitinhonha',
  uf: 'MG',
  ibge: '3135803',
  gia: '',
  ddd: '33',
  siafi: '4715'
}

```

## Créditos

O módulo faz uso dos seguintes serviços:

Para o rastreamento: \
https://www.linkcorreios.com.br \
https://rastreamentocorreios.info

Para a consulta de CEP: \
https://viacep.com.br
