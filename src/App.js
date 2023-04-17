import {TeamPage} from './pages/TeamPage'
import {MatchPage} from './pages/MatchPage'
import {HomePage} from './pages/HomePage'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
           <Route path='/teams/:teamName/matches/:year' element={<MatchPage></MatchPage>} />
           <Route path='/teams/:teamName' element={<TeamPage></TeamPage>} />
            <Route path='/' element={<HomePage></HomePage>}/>
    </Routes>

    </Router>
    </div>
  );
}

export default App;
