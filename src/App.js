import { Routes, Route } from "react-router-dom";
import UserForm from "./components/UserForm.js";
import UserList from "./components/UserList.js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<UserList />} />
        <Route path="/list" element={<UserList />} />
        <Route path="/create" element={<UserForm />} />
        <Route path="/edit" element={<UserForm />} />
      </Routes>
    </div>
  );
}

export default App;
