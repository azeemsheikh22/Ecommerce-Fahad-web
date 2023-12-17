import React from "react";
import { Link, useEffect, useNavigate } from "react-router-dom";

const Dnavbar = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/register");
  };

  return (
    <div>
      <div className="header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            {/* <a className="navbar-brand" href="/"><img src={logo}></img></a> */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
             {auth ? <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/products">
                    
                    <a className="nav-link active">Product</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/add-products">
                    <a className="nav-link" to="/">
                      Add Product
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/update-products">
                    <a className="nav-link" to="/">
                      Update Product
                    </a>
                  </Link>
                  <li className="nav-item">
                <Link to="/profile">
                  <a className="nav-link" href="/">
                    Profile
                  </a>
                </Link>
                
              </li>
                </li>
                 <li className="nav-item">
                 <Link onClick={logout} to="/register">
                 <a className="nav-link" href="/">
                   Logout
                 </a>
               </Link>
               </li>
               
             
                {/* <li className="nav-but">
                <a className="btn btn-outline-light" href="/">login</a>
              </li>
              */}
              </ul>
            
              :
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0"><li>
                 <Link to="/register">
                      <a className="nav-link" to="/">
                        Registor
                      </a>
                    </Link>
                    </li>
                    
               <li> <Link to="/login">
                    <a className="nav-link" href="/">
                      Login
                    </a>
                  </Link></li>
                
              </ul>
                   }
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Dnavbar;
