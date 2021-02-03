import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Store } from 'webext-redux';

const store = new Store();
import Popup from './Popup';
import './index.css';

store.ready().then(() => {
  render(
    <Provider store={store}>
      <Popup />
    </Provider>,
    window.document.querySelector('#app-container')
  );
});
