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
    path: '/how-it-works',
    renderer: (params = {}) => <HowItWorks {...params} />,
  },
  {
    path: '/products',
    renderer: (params = {}) => <Products {...params} />,
  },
  {
    path: '/about-us',
    renderer: (params = {}) => <About {...params} />,
  },
  {
    path: '/contact',
    renderer: (params = {}) => <Contact {...params} />,
  },
  {
    path: '/not-found',
    renderer: (params = {}) => <NotFoundCover {...params} />,
  },
];

export default routes;
