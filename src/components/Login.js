import React from "react";
import axios from "axios";
import { setAuthToken } from "../setAuthToken";
import { Link } from "react-router-dom";
import { useStateContext } from "./ContextProvider";

const Login = ({ setToken }) => {
  const { setUser } = useStateContext();

  const BASE_URL = "http://192.168.2.103:8081/api/admin/login";

  const loginPayload = {
    name: "super",
    password: "123",
  };

  // 點登入時獲取 /api/auth/getAllUsers 的jwt token
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(BASE_URL, loginPayload);
      //get token from response

      console.log("token", response.data.data[0].access_token);
      setToken(response.data.data[0].access_token);

      //check jwt token
      const token = localStorage.getItem("token");
      console.log("token", token);
      if (token) {
        setAuthToken(token);
        console.log("setAuthToken已完成");
      }

      // setUser({ loggedIn: true });

      // Do your stuff with the token
      // ...
    } catch (error) {
      if (error.response && error.response.status === 401) {
        console.log("Token not valid!");
        throw new Error("Error 401");
      }
    }
  };

  return (
    <>
      <section className="hero has-background-grey-light is-fullheight is-fullwidth">
        <div className="hero-body">
          <div className="container ">
            <div className="columns is-centered">
              <div className="column is-4-desktop">
                <form>
                  <div className="box">
                    <div className="field">
                      <label className="label">Email or username</label>
                      <div className="controls">
                        <input
                          className="input"
                          type="text"
                          placeholder="username"
                          // onChange={(e) => setUserName(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="field">
                      <label className="label">Password</label>
                      <div className="controls">
                        <input
                          className="input"
                          type="text"
                          placeholder="******"
                          // onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="field">
                      <Link to="dashboard">
                        <button
                          type="submit"
                          className="button is-success is-fullwidth"
                          onClick={handleSubmit}
                        >
                          Login
                        </button>
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
