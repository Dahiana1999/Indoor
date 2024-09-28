import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Todo from './Todo'
import Contactos from './Pages/Contactos'




function App() {

  return (
   <BrowserRouter>
    <Routes>
    <Route path="/" element={<Todo/>} />
    <Route path="/contacto" element={<Contactos/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
