import react from "react";
import { useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setConfirmPassword] = useState("");

  const checkInputs = () => {
    if (email === "" || email === null) {
      alert("Please enter your email");
      return false;
    }
    else if (password === "" || password === null) {
      alert("Please enter your password");
      return false;
    }
    else if (password.length < 8) {
      alert("Password must be at least 8 characters");
      return false;
    }

    else if (passwordConfirm === "" || passwordConfirm === null) {
      alert("Please confirm your password");
      return false;
    }
    else if ("@aui.ma" !== email.slice(-7)) {
      alert("Please enter a valid AUI's email");
      return false;
    }

    else if (password !== passwordConfirm) {
      alert("Passwords do not match");
      return false;
    }

    else {
      return true;
    }
  };

  const register = () => {
    
    console.log("email: ", email);
    console.log("password: ", password);

    // redirect user to the Login page
    window.location.href = "/LoginPage";




  };

  

    return (
        <div
                            className="col-lg-6"
                            style={{
                              boxSizing: "border-box",
                              maxWidth: "100%",
                              paddingRight: "calc(20px * 0.5)",
                              paddingLeft: "calc(20px * 0.5)",
                              marginTop: "0",
                              flex: "0 0 auto",
                              WebkitBoxFlex: "0",
                              flexShrink: 0,
                              width: "50%",
                              position: "relative",
                            }}
                          >
                            <div
                              className="auth-content p-5 text-white card-body"
                              style={{
                                boxSizing: "border-box",
                                flex: "1 1 auto",
                                WebkitBoxFlex: "1",
                                backgroundColor: "#1a5632",
                                display: "flex",
                                WebkitBoxOrient: "vertical",
                                WebkitBoxDirection: "normal",
                                flexDirection: "column",
                                WebkitBoxAlign: "center",
                                alignItems: "center",
                                WebkitBoxPack: "center",
                                justifyContent: "center",
                                height: "100%",
                                padding: "3rem",
                                color: "rgba(255,255,255,1)",
                              }}
                            >
                              <div
                                className="w-100"
                                style={{
                                  boxSizing: "border-box",
                                  width: "100%",
                                }}
                              >
                                <div
                                  className="text-center"
                                  style={{
                                    boxSizing: "border-box",
                                    textAlign: "center",
                                  }}
                                >
                                  <h5
                                    style={{
                                      boxSizing: "border-box",
                                      marginTop: "0px",
                                      marginBottom: "0.5rem",
                                      fontWeight: 600,
                                      lineHeight: 1.2,
                                      fontSize: "1.17188rem",
                                    }}
                                  >
                                    Let's Get Started
                                  </h5>
                                  <p
                                    className="text-white-70"
                                    style={{
                                      boxSizing: "border-box",
                                      marginTop: "0px",
                                      marginBottom: "1rem",
                                    }}
                                  >
                                    Sign Up and get access to all the features
                                    of Campus Career Connect
                                  </p>
                                </div>
                                <form
                                  className="auth-form"
                                  action="/"
                                  style={{ boxSizing: "border-box" }}
                                >
                                  <div
                                    className="mb-3"
                                    style={{
                                      boxSizing: "border-box",
                                      marginBottom: "1rem",
                                    }}
                                  >
                                    <label
                                      className="form-label"
                                      htmlFor="emailInput"
                                      style={{
                                        boxSizing: "border-box",
                                        display: "inline-block",
                                        marginBottom: "0.5rem",
                                      }}
                                    >
                                      AUI's Email
                                    </label>
                                    <input
                                      id="emailInput"
                                      className="form-control"
                                      type="text"
                                      onChange={(e) => setEmail(e.target.value)}
                                      required
                                      placeholder="Enter your AUI's email"
                                      style={{
                                        boxSizing: "border-box",
                                        margin: "0px",
                                        fontFamily: "inherit",
                                        border: "1px solid rgb(226, 229, 232)",
                                        borderRadius: "0.25rem",
                                        transition:
                                          "border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s, -webkit-box-shadow 0.15s ease-in-out 0s",
                                        display: "block",
                                        width: "100%",
                                        lineHeight: 1.5,
                                        backgroundClip: "padding-box",
                                        appearance: "none",
                                        padding: "10px",
                                        fontSize: "14px",
                                        fontWeight: 500,
                                        borderColor: "rgba(255, 255, 255, 0.1)",
                                        color: "rgb(255, 255, 255)",
                                        backgroundColor:
                                          "rgba(255, 255, 255, 0.1)",
                                      }}
                                    />
                                  </div>
                                  <div
                                    className="mb-3"
                                    style={{
                                      boxSizing: "border-box",
                                      marginBottom: "1rem",
                                    }}
                                  >
                                    <label
                                      className="form-label"
                                      htmlFor="passwordInput"
                                      style={{
                                        boxSizing: "border-box",
                                        display: "inline-block",
                                        marginBottom: "0.5rem",
                                      }}
                                    >
                                      Password
                                    </label>
                                    <input
                                      id="passwordInput"
                                      className="form-control"
                                      type="password"
                                      required
                                      onChange={(e) => setPassword(e.target.value)}
                                      placeholder="Enter your password"
                                      style={{
                                        boxSizing: "border-box",
                                        margin: "0px",
                                        fontFamily: "inherit",
                                        border: "1px solid rgb(226, 229, 232)",
                                        borderRadius: "0.25rem",
                                        transition:
                                          "border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s, -webkit-box-shadow 0.15s ease-in-out 0s",
                                        display: "block",
                                        width: "100%",
                                        lineHeight: 1.5,
                                        backgroundClip: "padding-box",
                                        appearance: "none",
                                        padding: "10px",
                                        fontSize: "14px",
                                        fontWeight: 500,
                                        borderColor: "rgba(255, 255, 255, 0.1)",
                                        color: "rgb(255, 255, 255)",
                                        backgroundColor:
                                          "rgba(255, 255, 255, 0.1)",
                                      }}
                                      
                                    />
                                  </div>
                                  <div
                                    className="mb-3"
                                    style={{
                                      boxSizing: "border-box",
                                      marginBottom: "1rem",
                                    }}
                                  >
                                    <label
                                      className="form-label"
                                      htmlFor="emailInput"
                                      style={{
                                        boxSizing: "border-box",
                                        display: "inline-block",
                                        marginBottom: "0.5rem",
                                      }}
                                    >
                                      Confirm Password
                                    </label>
                                    <input
                                      id="passwordInput"
                                      className="form-control"
                                      type="password"
                                      required
                                      placeholder="Enter your password"
                                      onChange={(e) => setConfirmPassword(e.target.value)}
                                      style={{
                                        boxSizing: "border-box",
                                        margin: "0px",
                                        fontFamily: "inherit",
                                        border: "1px solid rgb(226, 229, 232)",
                                        borderRadius: "0.25rem",
                                        transition:
                                          "border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s, -webkit-box-shadow 0.15s ease-in-out 0s",
                                        display: "block",
                                        width: "100%",
                                        lineHeight: 1.5,
                                        backgroundClip: "padding-box",
                                        appearance: "none",
                                        padding: "10px",
                                        fontSize: "14px",
                                        fontWeight: 500,
                                        borderColor: "rgba(255, 255, 255, 0.1)",
                                        color: "rgb(255, 255, 255)",
                                        backgroundColor:
                                          "rgba(255, 255, 255, 0.1)",
                                      }}
                                    />
                                  </div>
                                  <div
                                    className="mb-4"
                                    style={{
                                      boxSizing: "border-box",
                                      marginBottom: "1.5rem",
                                    }}
                                  >
                                   
                                  </div>
                                  <div
                                    className="text-center"
                                    style={{
                                      boxSizing: "border-box",
                                      textAlign: "center",
                                    }}
                                  >
                                    <button
                                      className="btn btn-white btn-hover w-100"
                                      type="submit"
                                      onClick={e => {e.preventDefault(); if(checkInputs()) {register()}}}
                                      style={{
                                        boxSizing: "border-box",
                                        margin: "0px",
                                        fontFamily: "inherit",
                                        textTransform: "none",
                                        appearance: "button",
                                        border: "1px solid transparent",
                                        padding: "0.625rem 1.25rem",
                                        borderRadius: "0.25rem",
                                        display: "inline-block",
                                        fontWeight: 500,
                                        lineHeight: 1.5,
                                        textAlign: "center",
                                        verticalAlign: "middle",
                                        userSelect: "none",
                                        fontSize: "0.9375rem",
                                        borderColor: "rgb(255, 255, 255)",
                                        color: "rgb(0, 0, 0)",
                                        backgroundColor: "rgb(255, 255, 255)",
                                        transition: "all 0.5s ease 0s",
                                        cursor: "pointer",
                                        width: "100%",
                                      }}
                                    >
                                      Sign Up
                                    </button>
                                  </div>
                                </form>
                                <div
                                  className="mt-3 text-center"
                                  style={{
                                    boxSizing: "border-box",
                                    marginTop: "1rem",
                                    textAlign: "center",
                                  }}
                                >
                                  <p
                                    className="mb-0"
                                    style={{
                                      boxSizing: "border-box",
                                      marginTop: "0px",
                                      marginBottom: "0px",
                                    }}
                                  >
                                    Already a member ?{" "}
                                    <a
                                      className="fw-medium text-white text-decoration-underline"
                                      href="/LoginPage"
                                      style={{
                                        boxSizing: "border-box",
                                        fontWeight: 500,
                                        textDecoration: "underline",
                                        color: "rgba(255,255,255,1)",
                                      }}
                                    >
                                      {" "}
                                      Login{" "}
                                    </a>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>

    );
    }
    

    export default SignUp;

