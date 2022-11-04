import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";

import Dashboard from "./pages/Dashboard";
import AddFood from './pages/AddFood/AddFood'
import FoodList from './pages/FoodList'
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
// import AddFood from "./pages/AddFood/AddFood";
// import FoodList from "./pages/FoodList";
import {foodInputs} from './helper/formsource'
function App() {
  const { currentUser } = useContext(AuthContext)

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/admin/login" />;
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>

          <Route path="/admin">
            <Route path="/admin/login" element={<Login />}></Route>
            <Route
              index
              element={
                <RequireAuth>
                  <Dashboard />
                </RequireAuth>
              }
            />
            <Route
              path="/admin/addfood"
              element={
                <RequireAuth>
                  <AddFood foodInputs={foodInputs} />
                </RequireAuth>
              }
            />
            <Route
              path="/admin/foodlist"
              element={
                <RequireAuth>
                  <FoodList />
                </RequireAuth>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
