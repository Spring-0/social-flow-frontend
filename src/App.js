import {BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'
import AccountsPage from './pages/AccountsPage'


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route index element={<LandingPage />} />
                    <Route path='/home' element={<LandingPage />} />
                    <Route path='/register' element={<RegisterPage />} />
                    <Route path='/login' element={<LoginPage />} />
                    <Route path='/dashboard' element={<DashboardPage />} />
                    <Route path='accounts' element={<AccountsPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;