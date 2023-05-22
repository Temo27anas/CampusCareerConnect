import React from "react";
import Login from "../components/Login";
import LoginGraphics from "../components/LoginGraphics"



const LoginPage = () => {
  return (
    <>
      
        <div style={{ boxSizing: "border-box" }}>
          <div className="main-content" style={{ boxSizing: "border-box" }}>
            <div className="page-content" style={{ boxSizing: "border-box" }}>
              <section
                className="bg-auth"
                style={{
                  boxSizing: "border-box",
                  padding: "40px 0px",
                  backgroundColor: "rgba(2, 175, 116, 0.1)",
                  WebkitBoxAlign: "center",
                  alignItems: "center",
                  display: "flex",
                  minHeight: "100vh",
                }}
              >
                <div
                  className="container"
                  style={{
                    boxSizing: "border-box",
                    width: "100%",
                    paddingRight: "var(--bs-gutter-x,10px)",
                    paddingLeft: "var(--bs-gutter-x,10px)",
                    marginRight: "auto",
                    marginLeft: "auto",
                    maxWidth: "1140px",
                  }}
                >
                  <div
                    className="justify-content-center row"
                    style={{
                      boxSizing: "border-box",
                      display: "flex",
                      flexWrap: "wrap",
                      marginTop: "calc(0 * -1)",
                      marginRight: "calc(20px * -0.5)",
                      marginLeft: "calc(20px * -0.5)",
                      WebkitBoxPack: "center",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      className="col-lg-12 col-xl-10"
                      style={{
                        boxSizing: "border-box",
                        maxWidth: "100%",
                        paddingRight: "calc(20px * 0.5)",
                        paddingLeft: "calc(20px * 0.5)",
                        marginTop: "0",
                        flex: "0 0 auto",
                        WebkitBoxFlex: "0",
                        flexShrink: 0,
                        width: "83.3333%",
                        position: "relative",
                      }}
                    >
                      <div
                        className="auth-box card"
                        style={{
                          boxSizing: "border-box",
                          position: "relative",
                          display: "flex",
                          WebkitBoxOrient: "vertical",
                          WebkitBoxDirection: "normal",
                          flexDirection: "column",
                          minWidth: "0px",
                          overflowWrap: "break-word",
                          backgroundColor: "rgb(255, 255, 255)",
                          backgroundClip: "border-box",
                          border: "none",
                          borderRadius: "10px",
                          overflow: "hidden",
                          boxShadow: "rgba(49, 64, 71, 0.1) 0px 5px 6px",
                        }}
                      >
                        <div
                          className="g-0 row"
                          style={{
                            boxSizing: "border-box",
                            display: "flex",
                            flexWrap: "wrap",
                            marginTop: "calc(0 * -1)",
                            marginRight: "calc(0 * -0.5)",
                            marginLeft: "calc(0 * -0.5)",
                          }}
                        >
                       <LoginGraphics LinkGraphics={"https://jobvia.react-light.pichforest.com/static/media/sign-in.39c480bb.png"} />   
                        <Login/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      
      <style
        dangerouslySetInnerHTML={{
          __html: `
html {
  box-sizing: border-box;
  scroll-behavior: smooth;
}

body {
  box-sizing: border-box;
  margin: 0px;
  font-family: popins;
  font-size: 0.9375rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  text-align: var(--bs-body-text-align);
  background-color: #ffffff;
  text-size-adjust: 100%;
  -webkit-tap-highlight-color: transparent;
}
`,
        }}
      />
    </>
    );
    }

export default LoginPage;