import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<div>home</div>} /> */}
        {/* <Route path="/hotels" element={<List />} /> */}
        <Route path="/hotels" element={<div>list</div>} />
        {/* <Route path="/hotels/:id" element={<Hotel />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
