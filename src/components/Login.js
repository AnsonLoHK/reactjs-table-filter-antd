import React from "react";

const Login = () => {
  return (
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
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
