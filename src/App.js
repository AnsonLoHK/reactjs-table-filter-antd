// import Login from "./components/Login";
// import { Guard } from "./pages/Guard";
import Dashboard from "./components/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CrudExample from "./components/CrudExample";
import { useStateContext } from "./contexts/ContextProvider";
import TableSearch from "./components/TableSearch";
import DateTableSearch from "./components/DateTableSearch";

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
      <h1>主題1</h1>
      <CrudExample />
      <hr />

      <h1>主題2</h1>
      <Dashboard />
      <hr />

      <h1>主題3</h1>
      <DateTableSearch />
      <hr />

      <h1>主題4</h1>
      <TableSearch />

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
