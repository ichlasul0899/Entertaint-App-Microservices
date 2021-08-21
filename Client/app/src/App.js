import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home'
import TvSeries from './pages/TvSeries'
import Favorite from './pages/Favorite'
import Navbar from './component/Navbar';
import Sidebar from './component/Sidebar';
import AddMovies from './pages/AddMovies';
import Detail from './pages/Detail';
import Edit from './pages/Edit';
import { ApolloProvider} from '@apollo/client'
import client from './config/grapql'

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Navbar />
          <Sidebar />
          <div style={{ display: "flex", flexDirection: 'row', justifyContent: 'start', flexWrap: 'wrap', marginLeft: '220px', marginTop: '69px' }} >
            <Switch>
              <Route path="/tv-series">
                <TvSeries />
              </Route>
              <Route path="/favorite">
                <Favorite />
              </Route>
              <Route path="/add-movies">
                <AddMovies />
              </Route>
              <Route path="/detail/:id">
                <Detail />
              </Route>
              <Route path="/edit/:id">
                <Edit />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
