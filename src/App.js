import Login from "./components/Login";
import { Guard } from "./pages/Guard";
import Dashboard from "./components/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useStateContext } from "./contexts/ContextProvider";
import DateRangePicker from "./components/DateRangePicker";

function setToken(userToken) {
  const getUserToken = JSON.stringify(userToken);

  localStorage.setItem("token", JSON.stringify(getUserToken));

  console.log("localStorage已成功暫存localStorage");
}

function App() {
  const { user } = useStateContext();
  console.log("user", user);
  return (
    <BrowserRouter>
      <Dashboard />
      <DateRangePicker />
      {/* {user?.loggedIn === false && (
        <Routes>
          <Route element={<Guard token="token" routeRedirect="/" />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/Dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      )} */}
      {/* {!user?.loggedIn && <Login setToken={setToken} />} */}
    </BrowserRouter>
  );
}

export default App;
