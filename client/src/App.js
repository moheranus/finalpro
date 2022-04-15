import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Overview from './pages/Overview';
import { Meeting, MeetingOne, MeetingTwo} from './pages/Meeting';
import Team from './pages/Team';

function App() {
  return (
    <Router>
      <Sidebar />
        <Routes>
        <Route path='/overview' exact component={Overview} />
        <Route path='/meeting' exact component={Meeting} />
        <Route path='/meeting/meeting1' exact component={MeetingOne} />
        <Route path='/meeting/meeting2' exact component={MeetingTwo} />

        <Route path='/team' exact component={Team} />
      </Routes>
    </Router>

  );
}

export default App;
