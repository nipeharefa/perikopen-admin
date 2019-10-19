import React from 'react';
import ReactDOM from 'react-dom';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import moment from 'moment';

import 'uikit/dist/css/uikit.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import(/* webpackChunkName: "moment_id_locale" */ 'moment/locale/id')
  .then(() => {
      moment.locale('id');
  });

// loads the Icon plugin
UIkit.use(Icons);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
