import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { MovieDetails } from '../pages/MovieDetails';
import { EnterPage } from '../pages/EnterPage';


function App() {
  return (

    <Router>
      <div className="App">
        <header className="header">
          <Link className="link" to="/"><h1>Movies</h1></Link>
        </header>
        <main className="main">
          <Routes>
            <Route path="/movies/:id" element={<MovieDetails />}>
            </Route>
            <Route path="/" element={<EnterPage />}>
            </Route>
          </Routes>
        </main>
      </div>
    </Router>



  );
}

export { App };
