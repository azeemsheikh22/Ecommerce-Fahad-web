import './Nevbar.css';
// import logo from './Images/logo.png';

 import {Link} from 'react-router-dom';




function Nevbar(){

    return(
      <div>



        <div className='header'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          {/* <a className="navbar-brand" href="/"><img src={logo}></img></a> */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
               <Link to="/"> <a className="nav-link active">Home</a></Link>
              </li>
              <li className="nav-item">
              <Link to="/Item"><a className="nav-link" to="/">Item</a></Link>
              </li>
              <li className="nav-item">
              <Link to="/Product"><a className="nav-link" to="/">Product</a></Link>
              </li>
              <li className="nav-item">
              <Link to="/About"><a className="nav-link" to="/">About us</a></Link>
              </li>
              <li className="nav-item">
              <Link to="/Contact"><a className="nav-link" href="/">Contact</a></Link>
              </li>
              <li className="nav-item">
              <Link to="/Dashboard"><a className="nav-link" href="/">Dashboard</a></Link>
              </li>
             
            </ul>
           <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
           <li className="nav-but">
                <a className="btn btn-outline-light" href="/">Order Online</a>
              </li>
              <li className="nav-but">
                <a className="btn btn-outline-light" href="/">login</a>
              </li>

           </ul>
          </div>
        </div>
      </nav>
      </div>  
     
      

      
    </div>
    
    )
}

export default Nevbar;
