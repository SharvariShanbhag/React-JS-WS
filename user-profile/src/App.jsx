import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserList from './components/UserList';
import UserDetails from './components/UserDetails';
import './styles.css';

function App() {
    return (
        <Router>
            <div className="container">
                <UserList />
                <div className="content">
                    <Routes>
                        <Route path="/" element={<p>Select a user to see details</p>} />
                        <Route path="/user/:id" element={<UserDetails />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
 