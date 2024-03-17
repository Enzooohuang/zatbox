import NotFoundCover from './NotFoundTab/NotFoundCover';
import Home from './Home/Home';
import HowItWorks from './HowItWorks/HowItWorks';
import Products from './Products/Products';
import About from './About/About';
import Contact from './Contact/Contact';

const routes = [
  {
    path: '/',
    renderer: (params = {}) => <Home {...params} />,
  },
  {
    path: '/how_it_works',
    renderer: (params = {}) => <HowItWorks {...params} />,
  },
  {
    path: '/products',
    renderer: (params = {}) => <Products {...params} />,
  },
  {
    path: '/about',
    renderer: (params = {}) => <About {...params} />,
  },
  {
    path: '/contact',
    renderer: (params = {}) => <Contact {...params} />,
  },
  {
    path: '/not_found',
    renderer: (params = {}) => <NotFoundCover {...params} />,
  },
];

export default routes;
