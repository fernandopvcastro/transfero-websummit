import isMobile from '@/utils/is-mobile';

const title = 'Transfero';

const email = '';

const repository = 'https://github.com/fernandopvcastro/transfero-websummit/';

const messages = {
  app: {
    crash: {
      title: 'Oooops... Desculpe, eu acho, algo deu errado. Você pode:',
      options: {
        email: `contato com o autor por este e-mail - ${email}`,
        reset: 'Pressione aqui para redefinir o aplicativo',
      },
    },
  },
  loader: {
    fail: 'Hmmmmm, há algo errado com este processo de carregamento de componentes... Talvez tentar mais tarde seja a melhor ideia',
  },
  images: {
    failed: 'algo deu errado durante o carregamento da imagem :(',
  },
  404: 'Ei você? O que você está procurando?',
};

const dateFormat = 'MMMM DD, YYYY';

const loader = {
  // no more blinking in your app
  delay: 300, // if your asynchronous process is finished during 300 milliseconds you will not see the loader at all
  minimumLoading: 700, // but if it appears, it will stay for at least 700 milliseconds
};

const defaultMetaTags = {
  image: '/cover.png',
  description:
    'A blockchain finance solutions company focused on enabling a more decentralized and free global system.',
};
const giphy404 = 'https://giphy.com/embed/xTiN0L7EW5trfOvEk0';

export {
  loader,
  dateFormat,
  messages,
  repository,
  email,
  title,
  defaultMetaTags,
  giphy404,
};
