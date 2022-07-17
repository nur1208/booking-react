import { useContext } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { DarkModeContext } from "./context/darkModeContext";
import "./style/dark.scss";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route index element={<div>Working</div>} />
          <Route path="login" element={<div>login</div>} />
          <Route path="signup" element={<div>signup</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
