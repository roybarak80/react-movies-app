import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

import Home from './components/home';
import Artist from './components/artist';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);

const App =() => {
    return (
        <Provider store={createStoreWithMiddleware(reducers)}>

        <BrowserRouter>
        <div>
          
            <Route exact path="/" component={Home}/>
            <Route path="/artist/:id" component={Artist}/>
          
           
           
        </div>
        
        </BrowserRouter>
        </Provider>
    )
}
ReactDOM.render(<App />, document.getElementById('root'));

