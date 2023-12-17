//import logo from './logo.svg';
import './App.css';
 import {Routes,Route} from 'react-router-dom';

// import AllComponent from './Component/AllComponent';
//  import Nevbar from './Component/Nevbar';
//  import Items from "./Component/Pages/Item";
//   import Product from "./Component/Pages/Product"; 
//   import About from "./Component/Pages/About";
//  import Contact from "./Component/Pages/Contact";
//  import Dashboard from './Component/Pages/Dashboard';

// import Productlist from './Component/Dashboard/Productlist';
//  import Profile from './Component/Dashboard/Profile';
//  import Login from './Component/Dashboard/Login';
import Dnavbar from './Component/Dashboard/Dnavbar';
import ProductList from './Component/Dashboard/Productlist';
import Addproduct from './Component/Dashboard/Addproduct';
import UpdateProduct from './Component/Dashboard/UpdateProduct';
import Register from './Component/Dashboard/Register';
import Profile from './Component/Dashboard/Profile';
import Logout from './Component/Dashboard/Logout';
import Privatecomponent from './Component/Dashboard/privatecomponent';
import Login from './Component/Dashboard/Login';



 





function App() {
  return (
   
    <div className="App">
      
      
      {/* <Nevbar/> */}

      <Dnavbar/>

     <Routes> 
      <Route element={<Privatecomponent/>}>
     <Route path="/products" element={ <ProductList/> }/>
     <Route path="/add-products" element={ <Addproduct/> }/>
     <Route path="/update-products" element={ <UpdateProduct/> }/>
     <Route path="/logout" element={ <Logout/> }/> 
    <Route path="/profile" element={ <Profile/> }/>
    </Route>

     <Route path="/register" element={ <Register/> }/>
     <Route path="/login" element={ <Login/> }/>





      
    {/* <Route path="/" element={ <AllComponent/> }/> 
    <Route path="/Item" element={<Items/>}/>
     <Route path="/Product" element={<Product/>}/>
     <Route path="/About" element={<About/>}/>
     <Route path="/Contact" element={<Contact/>}/> 
     <Route path="/Dashboard" element={<Dashboard/>}/>
      */}
      </Routes>  
      
    </div>
    
  );
}

export default App;
