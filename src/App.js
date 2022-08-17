import Login from "./components/Login";
import { Guard } from "./pages/Guard";
import Dashboard from "./components/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function setToken(userToken) {
  const getUserToken = JSON.stringify(userToken);

  localStorage.setItem("token", JSON.stringify(getUserToken));

  console.log("localStorage已成功暫存localStorage");
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login setToken={setToken} />}></Route>
        <Route element={<Guard token="token" routeRedirect="/user" />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
