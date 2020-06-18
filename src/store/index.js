
import { Store, createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
console.log('process.env.NODE_ENV',process.env.NODE_ENV);
const store = createStore(
    reducers,
    {},
    compose(
        (process.env.NODE_ENV === 'development') &&
        typeof window === 'object' && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
));

export default store;
