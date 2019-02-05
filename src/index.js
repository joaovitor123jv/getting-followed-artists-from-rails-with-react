/*
	This is the Main file of the App, it calls the Router, that organizes changing pages
	along the use of it, and imports the main stylesheet
*/
import React from 'react';
import ReactDOM from 'react-dom';


import AppRouter from './router';
// import './styles/app.css';


ReactDOM.render( <AppRouter className="App"/>, document.getElementById('root'));
