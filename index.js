import React from 'react';
import ReactDOM from 'react-dom';
import  App  from './src/app.js';
import { BrowserRouter as Router } from 'react-router-dom';
import {disableReactDevTools} from '@fvilers/disable-react-devtools';

if( process.env.NODE_ENV === 'production' ) disableReactDevTools();

// var express = require('express');
// var app     = express();
// var cors    = require('cors');
// var dal     = require('./dal.js');
// const e = require('express');



ReactDOM.render(

<Router>
    <React.StrictMode>
        <App/>
    </React.StrictMode>
</Router>,
 document.getElementById('root'));