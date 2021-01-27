import { Suspense, lazy } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { store } from './state';
import Header from './components/header';
import './index.css';

const Posts = lazy(() => import('./pages/posts'));
const Post = lazy(() => import('./pages/post'));

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <main>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route path="/posts/:postId" component={Post} />
              <Route path="/" component={Posts} />
            </Switch>
          </Suspense>
        </main>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
