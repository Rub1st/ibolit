import React from "react"
import ReactDOM from 'react-dom'
import * as serviceWorker from '../serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducer from '../main_redux'
import thunk from 'redux-thunk'
import App from '../App'

let store = createStore(reducer, applyMiddleware(thunk))


class Root extends React.Component {
  render () {
    return (
        <React.Fragment>
          <Provider store={store}>
            <BrowserRouter>
              <App/>
            </BrowserRouter>
          </Provider>
        </React.Fragment>
    );
  }
}

serviceWorker.unregister();

export default Root
