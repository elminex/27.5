import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducer';
import './index.css';
import App from './App';
import { addComment } from './actions';
import 'normalize.css';

const store= createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

store.dispatch(addComment('Pierwszy komentarz testowy'));
store.dispatch(addComment('Drugi komentarz testowy'));