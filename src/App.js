import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddNews from './Components/AddNews';
import Category from './Components/Category';
import Location from './Components/Location';
import Navbar from './Components/Navbar';
import Main from './Pages/Main';


function App() {
  return (
   <BrowserRouter>
   <Navbar />
   <Routes>
   <Route exact path='/' element={<Main/>}/>
    <Route path='/locations' element={<Location/>}/>
    <Route path='/categories' element={<Category />}/>
    <Route path='/addnews' element={<AddNews />}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
