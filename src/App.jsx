import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './views/HomePage'
import ContactPage from './views/ContactPage'
import Navigation from "./components/Navigation"
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route 
          path='/'
          element={<HomePage />}
        />
        <Route 
          path='/contacto'
          element={<ContactPage />}
        />
      </Routes>
    </div>
  )
}

export default App
