import React  from "react";

const LoginGraphics = ({LinkGraphics}) => {
    return (
        <div
                  className="text-center col-lg-6"
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
                    textAlign: "center",
                  }}
                >
                  <div
                    className="p-4 card-body"
                    style={{
                      boxSizing: "border-box",
                      flex: "1 1 auto",
                      WebkitBoxFlex: "1",
                      padding: "1.5rem",
                    }}
                  >
                    <a
                      href="#"
                      style={{
                        boxSizing: "border-box",
                        textDecoration: "none",
                        color: "rgb(2, 175, 116)",
                      }}
                    >
                      <img
                        className="logo-light"
                        src= "Logo.png"
                        style={{
                          boxSizing: "border-box",
                          verticalAlign: "middle",
                          display: "none",

                        }}
                      />
                      <img
                        className="logo-dark"
                        src= "Logo.png"
                         style={{
                          boxSizing: "border-box",
                          verticalAlign: "middle",
                          display: "inline-block",
                          width: "250px",

                        }}
                      />
                    </a>
                    <div
                      className="mt-5"
                      style={{ boxSizing: "border-box", marginTop: "3rem" }}
                    >
                      <img
                        className="img-fluid"
                        src={LinkGraphics}
                        style={{
                          boxSizing: "border-box",
                          verticalAlign: "middle",
                          maxWidth: "100%",
                          height: "auto",
                        }}
                      />
                    </div>
                  </div>
                </div>


    );
    }

 
    export default LoginGraphics;