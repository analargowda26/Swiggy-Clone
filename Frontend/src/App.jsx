import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import HomePage from './pages/Homepage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import './App.css';

function App() {
  const [isloggedin, setIsloggedin] = useState(false);

  return (
    <Router>
      <div className="app-nav">
        <h1>Swiggy Clone</h1>

        <nav className="app-nav">
          {!isloggedin ? (
            <>
            <div className="auth-details">
              <Link to="/login" >Login</Link>
              <Link to="/signup">Signup</Link>
              </div>
            </>
          ) : (
            <>
            <Link to="/">Home</Link>
            <button
             onClick={() => {
              setIsloggedin(false)
              }
              }>
            Logout
            </button>
            </>
          )}
        </nav>
        </div>

        <Routes>
          <Route path="/" element={isloggedin ? <HomePage />: <login/>} />
          <Route path="/login" 
          element={<Login setIsloggedin = {setIsloggedin} />} 
          />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      
    </Router>
  );
}

export default App;