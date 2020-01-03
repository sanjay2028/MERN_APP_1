import { createStore, combineReducers, applyMiddleware } from 'redux';
import jobList from './reducers/joblist';
import jobForm from './reducers/jobform';
import file from './reducers/file';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    jobList,jobForm,file
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;