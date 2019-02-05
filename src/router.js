import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MainPage from './pages/main-page';
import NotFoundPage from './pages/not-found-page';
import ArtistListPage from './pages/artist-list';


import Navbar from './components/navbar';

const AppRouter = () => (
	<Router>
		<div>
			<Navbar/>
			<Switch>
				<Route path="/" exact component={MainPage}/>
				<Route path="/artist-list" component={ArtistListPage}/>
				<Route path="*" component={NotFoundPage}/>
			</Switch>
		</div>
	</Router>
);

export default AppRouter;