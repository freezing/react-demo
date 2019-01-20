import React, { Component } from 'react';
import Dashboard from './Dashboard';
import {Route, Switch} from "react-router-dom";
import NotFoundPage from './NotFoundPage';

const AppPages = () => (
	<Switch>
		<Route exact path="/" component={Dashboard} />
		<Route exact path="/dashboard" component={Dashboard} />
		<Route component={NotFoundPage}/>
	</Switch>
);

export default AppPages;