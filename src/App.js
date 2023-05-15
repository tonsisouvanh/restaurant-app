import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Admin/Login";

import Dashboard from "./pages/Admin/Dashboard";
import AddFood from "./pages/Admin/AddFood/AddFood";
import FoodList from "./pages/Admin/FoodList";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { foodInputs } from "./helper/formsource";
import SingleFood from "./pages/Admin/SingleFood/SingleFood";

function App() {
  const { currentUser } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/admin/login" />;
  };

  const CheckIfLogin = ({ children }) => {
    return currentUser ? <Navigate to="/admin" /> : children;
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/admin">
            <Route
              path="/admin/login"
              element={
                <CheckIfLogin>
                  <Login />
                </CheckIfLogin>
              }
            ></Route>
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
            <Route
              path="/admin/food/:id"
              element={
                <RequireAuth>
                  <SingleFood />
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
