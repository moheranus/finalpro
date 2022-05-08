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
import Login from './pages/Login.js';
import SignUp from './pages/SignUp.js';
import Setting from './pages/Setting.js';
import StudentSpace from './pages/StudentSpace.js';
import Proposal from './pages/Proposal.js';
import ProposalRequest from './pages/ProposalRequest.js';
import ProjectRate from './pages/ProjectRate.js';
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
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/setting' element={<Setting />} />
        <Route path = '/studentspace' element={<StudentSpace />} />
        <Route path = '/proposal' element={<Proposal />} />
        <Route path = '/ProposalRequest' element={<ProposalRequest />} />
        <Route path = '/ProjectRate' element={<ProjectRate />} />

      </Routes>
      <Footer />
    </Router>

  );
}

export default App;
