import { Suspense, lazy } from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { store } from './state';
import Header from './components/Header';
import logo from './logo.svg';
import './app.css';

const Posts = lazy(() => import('./pages/Posts'));
const Post = lazy(() => import('./pages/Post'));

const App = () => {
  console.log(process.env.PUBLIC_URL, process.env.NODE_ENV);
  return (
    <Provider store={store}>
      <HashRouter basename="/">
        <Header />
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
        <main>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route path="/posts/:postId" component={Post} />
              <Route path="/" component={Posts} />
            </Switch>
          </Suspense>
        </main>
      </HashRouter>
    </Provider>
  );
};

export default App;
