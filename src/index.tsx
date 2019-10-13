import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Header, Dashboard, ProjectDetails, SignIn, SignUp, CreateProjectContainer } from './components';
import { Default } from './themes';
import { GlobalStyle } from './globalStyle';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './store/reducers';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={Default}>
      <BrowserRouter>
        <div style={{ height: '100%' }}>
          <GlobalStyle />
          <Header />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/project/:id" component={ProjectDetails} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/createproject" component={CreateProjectContainer} />
          </Switch>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("app"));
