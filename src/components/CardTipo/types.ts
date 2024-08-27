import obesidadeIII from '@/assets/img/thais-carla.webp'
import obesidadeII from '@/assets/img/thais-mini.webp'
import obesidadeI from '@/assets/img/gordinho-outfit.webp'
import sobrepeso from '@/assets/img/gordo-normal.webp'
import normal from '@/assets/img/pessoa-normal.webp'
import abaixo from '@/assets/img/morto-de-fome.webp'

const weightTypes = [
  {
    value: 1,
    interval: 'Acima de 40,0',
    title: 'Obesidade grau III',
    img: obesidadeIII,
    description:
      'Aqui o sinal é vermelho, com forte probabilidade de já existirem doenças muito graves associadas. O tratamento deve ser ainda mais urgente.'
  },
  {
    value: 2,
    interval: 'Entre 35,0 e 39,9',
    title: 'Obesidade grau II',
    img: obesidadeII,
    description:
      'Mesmo que seus exames aparentem estar normais, é hora de se cuidar, iniciando mudanças no estilo de vida com o acompanhamento próximo de profissionais de saúde.'
  },
  {
    value: 3,
    interval: 'Entre 30,0 e 34,9',
    title: 'Obesidade grau I',
    img: obesidadeI,
    description:
      'Sinal de alerta! Chegou na hora de se cuidar, mesmo que seus exames sejam normais. Vamos dar início a mudanças hoje! Cuide de sua alimentação. Você precisa iniciar um acompanhamento com nutricionista e/ou endocrinologista.'
  },
  {
    value: 4,
    interval: 'Entre 25,0 e 29,9',
    title: 'Sobrepeso',
    img: sobrepeso,
    description:
      'Ele é, na verdade, uma pré-obesidade e muitas pessoas nessa faixa já apresentam doenças associadas, como diabetes e hipertensão. Importante rever hábitos e buscar ajuda antes de, por uma série de fatores, entrar na faixa da obesidade pra valer.'
  },
  {
    value: 5,
    interval: 'Entre 18,6 e 24,9',
    title: 'Normal',
    img: normal,
    description:
      'Que bom que você está com o peso normal! E o melhor jeito de continuar assim é mantendo um estilo de vida ativo e uma alimentação equilibrada.'
  },
  {
    value: 6,
    interval: '18,5 ou menos',
    title: 'Abaixo do normal',
    img: abaixo,
    description:
      'Procure um médico. Algumas pessoas têm um baixo peso por características do seu organismo e tudo bem. Outras podem estar enfrentando problemas, como a desnutrição. É preciso saber qual é o caso.'
  }
]

export default weightTypes
