import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import reactRouterPatch from './patches/react-router.patch';

import Home from './components/Home';

type AppProps = {
	store: any,
	history: any
}

const App = ({ store, history }: AppProps) => {
	return (
		<Provider store={store}>
			<Router history={history}>
				<Route path="/" component={Home} />
			</Router>
		</Provider>
	);
}

export default App;
