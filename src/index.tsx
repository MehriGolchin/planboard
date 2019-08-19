import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Header, Dashboard } from './components';
import { Default } from './themes';
import { ServerStyleSheet, ThemeProvider } from 'styled-components';

const App = () => (
  <ThemeProvider theme={Default}>
    <div>
      <Header />
      <Dashboard />
    </div>
  </ThemeProvider>
);

ReactDOM.render(<App />, document.getElementById("app"));
