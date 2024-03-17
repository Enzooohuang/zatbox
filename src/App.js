import './App.css';
import { BrowserRouter } from 'react-router-dom';

import Page from './Page';
import Routes from './Routes';
import Main from './Layout/Main/Main';

function App() {
  return (
    <Page>
      <Main>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Main>
    </Page>
  );
}

export default App;
