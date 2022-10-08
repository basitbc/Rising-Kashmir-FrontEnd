import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddNews from './Components/AddNews';
import Category from './Components/Category';
import Location from './Components/Location';
import Navbar from './Components/Navbar';
import NavForAdmin from './Components/NavforAdmin';
import AdminPanel from './Pages/AdminPanel';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import PageNotFound from './Pages/PageNotFound';
import ShowNewsPage from './Pages/ShowNewsPage';
import CategoriesPage from './Pages/CategoriesPage';


function App() {
  // const [categoryNews, setCategoryNews] = useState("-1")
  //  const sendCategory=(categoryId)=>{
  //       return setCategoryNews(categoryId);
  // }

  // useEffect(() => {
  //   console.log(categoryNews, "Appjs");
  // }, [categoryNews])
  

  return (
    <BrowserRouter>
    
   <Routes>
   <Route exact path='/' element={
    <>
   <Navbar  />
   <HomePage />
    </>
   }/>
   <Route exact path='/news' element={
    <>
   <Navbar  />
   <ShowNewsPage />
    </>
   }/>
    <Route exact path='/category' element={
    <>
   <Navbar />
   <CategoriesPage />
    </>
   }/>
    <Route path='/loginpage' element={
    <>
    <NavForAdmin/>
    <LoginPage/>
    </>
    }/>
    <Route path='addnews' element={<AddNews  />}/>
    <Route path="/admin" element={
     <>
     <NavForAdmin/>
     <AdminPanel/>
     </>
    }/>
    <Route path='/categories' element={<Category />}/>
    <Route path='/locations' element={<Location/>}/>   
    <Route path='/*' element={<PageNotFound/>}/>
    
   </Routes>
   </BrowserRouter>
  );
}

export default App;
