import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import { Provider } from "react-redux";
import { reducer} from "./reducer/reducer";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import PhotoCard from "./components/photoCard";

const logger = () => next => action => {
  console.log("Dispatching action:", action);
  next(action);
};

const store = createStore(reducer, applyMiddleware(logger, thunk));


function App() {
  return (
    <div className="App">
      <PhotoCard/>
    </div>
  );
}



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
