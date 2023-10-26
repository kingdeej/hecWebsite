import './App.css';
import EventsPage from './pages/EventsPage';
import HomePage from './pages/HomePage';
import Nav from './components/Nav';
import {Route, BrowserRouter, Router, Routes} from 'react-router-dom'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Nav background='#2D5873' />
      <BrowserRouter >
        <Routes >
          <Route exact path='/' Component={HomePage}/>
          <Route path='/eventsPage' Component={EventsPage}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;