import {Suspense, lazy} from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {store} from './state';

const Posts = lazy(() => import('./pages/posts'));
const Post = lazy(() => import('./pages/post'));

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/posts/:postId" component={Post} />
            <Route path="/" component={Posts} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
