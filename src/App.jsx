import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Components from "./page/Components";
import Home from "./page/Home";
import Animation from "./Component/Animation";
import Calculator from "./Component/Calculator";
import AppLayout from "./layouts/AppLayout";
import ForwardToHome from "./page/ForwardToHome";
import Todo from "./page/Todo";
import ProDuct from "./page/ProDuct";
import Carts from "./page/Carts";
import Login from "./page/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import { fetchProducts } from "./data/products";

const App = () => {

  const [token, setToken] = useState('')
  const [role , setRole] = useState('')

  const [products, setProducts] = useState([])
  const [carts, setCarts] = useState([])

  useEffect(() => setProducts(fetchProducts()), [])

  useEffect(() => console.log(products), [products])


  if (token === '') {
    return (<Login setToken={setToken} setRole={setRole} />)
  } else {
    return (
      <BrowserRouter basename="/CSI205/">
        <Routes>
          <Route element={<AppLayout products={products} carts={carts} setToken={setToken}  />}>
            <Route path="/Home" element={<Home />} />
            <Route path="/Components" element={<Components />} />
            <Route path="/Animation" element={<Animation />} />
            <Route path="/Calculator" element={<Calculator />} />
            <Route path="/*" element={<ForwardToHome />} />
            <Route path="/Todo" element={<Todo />} />
            <Route
              path="/Product"
              element={<ProDuct
                products={products}
                carts={carts}
                setCarts={setCarts}
              />
              }
            />
            <Route
              path="/Carts"
              element={<Carts
                carts={carts}
                setCarts={setCarts}
              />
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
};
export default App;
