import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddNews from './Components/AddNews';
import Category from './Components/Category';
import Location from './Components/Location';
import Navbar from './Components/Navbar';
import AdminPanel from './Pages/AdminPanel';
import LoginPage from './Pages/LoginPage';
import Main from './Pages/Main';


function App() {
  return (
   <BrowserRouter>
   <Navbar />
   <Routes>
   <Route exact path='/' element={<Main/>}/>
    
    <Route path='/loginpage' element={<LoginPage/>}/>
    <Route path='addnews' element={<AddNews />}/>
    <Route path="/admin" element={<AdminPanel/>}>
        <Route path='categories' element={<Category />}/>
        <Route path='locations' element={<Location/>}/>   
    </Route>
    
    
    
   </Routes>
   </BrowserRouter>
  );
}

export default App;
