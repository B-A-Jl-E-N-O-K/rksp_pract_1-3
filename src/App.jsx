import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SecListPage from './SecListPage';
import SecPage from './SecPage';
import AuthPage from './AuthPage';
import BoughtSecPage from './BoughtSecPage';

function App() {
  return (
    <div className="container">
      <Router>
        <div>
            <Routes>
                <Route path="/" element={<SecListPage />} />
                <Route exact path="/:id" element={<SecPage />} />
                <Route path="/auth" element={<AuthPage />} />
                <Route path="/boughtsec" element={<BoughtSecPage />} />
            </Routes>
        </div>
      </Router>

    </div>
    
  );
}

export default App;
