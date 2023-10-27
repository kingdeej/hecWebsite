import './App.css';
import EventsPage from './pages/EventsPage';
import HomePage from './pages/HomePage';
import Nav from './components/Nav';
import {Route, BrowserRouter, Routes, Params} from 'react-router-dom'
import Footer from './components/Footer';
import EventPage from './pages/EventPage';

function App() {
  return (
    <div className="App">
      <Nav background='#2D5873' />
      <BrowserRouter >
        <Routes >
          <Route exact path='/' Component={HomePage}/>
          <Route path='/eventsPage' Component={EventsPage}/>
          <Route path='/eventId/:eventId' Component={EventPage}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;