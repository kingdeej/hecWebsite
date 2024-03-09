import './styles/Main.css';
import EventsPage from './pages/EventsPage';
import HomePage from './pages/HomePage';
import Nav from './components/Nav';
import {Route, BrowserRouter, Routes} from 'react-router-dom'
import Footer from './components/Footer';
import EventPage from './pages/EventPage';
import LoginPage from './pages/LoginPage';
import AdminPage from './admin/pages/AdminPage';
import AddAdmin from './admin/pages/AddAdmin';
import EditAdmin from './admin/pages/EditAdmin';
import { useEffect, useState } from 'react';

function App() {
  const [bgColor, setBgColor] = useState('#2D5873')
  const params = window.location.pathname
  useEffect(() => {
    if (params === '/') {
      setBgColor('#2D5873')
    }else{
      setBgColor('#2D5873')
    }

  }, [params])
  
  return (
    <div className="App">
      <BrowserRouter >
        <Nav background={bgColor} />
        <Routes >
          <Route path='/' Component={HomePage}/>
          <Route path='/events-page' Component={EventsPage}/>
          <Route path='/:eventId' Component={EventPage}/>
          <Route path='/login' Component={LoginPage}/>

          {/* Admn */}
          <Route path='/admin'>
            <Route index Component={AdminPage}/>
            <Route path='add-event/:step' Component={AddAdmin}/>
            <Route path=':events' Component={EditAdmin}/>
          </Route>
          <Route path='promoter/add-event/:step' Component={AddAdmin}/>
          {/* <Route path='/admin-page/events/:eventId' Component={AdminEvent}/> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;