import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from "./pages/Home"
import SignUp from './pages/SignUp';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/signup' element={<SignUp />} />
      </Routes> 
    </BrowserRouter>
  )
}

export default App