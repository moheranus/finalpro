import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Social from './pages/Social';

import Notifications from './pages/Notifications.js';
import Update from './pages/Update.js';


import Document from './pages/Document.js';
import Thesis from './pages/Thesis.js';
import Research from './pages/Research.js';
import Comments from './pages/Comments.js';
import Draft from './pages/Draft.js';
import Meeting from './pages/Meeting.js';
import Group from './pages/Group.js';
import Footer from './pages/Footer.js';



function App() {
  return (
    <Router>
      <Sidebar />
        <Routes>


        <Route path='/social' element={<Social />} />
        <Route path='/notification' element={<Notifications />} />
        <Route path='/' element={<Document />} />
        <Route path='/update' element={<Update />} />
        <Route path='/draft' element={<Draft />} />
        <Route path='/meeting' element={<Meeting />} />
        <Route path='/research' element={<Research />} />
        <Route path='/thesis' element={<Thesis />} />
        <Route path='/group' element={<Group />} />
        <Route path='/comment' element={<Comments />} />
      </Routes>
    </Router>

  );
}

export default App;
