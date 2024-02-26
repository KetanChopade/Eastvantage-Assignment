import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import UserInfo from "./components/UserInfo";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserInfo/>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
