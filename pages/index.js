import React from "react";

export default function Component() {
  const handleclick = () => {
    console.log("clicked");
  };
  return (
    <>
      <section
        id="home"
        className="bg-home2"
        style={{
          boxSizing: "border-box",
          padding: "198px 0px 140px",
          backgroundColor: "rgba(2, 175, 116, 0.1)",
          overflowX: "clip",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          position: "relative",
          backgroundSize: "cover",
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
            className="align-items-center row"
            style={{
              boxSizing: "border-box",
              display: "flex",
              flexWrap: "wrap",
              marginTop: "calc(0 * -1)",
              marginRight: "calc(20px * -0.5)",
              marginLeft: "calc(20px * -0.5)",
              WebkitBoxAlign: "center",
              alignItems: "center",
            }}
          >
            <div
              className="col-lg-7"
              style={{
                boxSizing: "border-box",
                maxWidth: "100%",
                paddingRight: "calc(20px * 0.5)",
                paddingLeft: "calc(20px * 0.5)",
                marginTop: "0",
                flex: "0 0 auto",
                WebkitBoxFlex: "0",
                flexShrink: 0,
                width: "58.3333%",
                position: "relative",
              }}
            >
              <img src="assets/images/job.png" alt="" />
              <div
                className="mb-4 pb-3 me-lg-5"
                style={{
                  boxSizing: "border-box",
                  marginBottom: "1.5rem",
                  paddingBottom: "1rem",
                  marginRight: "3rem",
                }}
              >
                
                <h1
                  className="display-5 fw-semibold mb-3"
                  style={{
                    boxSizing: "border-box",
                    marginTop: "0px",
                    lineHeight: 1.2,
                    fontSize: "3rem",
                    fontWeight: 600,
                    marginBottom: "1rem",
                  }}
                >
                  Find your dream jobs with{" "}
                  <span
                    className="text-primary fw-bold"
                    style={{
                      boxSizing: "border-box",
                      fontWeight: 700,
                      color: "rgba(2,175,116,1)",
                    }}
                  >
                    Campus Career Connect
                  </span>
                </h1>
                <p
                  className="lead text-muted mb-0"
                  style={{
                    boxSizing: "border-box",
                    marginTop: "0px",
                    fontSize: "1.17188rem",
                    fontWeight: 300,
                    marginBottom: "0px",
                    color: "rgb(116, 120, 141)",
                  }}
                >
                  Find jobs, create trackable resumes and enrich your
                  applications.Carefully crafted after analyzing the needs of
                  different industries. Done by AUI for AUIers.
                </p>
              </div>
              <form action="#" style={{ boxSizing: "border-box" }}>
                <div
                  className="registration-form"
                  style={{ boxSizing: "border-box", position: "relative" }}
                >
                  
                  <div
                    className="row"
                    style={{
                      boxSizing: "border-box",
                      marginRight: "-10px",
                      marginLeft: "-10px",
                    }}
                  >
                    {/* two buttons  Are you a student or an AUI admin? */}
                    <div
                      className="col-lg-6"
                      style={{
                        boxSizing: "border-box",
                        paddingRight: "calc(10px * 0.5)",
                        paddingLeft: "calc(10px * 0.5)",
                        flex: "0 0 auto",
                        WebkitBoxFlex: "0",
                        flexShrink: 0,
                        width: "50%",
                        position: "relative",
                      }}
                    >
                      <div

                        className="mb-3"
                        style={{
                          boxSizing: "border-box",
                          marginBottom: "1rem",
                        }}
                      >
                        <a
                          href="/LoginPage"
                          className="btn btn-primary w-100"
                          style={{
                            boxSizing: "border-box",
                            display: "inline-block",
                            fontWeight: 600,
                            textAlign: "center",
                            whiteSpace: "nowrap",
                            verticalAlign: "middle",
                            userSelect: "none",
                            border: "1px solid transparent",
                            padding: "0.375rem 0.75rem",
                            fontSize: "1rem",
                            lineHeight: 1.5,
                            borderRadius: "0.25rem",
                            transition:
                              "color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out",
                            color: "#fff",
                            backgroundColor: "#02af74",
                            borderColor: "#02af74",
                          }}
                        >
                          Student
                        </a>
                      
                      </div>
                      </div>
                      <div


                        className="col-lg-6"
                        style={{
                          boxSizing: "border-box",
                          paddingRight: "calc(10px * 0.5)",
                          paddingLeft: "calc(10px * 0.5)",
                          flex: "0 0 auto",
                          WebkitBoxFlex: "0",
                          flexShrink: 0,
                          width: "50%",
                          position: "relative",
                        }}
                      >
                        <div
                          className="mb-3"
                          style={{
                            boxSizing: "border-box",
                            marginBottom: "1rem",
                          }}
                          onClick={() => {
                            event.preventDefault();
                            alert("Admin is not available yet");
                          
                          }}

                        >
                          <a
                            href="#"
                            className="btn btn-primary w-100"
                            style={{
                              boxSizing: "border-box",
                              display: "inline-block",
                              fontWeight: 600,
                              textAlign: "center",
                              whiteSpace: "nowrap",
                              verticalAlign: "middle",
                              userSelect: "none",
                              border: "1px solid transparent",
                              padding: "0.375rem 0.75rem",
                              fontSize: "1rem",
                              lineHeight: 1.5,
                              borderRadius: "0.25rem",
                              transition:
                                "color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out",
                              color: "#fff",
                              backgroundColor: "#02af74",
                              borderColor: "#02af74",

                              

                            }}
                          >
                            AUI Admin
                          </a>

                          </div>
                          </div>
                          </div>
                          
                          

                          </div>









                    


                

              </form>
            </div>
            <div
              className="col-lg-5"
              style={{
                boxSizing: "border-box",
                maxWidth: "100%",
                paddingRight: "calc(20px * 0.5)",
                paddingLeft: "calc(20px * 0.5)",
                marginTop: "0",
                flex: "0 0 auto",
                WebkitBoxFlex: "0",
                flexShrink: 0,
                width: "41.6667%",
                position: "relative",
              }}
            >
              <div
                className="mt-5 mt-md-0"
                style={{ boxSizing: "border-box", marginTop: "0px" }}
              >
                <img
                  className="home-img"
                  src="https://jobvia.react-light.pichforest.com/static/media/process-02.d3e6167e.png"
                  style={{ boxSizing: "border-box", verticalAlign: "middle" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
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
