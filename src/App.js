import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route index element={<Landing />} />
                    <Route path='/home' element={<Landing />} />
                    <Route path='/register' element={<RegisterPage />} />
                    <Route path='/login' element={<LoginPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;