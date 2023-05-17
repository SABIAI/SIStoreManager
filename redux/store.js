import { createStore } from 'redux';
import counterReducer from './counter/counterReducer';

// Passing counterReducer to createStore
const store = createStore(counterReducer);
export default store; 