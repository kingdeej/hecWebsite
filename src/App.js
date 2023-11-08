import './App.css';
import EventsPage from './pages/EventsPage';
import HomePage from './pages/HomePage';
import Nav from './components/Nav';
import {Route, BrowserRouter, Routes, useNavigate } from 'react-router-dom'
import Footer from './components/Footer';
import EventPage from './pages/EventPage';
import LoginPage from './pages/LoginPage';
import AdminPage from './pages/AdminPage';
import AddAdmin from './pages/AdminPages/AddAdmin';
import SendEvent from './components/SendEvent';
import EditAdmin from './pages/AdminPages/EditAdmin';
import { useEffect, useState } from 'react';
import { auth } from './firebase/firebase';
import AdminEvent from './pages/AdminPages/AdminEvent';

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
          <Route path='/admin-page' Component={AdminPage}/>
          <Route path='/admin-page/add-event/:step' Component={AddAdmin}/>
          <Route path='/admin-page/:events' Component={EditAdmin}/>
          {/* <Route path='/admin-page/events/:eventId' Component={AdminEvent}/> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;