import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const AppNavbar = ({ products, carts , setToken }) => {
  return (
    <div className="nav-container d-flex justify-content-center gap-3 my-3">
      <Link to="/Home">
        <Button variant="primary">Home</Button>
      </Link>

      <Link to="/Calculator">
        <Button variant="primary">Calculator</Button>
      </Link>

      <Link to="/Animation">
        <Button variant="primary">Animation</Button>
      </Link>

      <Link to="/Components">
        <Button variant="primary">Components</Button>
      </Link>

      <Link to="/Todo">
        <Button variant="primary">Todo</Button>
      </Link>

      <Link to="/Product">
        <Button variant="primary">Product ({products.length})</Button>
      </Link>

      <Link to="/Carts">
        <Button 
        variant="primary"
        className="position-relative">
          Carts
          {carts.length > 0 && (
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {carts.length < 10 ? carts.length : '9+'}
              <span className="visually-hidden">unread messages</span>
            </span>
          )}
        </Button>
      </Link>


      <button className="btn btn-outline-danger"
      style={{marginLeft: '1rem'}}
      onClick={()=> {setToken ('')}}
       >
        Logout
       </button>
    </div>
  );
};

export default AppNavbar;
