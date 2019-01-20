import React, { Component } from 'react';
import {Route, Switch} from "react-router-dom";

import DashboardPage from './DashboardPage';
import NotFoundPage from './NotFoundPage';

const AppPages = () => (
	<Switch>
		<Route exact path="/" component={DashboardPage} />
		<Route exact path="/dashboard" component={DashboardPage} />
		<Route exact path="/dashboard/:histogramId" component={DashboardPage} />
		<Route component={NotFoundPage}/>
	</Switch>
);

export default AppPages;