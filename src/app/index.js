import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './store/configureStore';
import App from './App'

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

const render = () => {
	ReactDOM.render(
		<AppContainer>
			<App store={store} history={history} />
		</AppContainer>,
		document.getElementById('app')
	);
}
store.subscribe(render);
render();

// $FlowIgnore
if (module.hot) module.hot.accept('./App', () => render());
