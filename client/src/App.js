import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Overview from './pages/Overview';
import Meeting from './pages/Meeting.js'
import Social from './pages/Social';

import Notifications from './pages/Notifications.js';
import Update from './pages/Update.js';

// import { Document, Research, Thesis } from './pages/Document.js';
import Document from './pages/Document.js';
import Thesis from './pages/Thesis.js';
import Research from './pages/Research.js';
import Comments from './pages/Comments.js';
import Draft from './pages/Draft.js';
import Group from './pages/Group.js';



function App() {
  return (
    <Router>
      <Sidebar />
        <Routes>



        <Route path='/document' element={<Document />} />
        <Route path='/research' element={<Research />} />
        <Route path='/thesis' element={<Thesis />} />


        <Route path='/social' element={<Social />} />
        <Route path='/notification' element={<Notifications />} />
        <Route path='/update' element={<Update />} />
        <Route path='/group' element={<Group />} />
        <Route path='/meeting' element={<Meeting />} />
        <Route path='/draft' element={<Draft />} />
        <Route path='/comment' element={<Comments />} />
      </Routes>
    </Router>

  );
}

export default App;
// <Route path='/overview' exact component={Overview} />

// <Route path='/document'exact component={Document} />
// <Route path = '/research'exact component={Research} />
// <Route path = '/thesis'exact component={Thesis} />
