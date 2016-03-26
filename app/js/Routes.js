'use strict';

import React                                         from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { createStore, applyMiddleware }              from 'redux';
import { Provider }                                  from 'react-redux';
import ReduxPromise                                  from 'redux-promise';
import ReduxThunk                                    from 'redux-thunk';

import App                                           from './App';
import HomePage                                      from './pages/HomePage';
import SamplePage                                    from './pages/SamplePage';
import NotFoundPage                                  from './pages/NotFoundPage';

import reducers                                      from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise, ReduxThunk)(createStore);

export default (
  <Provider store={ createStoreWithMiddleware(reducers) }>
    <Router history={ browserHistory }>
      <Route path="/" component={ App }>

        <IndexRoute component={ HomePage } />

        <Route path="/" component={ HomePage } />
        <Route path="/sample" component={ SamplePage } />

        <Route path="*" component={ NotFoundPage } />

      </Route>
    </Router>
  </Provider>
);
