import React from 'react';
import {Route, Switch} from "react-router-dom";

import DashboardPage from './DashboardPage';
import ThroughputPage from './/ThroughputPage';
import NotFoundPage from './NotFoundPage';

const AppPages = () => (
	<Switch>
		<Route exact path="/" component={DashboardPage} />
		<Route exact path="/dashboard" component={DashboardPage} />
		<Route exact path="/dashboard/:histogramId" component={DashboardPage} />
		<Route exact path="/throughput" component={ThroughputPage} />
		<Route component={NotFoundPage}/>
	</Switch>
);

export default AppPages;