import React from 'react';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Home';
import Orders from './Orders';
import NotFound from './NotFound';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/orders' element={<Orders/>}/>
        <Route path='*' element={<NotFound/>}/>
       </Routes>
     </BrowserRouter>
    </div>
  );
}
export default App;
