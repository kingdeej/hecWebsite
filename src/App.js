import './App.css';
import EventsPage from './pages/EventsPage';
import HomePage from './pages/HomePage';
import Nav from './components/Nav';
import {Route, BrowserRouter, Routes } from 'react-router-dom'
import Footer from './components/Footer';
import EventPage from './pages/EventPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
      <Nav background='#2D5873' />
        <Routes >
          <Route path='/' Component={HomePage}/>
          <Route path='/eventsPage' Component={EventsPage}/>
          <Route path='/:eventId' Component={EventPage}/>
          <Route path='/login' Component={LoginPage}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;