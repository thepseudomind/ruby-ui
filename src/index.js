import React from 'react';
import ReactDOM from 'react-dom';
import { createStore} from 'redux';
import { Provider } from  'react-redux';
import './css/index.css';
import App from  './containers/App'
import * as serviceWorker from './serviceWorker';
import { changeSearchField } from './reducers/reducers';

const store = createStore(changeSearchField);

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
