import './App.css';
import EventsPage from './pages/EventsPage';
import HomePage from './pages/HomePage';
import Nav from './components/Nav';
import {Route, BrowserRouter, Routes } from 'react-router-dom'
import Footer from './components/Footer';
import EventPage from './pages/EventPage';
import LoginPage from './pages/LoginPage';
import AdminPage from './pages/AdminPage';
import AddAdmin from './pages/AdminPages/AddAdmin';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Nav background='#2D5873' />
        <Routes >
          <Route path='/' Component={HomePage}/>
          <Route path='/events-page' Component={EventsPage}/>
          <Route path='/:eventId' Component={EventPage}/>
          <Route path='/login' Component={LoginPage}/>
          <Route path='/Admin-page' Component={AdminPage}/>
          <Route path='/Admin-page/add-event' Component={AddAdmin}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;