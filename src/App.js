import { Routes, Route } from "react-router-dom";
import Login from './components/Login.js';
import SingUp from "./components/SingUp.js";

function App() {
  return (
    <div className="App">
      <Routes>
         <Route index element={<Login />} />
         <Route path="singup" element={<SingUp />} />
      </Routes>
    </div>
  );
}

export default App;
