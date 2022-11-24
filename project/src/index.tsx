import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {reviews} from './mocks/reviews';
import {store} from './store';
import App from './components/app/app';
import ErrorMessage from './components/error-message/error-message';
import {checkAuthAction, fetchOffers} from './store/api-actions';

store.dispatch(fetchOffers());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <App
        reviews = {reviews}
      />
    </Provider>
  </React.StrictMode>,
);
