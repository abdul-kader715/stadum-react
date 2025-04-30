import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './HomePage/HomePage'
function App() {

   return (
      <BrowserRouter>
         <Routes>
            <Route element={<HomePage />} path='/' exact />
            <Route element={<HomePage />} path="home" />

         </Routes>

      </BrowserRouter>
   )
}

export default App