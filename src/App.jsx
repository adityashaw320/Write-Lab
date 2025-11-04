import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import authService from "./appwrite/auth";
import { login, logout } from "./feature/auth";
import { Footer, Header } from "./Components";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login(userData));
        } else {
          dispatch(logout());
        }
      })
      .catch((err) => {
        console.log("Error fetching user:", err);
        dispatch(logout());
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <div className="min-h-screen w-full flex flex-wrap content-between bg-gray-800">
      <div className="w-full h-full block">
        <Header />
        {/* <Outlet/> */}
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
