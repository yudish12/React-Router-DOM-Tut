import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Error from "./pages/Error";
import SingleProduct from "./pages/SingleProduct";
import Sharedlayout from "./Components/Sharedlayout";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Protectedroute from "./pages/Protectedroute";
import Sharedproduct from "./Components/Sharedproduct";
import { useState } from "react";
function App() {
  const [user, setUser] = useState(null);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sharedlayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Sharedproduct />}>
            <Route index element={<Products />} />
            <Route path=":productId" element={<SingleProduct />} />
          </Route>
          <Route path="/login" element={<Login setUser={setUser} />} />

          <Route
            path="/dashboard"
            element={
              <Protectedroute user={user}>
                <Dashboard user={user} />
              </Protectedroute>
            }
          />

          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
