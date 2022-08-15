import React from "react";
import axios from "axios";
const Login = () => {
  const BASE_URL = "http://192.168.2.103:8081/api/auth/getAllUsers";

  const config = {
    headers: {
      "Content-type": "multipart/form-data",
      withCredentials: true,
      Accept: "application/json",
    },
  };

  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTkyLjE2OC4yLjEwMzo4MDgxL2FwaS9sb2dpbiIsImlhdCI6MTY2MDU1OTA3OCwiZXhwIjoxNjYwNTYyNjc4LCJuYmYiOjE2NjA1NTkwNzgsImp0aSI6IkNqZUdVRVpZMHA1Z1NJWUYiLCJzdWIiOiIxIiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.HazcYVT-7yXWn2RfZ08dp56HV48e33GvwqkqomccNzo";

  // 點登入時獲取 /api/auth/getAllUsers 的jwt token
  const getToken = async () => {
    try {
      if (token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      } else delete axios.defaults.headers.common["Authorization"];

      const responseData = await axios.post(BASE_URL, config);

      console.log(responseData);
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
                        />
                      </div>
                    </div>

                    <div className="field">
                      <button className="button is-success is-fullwidth">
                        Login
                      </button>
                      <button onClick={getToken}>獲取後端token</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <button onClick={getToken}>獲取後端token</button>
    </>
  );
};

export default Login;
