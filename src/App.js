import React from 'react';
import './App.css';
import Posts from './Components/Posts/Posts'
import PostForm from './Components/Posts/Postform'

import {Provider} from 'react-redux';
import  store from './store'
import {BrowserRouter as Router,Switch, Route}  from 'react-router-dom'

function App() {

  return (
    <Router>


    <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <Switch>
        <Route exact path='/' component={PostForm} />
        <Route exact path='/posts' component={Posts} />
        </Switch>
        </header>
    </div>
    </Provider>
    </Router>
  );
}

export default App;
