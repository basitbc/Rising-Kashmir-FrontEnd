import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddNews from './Components/AddNews';
import Category from './Components/Category';
import Location from './Components/Location';
import Navbar from './Components/Navbar';
import AdminPanel from './Pages/AdminPanel';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';


function App() {
  const [categoryNews, setCategoryNews] = useState("-1")
   const sendCategory=(categoryId)=>{
        return setCategoryNews(categoryId);
  }

  return (
    <BrowserRouter>
    <Navbar sendCategory={sendCategory} />
   <Routes>
   <Route exact path='/' element={<HomePage categoryNews={categoryNews}/>}/>
    
    <Route path='/loginpage' element={<LoginPage/>}/>
    <Route path='addnews' element={<AddNews  />}/>
    <Route path="/admin" element={<AdminPanel/>}>
        <Route path='categories' element={<Category />}/>
        <Route path='locations' element={<Location/>}/>   
    </Route>
    
    
    
   </Routes>
   </BrowserRouter>
  );
}

export default App;
