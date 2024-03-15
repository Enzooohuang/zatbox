import './App.css';
import { BrowserRouter } from 'react-router-dom';

import Page from './Page';
import Routes from './Routes';

function App() {
  return (
    <Page>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Page>
  );
}

export default App;
