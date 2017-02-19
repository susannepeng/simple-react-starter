import { createStore } from 'redux';
import rootReducer from '../reducers/rootReducer';

const configureStore = (initialState: Object = {}) => {
	const store = createStore(rootReducer, initialState);

	if (module.hot) {
		// $FlowIgnore
		module.hot.accept('../reducers/rootReducer', () => {
			store.replaceReducer(rootReducer);
		});
	}

	return store;
}

export default configureStore;