import React from 'react';
import ReactDOM from 'react-dom';



// import MainPage from './pages/main-page';
// import LoginPage from './pages/login-page';
// import NotFoundPage from './pages/not-found-page';



// import Navbar from './components/navbar';

// import {Pages} from './constants';
// import {AppStyle} from './styles/app';


import AppRouter from './router';
import './index.css';


ReactDOM.render(
	<AppRouter/>, 
	document.getElementById('root')
);



// class App extends React.Component {
// 	constructor(props){
// 		super(props);
// 		this.state = {
// 			page: Pages.HOME_PAGE,
// 			previousPage: Pages.HOME_PAGE
// 		};

// 		this.handleLoginClick = this.handleLoginClick.bind(this);
// 		this.handleLogoutClick = this.handleLogoutClick.bind(this);
// 		this.handleBackButton = this.handleBackButton.bind(this);
// 	}

// 	handleLoginClick(){
// 		this.setState(state => ({
// 			page: Pages.LOGIN_PAGE,
// 			previousPage: state.page
// 		}));
// 		// this.setState({page: Pages.LOGIN_PAGE});
// 		console.log("Login Button Clicked");
// 	}

// 	handleLogoutClick(){
// 		this.setState(state => ({
// 			page: Pages.HOME_PAGE,
// 			previousPage: state.page
// 		}));
// 		console.log("Logout Button Clicked");
// 	}

// 	handleBackButton(){
// 		this.setState({page: this.previousPage()});
// 	}

// 	render () {
// 		let page;
// 		switch(this.state.page){
// 			case Pages.HOME_PAGE:
// 				page = <MainPage onClick={this.handleLoginClick}/>
// 				break;
// 			case Pages.LOGIN_PAGE:
// 				page = <LoginPage onClick={this.handleLogoutClick}/>
// 				break;
// 			default:
// 				page = <NotFoundPage onClick={this.handleBackButton}/>
// 				break;
// 		}
// 		return (
// 			<div style={AppStyle}>
// 				<Navbar/>
// 				{page}
// 			</div>
// 		)
// 	}
// }

// ReactDOM.render(
// 	<App/>,
// 	document.getElementById('root')
// );