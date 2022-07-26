// General Imports
import { Routes, Route } from "react-router-dom";


// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import AddGuestPage from "./pages/AddGuestPage/AddGuestPage";
import DisplayGuestPage from "./pages/DisplayGuestPage/DisplayGuestPage";
import SearchForGuestPage from "./pages/SearchForGuestPage/SearchForGuestPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import { toast } from "react-toastify";
import SecondTimeGuestPage from "./pages/SecondTImeGuestPage/SecondTImeGuestPage";
import WelcomePage from "./pages/WelcomePage/WelcomePage";


// async function getNewGuest() {
//   try {
//     let response = await axios.get(
//       "http://127.0.0.1:8000/api/guests/date/2022-07-22/",
//       formData,
//       {
//         headers: {
//           Authorization: "Bearer " + token,
//         },
//       }
//     )
//   }
// }

function App() {
  return (
    <div>

      <Navbar />
      <Routes>
        
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        
        <Route
          path="/welcome"
          element={
            <PrivateRoute>
              <WelcomePage />
            </PrivateRoute>
          }
        />

        <Route
          path="/addguest"
          element={
            <PrivateRoute>
              <AddGuestPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/secondguest"
          element={
            <PrivateRoute>
              <SecondTimeGuestPage />
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
        <Route
          path="/searchguest"
          element={
            <PrivateRoute>
              <SearchForGuestPage />
            </PrivateRoute>
          }
        />
      </Routes>
      <Footer />
    </div>

    
    
  );
}

export default App;
