// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import AddGuestPage from "./pages/AddGuestPage/AddGuestPage";
import DisplayGuestPage from "./pages/DisplayGuestPage/DisplayGuestPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import{ toast } from 'react-toastify';



function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/addguest"
          element={
            <PrivateRoute>
              <AddGuestPage />
            </PrivateRoute>
          }
          />
        <Route
          path="/displayguest"
          element={
            <PrivateRoute>
             <DisplayGuestPage />
            </PrivateRoute>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
