import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider  } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { employeeReducer, employerReducer} from './store/reducers';
import reduxThunk from 'redux-thunk';

const rootReducer = combineReducers({
  employee: employeeReducer,
  employer: employerReducer
})

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(reduxThunk))
  );

ReactDOM.render(<Provider store={store}>
    <App /></Provider>,
  document.getElementById('root')
);
