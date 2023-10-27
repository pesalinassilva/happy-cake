//import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './views/HomePage'
import ContactPage from './views/ContactPage'
import NavBar from "./components/NavBar"
import NotFound from './views/NotFound'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route 
          path='/'
          element={<HomePage />}
        />
        <Route 
          path='/contacto'
          element={<ContactPage />}
        />
        <Route 
          path='*'
          element={<NotFound />}
        />
      </Routes>
    </div>
  )
}

export default App
