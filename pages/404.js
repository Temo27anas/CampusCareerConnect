import React from "react";

export default function Component() {
  return (
    <>
      <div id="root" style={{ boxSizing: "border-box" }}>
        <div style={{ boxSizing: "border-box" }}>
          <div className="main-content" style={{ boxSizing: "border-box" }}>
            <div className="page-content" style={{ boxSizing: "border-box" }}>
              <section
                className="bg-error bg-auth text-dark"
                style={{
                  boxSizing: "border-box",
                  padding: "40px 0px",
                  backgroundColor: "rgba(2, 175, 116, 0.1)",
                  WebkitBoxAlign: "center",
                  alignItems: "center",
                  display: "flex",
                  minHeight: "100vh",
                  color: "rgba(49,64,71,1)",
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
                        className="text-center"
                        style={{ boxSizing: "border-box", textAlign: "center" }}
                      >
                        <img
                          className="img-fluid"
                          src="404.png"
                          style={{
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            height: "auto",
                          }}
                        />
                        <div
                          className="mt-5"
                          style={{ boxSizing: "border-box", marginTop: "3rem" }}
                        >
                          <h4
                            className="text-uppercase mt-3"
                            style={{
                              boxSizing: "border-box",
                              marginBottom: "0.5rem",
                              fontWeight: 600,
                              lineHeight: 1.2,
                              fontSize: "1.40625rem",
                              marginTop: "1rem",
                              textTransform: "uppercase",
                            }}
                          >
                            Sorry, page not found
                          </h4>
                          <p
                            className="text-muted"
                            style={{
                              boxSizing: "border-box",
                              marginTop: "0px",
                              marginBottom: "1rem",
                              color: "rgb(116, 120, 141)",
                            }}
                          >
                            The page you are looking for was moved, removed, or does not exist. 
                          </p>
                          <div
                            className="mt-4"
                            style={{
                              boxSizing: "border-box",
                              marginTop: "1.5rem",
                            }}
                          >
                            <a
                              className="btn btn-primary waves-effect waves-light"
                              href="/"
                              style={{
                                boxSizing: "border-box",
                                textDecoration: "none",
                                border: "1px solid transparent",
                                padding: "0.625rem 1.25rem",
                                borderRadius: "0.25rem",
                                transition:
                                  "color 0.15s ease-in-out 0s, background-color 0.15s ease-in-out 0s, border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s, -webkit-box-shadow 0.15s ease-in-out 0s",
                                display: "inline-block",
                                fontWeight: 500,
                                lineHeight: 1.5,
                                textAlign: "center",
                                verticalAlign: "middle",
                                cursor: "pointer",
                                userSelect: "none",
                                fontSize: "0.9375rem",
                                borderColor: "rgb(2, 175, 116)",
                                color: "rgb(255, 255, 255)",
                                backgroundColor: "rgb(2, 175, 116)",
                              }}
                            >
                              <i
                                className="mdi mdi-home"
                                style={{ boxSizing: "border-box" }}
                              />{" "}
                              Back to Home
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
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
  font-family: Inter,sans-serif;
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
