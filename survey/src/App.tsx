import React from 'react'
import {Routes,Route} from 'react-router-dom';
import RegisterPage from './components/Auth/Register/Register.page';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </>
  )
}

export default App