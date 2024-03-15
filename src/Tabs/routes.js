import NotFoundCover from './NotFoundTab/NotFoundCover';

const routes = [
  {
    path: '/not-found-cover',
    renderer: (params = {}) => <NotFoundCover {...params} />,
  },
];

export default routes;
