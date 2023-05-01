import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Landing />} />
          <Route path='/home' element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;