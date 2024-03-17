import NotFoundCover from './NotFoundTab/NotFoundCover';
import Home from './Home/Home';

const routes = [
  {
    path: '/',
    renderer: (params = {}) => <Home {...params} />,
  },
  {
    path: '/not-found-cover',
    renderer: (params = {}) => <NotFoundCover {...params} />,
  },
];

export default routes;
