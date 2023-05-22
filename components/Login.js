
import React, { useState } from "react";
import Router from "next/router";

const Login = () => {

  const  [email, setEmail] = useState("");
  const  [password, setPassword] = useState("");

  const  [account_id, setAccount_id] = useState("");
  const  [account_type, setAccount_type] = useState("");


const  sendDataToProfile = async () => {
  Router.push({
    pathname: '/Profile',
    query: { account_id: account_id, account_type: account_type },
  })
}




const  checkexist = async () => {
  try{
    const response = await fetch('https://apiccc.netlify.app/.netlify/functions/api/check-user-exists/' + email, {
      method: 'GET'
    });
    const json = await response.json();
    const isEmailExists = json["exists"];
    
      if(isEmailExists){
        return true;
      }
      else{
        alert("This email doesn't exist, please sign up first");
      }
    
  }catch(error){
    console.log(error);
  }

  }

  const login  = async () => {
    try{
     const response = await fetch('https://apiccc.netlify.app/.netlify/functions/api/login/'+email+'/'+password, {
        method: 'GET'
      });
      const json = await response.json();
      
      if(checkexist){
        if(json["success"]){
          setAccount_id(json["account_id"]);
          setAccount_type(json["account_type"]);
          

          if(account_type==="student"){
            //go to Job List page with account_id as a parameter 
            sendDataToProfile();
            console.log("student success");





          }
          else if(account_type==="admin"){
            //Smtg
          }
        }
        else{
          alert("Incorrect password");
        }


      }

    }catch(error){
      console.log(error);
    }

    
    








  };

  const checkinput= () => {
    if (email === "" || email === null) {
      alert("Please enter your email");
      return false;
    }
    else if (password === "" || password === null) {
      alert("Please enter your password");
      return false;
    }
    else if ("@aui.ma" !== email.slice(-7)) {
      alert("Please enter a valid AUI's email");
      return false;
    }
    else {
      return true;
    }
  };


      


    return (
        <div
                  className="col-lg-6"
                  style={{
                    boxSizing: "border-box",
                    maxWidth: "100%",
                    paddingRight: "calc(0 * 0.5)",
                    paddingLeft: "calc(0 * 0.5)",
                    marginTop: "0",
                    flex: "0 0 auto",
                    WebkitBoxFlex: "0",
                    flexShrink: 0,
                    width: "50%",
                    position: "relative",
                  }}
                >
                  <div
                    className="auth-content p-5 h-100 text-white card-body"
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
                      style={{ boxSizing: "border-box", width: "100%" }}
                    >
                      <div
                        className="text-center mb-4"
                        style={{
                          boxSizing: "border-box",
                          marginBottom: "1.5rem",
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
                          Welcome Back !
                        </h5>
                        <p
                          className="text-white-70"
                          style={{
                            boxSizing: "border-box",
                            marginTop: "0px",
                            marginBottom: "1rem",
                          }}
                        >
                          Sign in to continue to Campus Career Connect.
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
                            htmlFor="usernameInput"
                            style={{
                              boxSizing: "border-box",
                              display: "inline-block",
                              marginBottom: "0.5rem",
                            }}
                          >
                            AUI's Email
                          </label>
                          <input
                            id="usernameInput"
                            className="form-control"
                            type="text"
                            required
                            placeholder="Enter your AUI's email"
                            onChange={(e) => setEmail(e.target.value)}

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
                              backgroundColor: "rgba(255, 255, 255, 0.1)",
                              
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
                            placeholder="Enter your password"
                            onChange={(e) => setPassword(e.target.value)}
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
                              backgroundColor: "rgba(255, 255, 255, 0.1)",
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
                            onClick={e => {e.preventDefault(); if(checkinput()) {login()} }}
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
                            Sign In
                          </button>
                        </div>
                      </form>
                      <div
                        className="mt-4 text-center"
                        style={{
                          boxSizing: "border-box",
                          marginTop: "1.5rem",
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
                          Don't have an account ?{" "}
                          <a
                            className="fw-medium text-white text-decoration-underline"
                            href="/SignUpPage"
                            style={{
                              boxSizing: "border-box",
                              fontWeight: 500,
                              textDecoration: "underline",
                              color: "rgba(255,255,255,1)",
                            }}
                          >
                            {" "}
                            Sign Up{" "}
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>


    );

}

export default Login;
