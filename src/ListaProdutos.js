import img_mesa_1 from './img/mesa1_img.png';
import img_mesa_2 from './img/mesa2_img.png';
import img_rack_1 from './img/rack1_img.png';
import img_rack_2 from './img/rack2_img.png';
import img_decoracao_1 from './img/decoracao1_img.png';
import img_decoracao_2 from './img/decoracao2_img.png';
import img_cadeira_1 from './img/cadeira1_img.png';
import img_cadeira_2 from './img/cadeira2_img.png';

const lista = {
  mesas: {
    mesa1: {
      nome: 'Social',
      classe: 'mesa de jantar',
      img: img_mesa_1,
      texto:
        'Uma mesa ideal para quem busca um jantar tranquilo e descontraído com a família.',
      preco: '1,999',
    },
    mesa2: {
      nome: 'Executiva',
      classe: 'mesa de jantar',
      img: img_mesa_2,
      texto:
        'Uma mesa ideal para quem busca uma reunião informal em um ambiente de trabalho.',
      preco: '2,699',
    },
  },
  racks: {
    rack1: {
      nome: 'Square',
      classe: 'rack',
      img: img_rack_1,
      texto:
        'Um rack ideal para quem quer estilo e sofísticação com um design clean.',
      preco: '999',
    },
    rack2: {
      nome: 'Square clean',
      classe: 'rack',
      img: img_rack_2,
      texto: 'Visual mais limpo com gavetas maiores, mais estilo e classe.',
      preco: '1,199',
    },
  },
  decorativos: {
    decoracao1: {
      nome: 'Square',
      classe: 'rack',
      img: img_decoracao_1,
      texto:
        'Um rack ideal para quem quer estilo e sofísticação com um design clean.',
      preco: '999',
    },
    decoracao2: {
      nome: 'Square clean',
      classe: 'rack',
      img: img_decoracao_2,
      texto: 'Visual mais limpo com gavetas maiores, mais estilo e classe.',
      preco: '1,199',
    },
  },
  cadeiras: {
    cadeira1: {
      nome: 'Flower',
      classe: 'Cadeira de praia',
      img: img_cadeira_1,
      texto:
        'Uma cadeira estilo praiana para curtir e relaxar na varanda de sua casa.',
      preco: '1,999',
    },
    cadeira2: {
      nome: 'relax',
      classe: 'Cadeira de praia',
      img: img_cadeira_2,
      texto:
        'Uma cadeira estilo praiana porém criada para relaxar na sala de estar de sua casa.',
      preco: '1,199',
    },
  },
};
export default lista;
