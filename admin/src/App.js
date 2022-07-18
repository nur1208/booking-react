import { useContext } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import { DarkModeContext } from "./context/darkModeContext";
import Login from "./pages/login/Login";
import "./style/dark.scss";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (!user) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route
              index
              element={
                <ProtectedRoute>
                  <div>home page</div>
                </ProtectedRoute>
              }
            />
            <Route path="login" element={<Login />} />
          </Route>
          <Route path="signup" element={<div>signup</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
