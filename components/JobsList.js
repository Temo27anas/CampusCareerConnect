import React from "react";
import JobCard from "./jobitem";

export default function JobList() {

  //get the data from the api
  const [jobs, setJobs] = React.useState([]);

  React.useEffect(() => {
    fetch("https://apiccc.netlify.app/.netlify/functions/api/jobs")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      });
  }, []);


  console.log(jobs);




  return (
    <>
      <section
        className="section"
        style={{
          boxSizing: "border-box",
          paddingTop: "80px",
          paddingBottom: "80px",
          position: "relative",
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
            className="row"
            style={{
              boxSizing: "border-box",
              display: "flex",
              flexWrap: "wrap",
              marginTop: "calc(0 * -1)",
              marginRight: "calc(20px * -0.5)",
              marginLeft: "calc(20px * -0.5)",
            }}
          >
            <div
              className="col-lg-9"
              style={{
                boxSizing: "border-box",
                maxWidth: "100%",
                paddingRight: "calc(20px * 0.5)",
                paddingLeft: "calc(20px * 0.5)",
                marginTop: "0",
                flex: "0 0 auto",
                WebkitBoxFlex: "0",
                flexShrink: 0,
                width: "75%",
                position: "relative",
              }}
            >
              <div
                className="me-lg-5"
                style={{ boxSizing: "border-box", marginRight: "3rem" }}
              >
                <div
                  className="job-list-header"
                  style={{ boxSizing: "border-box" }}
                >
                
                </div>
              
                <div style={{ boxSizing: "border-box" }}>

                  {/*//mfsfgrgrg*/}
                   
                   <JobCard />
                   <JobCard />
                   <JobCard />
                    
                  <div
                    className="job-box card mt-4"
                    style={{
                      boxSizing: "border-box",
                      border: "1px solid rgb(239, 240, 242)",
                      borderRadius: "0.4rem",
                      position: "relative",
                      display: "flex",
                      WebkitBoxOrient: "vertical",
                      WebkitBoxDirection: "normal",
                      flexDirection: "column",
                      minWidth: "0px",
                      overflowWrap: "break-word",
                      backgroundColor: "rgb(255, 255, 255)",
                      backgroundClip: "border-box",
                      overflow: "hidden",
                      transition: "all 0.5s ease 0s",
                      marginTop: "1.5rem",
                    }}
                  >
                    <div
                      className="bookmark-label text-center"
                      style={{
                        boxSizing: "border-box",
                        background: "rgba(2, 175, 116, 0.15)",
                        transition: "all 0.5s ease 0s",
                        padding: "8px 6px 6px",
                        width: "200px",
                        position: "absolute",
                        top: "-5px",
                        left: "-84px",
                        transform: "rotate(-45deg)",
                        zIndex: 1,
                        color: "rgb(255, 255, 255)",
                        fontSize: "20px",
                        textAlign: "center",
                      }}
                    >
                      <a
                        className="align-middle text-white"
                        href="#/joblist"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          verticalAlign: "middle",
                          color: "rgba(255,255,255,1)",
                        }}
                      >
                        <i
                          className="mdi mdi-star"
                          style={{ boxSizing: "border-box" }}
                        />
                      </a>
                    </div>
                    <div
                      className="p-4"
                      style={{ boxSizing: "border-box", padding: "1.5rem" }}
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
                          className="col-md-2"
                          style={{
                            boxSizing: "border-box",
                            maxWidth: "100%",
                            paddingRight: "calc(20px * 0.5)",
                            paddingLeft: "calc(20px * 0.5)",
                            marginTop: "0",
                            flex: "0 0 auto",
                            WebkitBoxFlex: "0",
                            flexShrink: 0,
                            width: "16.6667%",
                            position: "relative",
                          }}
                        >
                          <div
                            className="text-center mb-4 mb-md-0"
                            style={{
                              boxSizing: "border-box",
                              textAlign: "center",
                              marginBottom: "0px",
                            }}
                          >
                            <a
                              href="#/companydetails"
                              style={{
                                boxSizing: "border-box",
                                textDecoration: "none",
                                color: "rgb(2, 175, 116)",
                              }}
                            >
                              <img
                                className="img-fluid rounded-3"
                                src="data:image/png;base64,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"
                                style={{
                                  boxSizing: "border-box",
                                  verticalAlign: "middle",
                                  maxWidth: "100%",
                                  height: "auto",
                                  borderRadius: "0.4rem",
                                }}
                              />
                            </a>
                          </div>
                        </div>
                        <div
                          className="col-md-3"
                          style={{
                            boxSizing: "border-box",
                            maxWidth: "100%",
                            paddingRight: "calc(20px * 0.5)",
                            paddingLeft: "calc(20px * 0.5)",
                            marginTop: "0",
                            flex: "0 0 auto",
                            WebkitBoxFlex: "0",
                            flexShrink: 0,
                            width: "25%",
                            position: "relative",
                          }}
                        >
                          <div
                            className="mb-2 mb-md-0"
                            style={{
                              boxSizing: "border-box",
                              marginBottom: "0px",
                            }}
                          >
                            <h5
                              className="fs-18 mb-0"
                              style={{
                                boxSizing: "border-box",
                                marginTop: "0px",
                                fontWeight: 600,
                                lineHeight: 1.2,
                                fontSize: "18px",
                                marginBottom: "0px",
                              }}
                            >
                              <a
                                className="text-dark"
                                href="#/jobdetails"
                                style={{
                                  boxSizing: "border-box",
                                  textDecoration: "none",
                                  color: "rgba(49,64,71,1)",
                                }}
                              >
                                Product Director
                              </a>
                            </h5>
                            <p
                              className="text-muted fs-14 mb-0"
                              style={{
                                boxSizing: "border-box",
                                marginTop: "0px",
                                fontSize: "14px",
                                marginBottom: "0px",
                                color: "rgb(116, 120, 141)",
                              }}
                            >
                              Creative Agency
                            </p>
                          </div>
                        </div>
                        <div
                          className="col-md-3"
                          style={{
                            boxSizing: "border-box",
                            maxWidth: "100%",
                            paddingRight: "calc(20px * 0.5)",
                            paddingLeft: "calc(20px * 0.5)",
                            marginTop: "0",
                            flex: "0 0 auto",
                            WebkitBoxFlex: "0",
                            flexShrink: 0,
                            width: "25%",
                            position: "relative",
                          }}
                        >
                          <div
                            className="d-flex mb-2"
                            style={{
                              boxSizing: "border-box",
                              display: "flex",
                              marginBottom: "0.5rem",
                            }}
                          >
                            <div
                              className="flex-shrink-0"
                              style={{ boxSizing: "border-box", flexShrink: 0 }}
                            >
                              <i
                                className="mdi mdi-map-marker text-primary me-1"
                                style={{
                                  boxSizing: "border-box",
                                  marginRight: "0.25rem",
                                  color: "rgba(2,175,116,1)",
                                }}
                              />
                            </div>
                            <p
                              className="text-muted mb-0"
                              style={{
                                boxSizing: "border-box",
                                marginTop: "0px",
                                marginBottom: "0px",
                                color: "rgb(116, 120, 141)",
                              }}
                            >
                              {" "}
                              Escondido,California
                            </p>
                          </div>
                        </div>
                        <div
                          className="col-md-2"
                          style={{
                            boxSizing: "border-box",
                            maxWidth: "100%",
                            paddingRight: "calc(20px * 0.5)",
                            paddingLeft: "calc(20px * 0.5)",
                            marginTop: "0",
                            flex: "0 0 auto",
                            WebkitBoxFlex: "0",
                            flexShrink: 0,
                            width: "16.6667%",
                            position: "relative",
                          }}
                        >
                          <div
                            className="d-flex mb-0"
                            style={{
                              boxSizing: "border-box",
                              display: "flex",
                              marginBottom: "0px",
                            }}
                          >
                            <div
                              className="flex-shrink-0"
                              style={{ boxSizing: "border-box", flexShrink: 0 }}
                            >
                              <i
                                className="uil uil-clock-three text-primary me-1"
                                style={{
                                  boxSizing: "border-box",
                                  marginRight: "0.25rem",
                                  color: "rgba(2,175,116,1)",
                                }}
                              />
                            </div>
                            <p
                              className="text-muted mb-0"
                              style={{
                                boxSizing: "border-box",
                                marginTop: "0px",
                                marginBottom: "0px",
                                color: "rgb(116, 120, 141)",
                              }}
                            >
                              {" "}
                              3 min ago
                            </p>
                          </div>
                        </div>
                        <div
                          className="col-md-2"
                          style={{
                            boxSizing: "border-box",
                            maxWidth: "100%",
                            paddingRight: "calc(20px * 0.5)",
                            paddingLeft: "calc(20px * 0.5)",
                            marginTop: "0",
                            flex: "0 0 auto",
                            WebkitBoxFlex: "0",
                            flexShrink: 0,
                            width: "16.6667%",
                            position: "relative",
                          }}
                        >
                          <div style={{ boxSizing: "border-box" }}>
                            <span
                              className="badge bg-soft-success fs-13 mt-1 mx-1"
                              style={{
                                boxSizing: "border-box",
                                padding: "0.313rem 0.5rem",
                                borderRadius: "0.25rem",
                                display: "inline-block",
                                fontWeight: 500,
                                lineHeight: 1,
                                textAlign: "center",
                                whiteSpace: "nowrap",
                                verticalAlign: "baseline",
                                fontSize: "13px",
                                marginRight: "0.25rem",
                                marginLeft: "0.25rem",
                                marginTop: "0.25rem",
                                backgroundColor: "rgba(4, 133, 101, 0.15)",
                                color: "rgb(4, 133, 101)",
                              }}
                            >
                              Full Time
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="p-3 bg-light"
                      style={{
                        boxSizing: "border-box",
                        padding: "1rem",
                        backgroundColor: "rgba(248,249,252,1)",
                      }}
                    >
                      <div
                        className="justify-content-between row"
                        style={{
                          boxSizing: "border-box",
                          display: "flex",
                          flexWrap: "wrap",
                          marginTop: "calc(0 * -1)",
                          marginRight: "calc(20px * -0.5)",
                          marginLeft: "calc(20px * -0.5)",
                          WebkitBoxPack: "justify",
                          justifyContent: "space-between",
                        }}
                      >
                        <div
                          className="col-md-4"
                          style={{
                            boxSizing: "border-box",
                            maxWidth: "100%",
                            paddingRight: "calc(20px * 0.5)",
                            paddingLeft: "calc(20px * 0.5)",
                            marginTop: "0",
                            flex: "0 0 auto",
                            WebkitBoxFlex: "0",
                            flexShrink: 0,
                            width: "33.3333%",
                            position: "relative",
                          }}
                        >
                          <div style={{ boxSizing: "border-box" }}>
                            <p
                              className="text-muted mb-0"
                              style={{
                                boxSizing: "border-box",
                                marginTop: "0px",
                                marginBottom: "0px",
                                color: "rgb(116, 120, 141)",
                              }}
                            >
                              <span
                                className="text-dark"
                                style={{
                                  boxSizing: "border-box",
                                  color: "rgba(49,64,71,1)",
                                }}
                              >
                                Experience :
                              </span>
                              2 - 3 years
                            </p>
                          </div>
                        </div>
                        <div
                          className="col-md-3 col-lg-2"
                          style={{
                            boxSizing: "border-box",
                            maxWidth: "100%",
                            paddingRight: "calc(20px * 0.5)",
                            paddingLeft: "calc(20px * 0.5)",
                            marginTop: "0",
                            flex: "0 0 auto",
                            WebkitBoxFlex: "0",
                            flexShrink: 0,
                            width: "16.6667%",
                            position: "relative",
                          }}
                        >
                          <div style={{ boxSizing: "border-box" }}>
                            <a
                              className="primary-link"
                              href="#/joblist#applyNow"
                              style={{
                                boxSizing: "border-box",
                                textDecoration: "none",
                                transition: "all 0.5s ease 0s",
                                color: "rgb(49, 64, 71)",
                              }}
                            >
                              Apply Now{" "}
                              <i
                                className="mdi mdi-chevron-double-right"
                                style={{ boxSizing: "border-box" }}
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                 
                  {/*// 2nd job card */}
                </div>
              </div>
            </div>
            <div
              className="col-lg-3"
              style={{
                boxSizing: "border-box",
                maxWidth: "100%",
                paddingRight: "calc(20px * 0.5)",
                paddingLeft: "calc(20px * 0.5)",
                marginTop: "0",
                flex: "0 0 auto",
                WebkitBoxFlex: "0",
                flexShrink: 0,
                width: "25%",
                position: "relative",
              }}
            >
              <div
                className="side-bar mt-5 mt-lg-0"
                style={{ boxSizing: "border-box", marginTop: "0px" }}
              >
                <div
                  id="accordionExample"
                  className="accordion"
                  style={{ boxSizing: "border-box" }}
                >
                  <div
                    className="accordion-item"
                    style={{
                      boxSizing: "border-box",
                      backgroundColor: "transparent",
                      borderTopLeftRadius: "0.25rem",
                      borderTopRightRadius: "0.25rem",
                      border: "none",
                    }}
                  >
                  
                    
                  </div>
                  <div
                    className="accordion-item mt-4"
                    style={{
                      boxSizing: "border-box",
                      backgroundColor: "transparent",
                      borderTop: "0px",
                      border: "none",
                      marginTop: "1.5rem",
                    }}
                  >
                    <h2
                      id="experienceOne"
                      className="accordion-header"
                      style={{
                        boxSizing: "border-box",
                        marginTop: "0px",
                        fontWeight: 600,
                        lineHeight: 1.2,
                        fontSize: "1.875rem",
                        marginBottom: "0px",
                      }}
                    >
                      <button
                        id="collapseExample"
                        className="accordion-button btn btn-secondary"
                        type="button"
                        role="button"
                        style={{
                          boxSizing: "border-box",
                          margin: "0px",
                          fontFamily: "inherit",
                          textTransform: "none",
                          appearance: "button",
                          lineHeight: 1.5,
                          verticalAlign: "middle",
                          userSelect: "none",
                          borderColor: "rgb(116, 120, 141)",
                          padding: "1rem 1.25rem",
                          border: "0px",
                          borderRadius: "0px",
                          transition:
                            "color 0.15s ease-in-out 0s, background-color 0.15s ease-in-out 0s, border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s, border-radius 0.15s ease 0s, -webkit-box-shadow 0.15s ease-in-out 0s",
                          position: "relative",
                          display: "flex",
                          WebkitBoxAlign: "center",
                          alignItems: "center",
                          width: "100%",
                          textAlign: "left",
                          overflowAnchor: "none",
                          cursor: "pointer",
                          backgroundColor: "rgba(2, 175, 116, 0.15)",
                          color: "rgb(49, 64, 71)",
                          boxShadow: "none",
                          fontSize: "15px",
                          fontWeight: 500,
                        }}
                      >
                        Work experience
                      </button>
                    </h2>
                    <div
                      className="collapse show"
                      style={{ boxSizing: "border-box" }}
                    >
                      <div
                        className="accordion-body"
                        style={{
                          boxSizing: "border-box",
                          padding: "1rem 1.25rem",
                        }}
                      >
                        <div
                          className="side-title"
                          style={{ boxSizing: "border-box" }}
                        >
                          <div
                            className="form-check mt-2"
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              minHeight: "1.40625rem",
                              paddingLeft: "1.5em",
                              marginBottom: "0px",
                              marginTop: "0.5rem",
                            }}
                          >
                            <input
                              id="flexCheckChecked1"
                              className="form-check-input"
                              type="checkbox"
                              style={{
                                boxSizing: "border-box",
                                margin: "0px",
                                fontFamily: "inherit",
                                fontSize: "inherit",
                                lineHeight: "inherit",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center center",
                                border: "1px solid rgb(173, 181, 189)",
                                transition:
                                  "background-color 0.15s ease-in-out 0s, background-position 0.15s ease-in-out 0s, border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s, -webkit-box-shadow 0.15s ease-in-out 0s",
                                marginTop: "0.25em",
                                verticalAlign: "top",
                                backgroundColor: "rgb(255, 255, 255)",
                                backgroundSize: "contain",
                                appearance: "none",
                                WebkitPrintColorAdjust: "exact",
                                cursor: "pointer",
                                cssFloat: "left",
                                marginLeft: "-1.5em",
                                borderRadius: "0.25em",
                                width: "16px",
                                height: "16px",
                              }}
                            />
                            <label
                              className="form-check-label ms-2 text-muted"
                              htmlFor="flexCheckChecked1"
                              style={{
                                boxSizing: "border-box",
                                display: "inline-block",
                                cursor: "pointer",
                                marginLeft: "0.5rem",
                                color: "rgb(116, 120, 141)",
                              }}
                            >
                              No experience
                            </label>
                          </div>
                          <div
                            className="form-check mt-2"
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              minHeight: "1.40625rem",
                              paddingLeft: "1.5em",
                              marginBottom: "0px",
                              marginTop: "0.5rem",
                            }}
                          >
                            <input
                              id="flexCheckChecked2"
                              className="form-check-input"
                              type="checkbox"
                              defaultChecked
                              style={{
                                boxSizing: "border-box",
                                margin: "0px",
                                fontFamily: "inherit",
                                fontSize: "inherit",
                                lineHeight: "inherit",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center center",
                                border: "1px solid rgb(173, 181, 189)",
                                transition:
                                  "background-color 0.15s ease-in-out 0s, background-position 0.15s ease-in-out 0s, border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s, -webkit-box-shadow 0.15s ease-in-out 0s",
                                marginTop: "0.25em",
                                verticalAlign: "top",
                                backgroundSize: "contain",
                                appearance: "none",
                                WebkitPrintColorAdjust: "exact",
                                cursor: "pointer",
                                cssFloat: "left",
                                marginLeft: "-1.5em",
                                borderRadius: "0.25em",
                                borderColor: "rgb(2, 175, 116)",
                                backgroundColor: "rgb(2, 175, 116)",
                                width: "16px",
                                height: "16px",
                                backgroundImage:
                                  "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/%3e%3c/svg%3e\")",
                              }}
                            />
                            <label
                              className="form-check-label ms-2 text-muted"
                              htmlFor="flexCheckChecked2"
                              style={{
                                boxSizing: "border-box",
                                display: "inline-block",
                                cursor: "pointer",
                                marginLeft: "0.5rem",
                                color: "rgb(116, 120, 141)",
                              }}
                            >
                              0-3 years
                            </label>
                          </div>
                          <div
                            className="form-check mt-2"
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              minHeight: "1.40625rem",
                              paddingLeft: "1.5em",
                              marginBottom: "0px",
                              marginTop: "0.5rem",
                            }}
                          >
                            <input
                              id="flexCheckChecked3"
                              className="form-check-input"
                              type="checkbox"
                              style={{
                                boxSizing: "border-box",
                                margin: "0px",
                                fontFamily: "inherit",
                                fontSize: "inherit",
                                lineHeight: "inherit",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center center",
                                border: "1px solid rgb(173, 181, 189)",
                                transition:
                                  "background-color 0.15s ease-in-out 0s, background-position 0.15s ease-in-out 0s, border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s, -webkit-box-shadow 0.15s ease-in-out 0s",
                                marginTop: "0.25em",
                                verticalAlign: "top",
                                backgroundColor: "rgb(255, 255, 255)",
                                backgroundSize: "contain",
                                appearance: "none",
                                WebkitPrintColorAdjust: "exact",
                                cursor: "pointer",
                                cssFloat: "left",
                                marginLeft: "-1.5em",
                                borderRadius: "0.25em",
                                width: "16px",
                                height: "16px",
                              }}
                            />
                            <label
                              className="form-check-label ms-2 text-muted"
                              htmlFor="flexCheckChecked3"
                              style={{
                                boxSizing: "border-box",
                                display: "inline-block",
                                cursor: "pointer",
                                marginLeft: "0.5rem",
                                color: "rgb(116, 120, 141)",
                              }}
                            >
                              3-6 years
                            </label>
                          </div>
                          <div
                            className="form-check mt-2"
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              minHeight: "1.40625rem",
                              paddingLeft: "1.5em",
                              marginBottom: "0px",
                              marginTop: "0.5rem",
                            }}
                          >
                            <input
                              id="flexCheckChecked4"
                              className="form-check-input"
                              type="checkbox"
                              style={{
                                boxSizing: "border-box",
                                margin: "0px",
                                fontFamily: "inherit",
                                fontSize: "inherit",
                                lineHeight: "inherit",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center center",
                                border: "1px solid rgb(173, 181, 189)",
                                transition:
                                  "background-color 0.15s ease-in-out 0s, background-position 0.15s ease-in-out 0s, border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s, -webkit-box-shadow 0.15s ease-in-out 0s",
                                marginTop: "0.25em",
                                verticalAlign: "top",
                                backgroundColor: "rgb(255, 255, 255)",
                                backgroundSize: "contain",
                                appearance: "none",
                                WebkitPrintColorAdjust: "exact",
                                cursor: "pointer",
                                cssFloat: "left",
                                marginLeft: "-1.5em",
                                borderRadius: "0.25em",
                                width: "16px",
                                height: "16px",
                              }}
                            />
                            <label
                              className="form-check-label ms-2 text-muted"
                              htmlFor="flexCheckChecked4"
                              style={{
                                boxSizing: "border-box",
                                display: "inline-block",
                                cursor: "pointer",
                                marginLeft: "0.5rem",
                                color: "rgb(116, 120, 141)",
                              }}
                            >
                              More than 6 years
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="accordion-item mt-3"
                    style={{
                      boxSizing: "border-box",
                      backgroundColor: "transparent",
                      borderTop: "0px",
                      border: "none",
                      marginTop: "1rem",
                    }}
                  >
                    <h2
                      id="jobType"
                      className="accordion-header"
                      style={{
                        boxSizing: "border-box",
                        marginTop: "0px",
                        fontWeight: 600,
                        lineHeight: 1.2,
                        fontSize: "1.875rem",
                        marginBottom: "0px",
                      }}
                    >
                      <button
                        id="collapseExample"
                        className="accordion-button btn btn-secondary"
                        type="button"
                        role="button"
                        style={{
                          boxSizing: "border-box",
                          margin: "0px",
                          fontFamily: "inherit",
                          textTransform: "none",
                          appearance: "button",
                          lineHeight: 1.5,
                          verticalAlign: "middle",
                          userSelect: "none",
                          borderColor: "rgb(116, 120, 141)",
                          padding: "1rem 1.25rem",
                          border: "0px",
                          borderRadius: "0px",
                          transition:
                            "color 0.15s ease-in-out 0s, background-color 0.15s ease-in-out 0s, border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s, border-radius 0.15s ease 0s, -webkit-box-shadow 0.15s ease-in-out 0s",
                          position: "relative",
                          display: "flex",
                          WebkitBoxAlign: "center",
                          alignItems: "center",
                          width: "100%",
                          textAlign: "left",
                          overflowAnchor: "none",
                          cursor: "pointer",
                          backgroundColor: "rgba(2, 175, 116, 0.15)",
                          color: "rgb(49, 64, 71)",
                          boxShadow: "none",
                          fontSize: "15px",
                          fontWeight: 500,
                        }}
                      >
                        Type of employment
                      </button>
                    </h2>
                    <div
                      className="collapse show"
                      style={{ boxSizing: "border-box" }}
                    >
                      <div
                        className="accordion-body"
                        style={{
                          boxSizing: "border-box",
                          padding: "1rem 1.25rem",
                        }}
                      >
                        <div
                          className="side-title"
                          style={{ boxSizing: "border-box" }}
                        >
                          <div
                            className="form-check mt-2"
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              minHeight: "1.40625rem",
                              paddingLeft: "1.5em",
                              marginBottom: "0px",
                              marginTop: "0.5rem",
                            }}
                          >
                            <input
                              id="flexRadioDefault6"
                              className="form-check-input"
                              name="flexRadioDefault"
                              type="radio"
                              defaultChecked
                              style={{
                                boxSizing: "border-box",
                                margin: "0px",
                                fontFamily: "inherit",
                                fontSize: "inherit",
                                lineHeight: "inherit",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center center",
                                border: "1px solid rgb(173, 181, 189)",
                                transition:
                                  "background-color 0.15s ease-in-out 0s, background-position 0.15s ease-in-out 0s, border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s, -webkit-box-shadow 0.15s ease-in-out 0s",
                                marginTop: "0.25em",
                                verticalAlign: "top",
                                backgroundSize: "contain",
                                appearance: "none",
                                WebkitPrintColorAdjust: "exact",
                                cursor: "pointer",
                                cssFloat: "left",
                                marginLeft: "-1.5em",
                                borderRadius: "50%",
                                borderColor: "rgb(2, 175, 116)",
                                backgroundColor: "rgb(2, 175, 116)",
                                width: "16px",
                                height: "16px",
                                backgroundImage:
                                  "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e\")",
                              }}
                            />
                            <label
                              className="form-check-label ms-2 text-muted"
                              htmlFor="flexRadioDefault6"
                              style={{
                                boxSizing: "border-box",
                                display: "inline-block",
                                cursor: "pointer",
                                marginLeft: "0.5rem",
                                color: "rgb(116, 120, 141)",
                              }}
                            >
                              Freelance
                            </label>
                          </div>
                          <div
                            className="form-check mt-2"
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              minHeight: "1.40625rem",
                              paddingLeft: "1.5em",
                              marginBottom: "0px",
                              marginTop: "0.5rem",
                            }}
                          >
                            <input
                              id="flexRadioDefault2"
                              className="form-check-input"
                              name="flexRadioDefault"
                              type="radio"
                              style={{
                                boxSizing: "border-box",
                                margin: "0px",
                                fontFamily: "inherit",
                                fontSize: "inherit",
                                lineHeight: "inherit",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center center",
                                border: "1px solid rgb(173, 181, 189)",
                                transition:
                                  "background-color 0.15s ease-in-out 0s, background-position 0.15s ease-in-out 0s, border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s, -webkit-box-shadow 0.15s ease-in-out 0s",
                                marginTop: "0.25em",
                                verticalAlign: "top",
                                backgroundColor: "rgb(255, 255, 255)",
                                backgroundSize: "contain",
                                appearance: "none",
                                WebkitPrintColorAdjust: "exact",
                                cursor: "pointer",
                                cssFloat: "left",
                                marginLeft: "-1.5em",
                                borderRadius: "50%",
                                width: "16px",
                                height: "16px",
                              }}
                            />
                            <label
                              className="form-check-label ms-2 text-muted"
                              htmlFor="flexRadioDefault2"
                              style={{
                                boxSizing: "border-box",
                                display: "inline-block",
                                cursor: "pointer",
                                marginLeft: "0.5rem",
                                color: "rgb(116, 120, 141)",
                              }}
                            >
                              Full Time
                            </label>
                          </div>
                          <div
                            className="form-check mt-2"
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              minHeight: "1.40625rem",
                              paddingLeft: "1.5em",
                              marginBottom: "0px",
                              marginTop: "0.5rem",
                            }}
                          >
                            <input
                              id="flexRadioDefault3"
                              className="form-check-input"
                              name="flexRadioDefault"
                              type="radio"
                              style={{
                                boxSizing: "border-box",
                                margin: "0px",
                                fontFamily: "inherit",
                                fontSize: "inherit",
                                lineHeight: "inherit",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center center",
                                border: "1px solid rgb(173, 181, 189)",
                                transition:
                                  "background-color 0.15s ease-in-out 0s, background-position 0.15s ease-in-out 0s, border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s, -webkit-box-shadow 0.15s ease-in-out 0s",
                                marginTop: "0.25em",
                                verticalAlign: "top",
                                backgroundColor: "rgb(255, 255, 255)",
                                backgroundSize: "contain",
                                appearance: "none",
                                WebkitPrintColorAdjust: "exact",
                                cursor: "pointer",
                                cssFloat: "left",
                                marginLeft: "-1.5em",
                                borderRadius: "50%",
                                width: "16px",
                                height: "16px",
                              }}
                            />
                            <label
                              className="form-check-label ms-2 text-muted"
                              htmlFor="flexRadioDefault3"
                              style={{
                                boxSizing: "border-box",
                                display: "inline-block",
                                cursor: "pointer",
                                marginLeft: "0.5rem",
                                color: "rgb(116, 120, 141)",
                              }}
                            >
                              Internship
                            </label>
                          </div>
                          <div
                            className="form-check mt-2"
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              minHeight: "1.40625rem",
                              paddingLeft: "1.5em",
                              marginBottom: "0px",
                              marginTop: "0.5rem",
                            }}
                          >
                            <input
                              id="flexRadioDefault4"
                              className="form-check-input"
                              name="flexRadioDefault"
                              type="radio"
                              style={{
                                boxSizing: "border-box",
                                margin: "0px",
                                fontFamily: "inherit",
                                fontSize: "inherit",
                                lineHeight: "inherit",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center center",
                                border: "1px solid rgb(173, 181, 189)",
                                transition:
                                  "background-color 0.15s ease-in-out 0s, background-position 0.15s ease-in-out 0s, border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s, -webkit-box-shadow 0.15s ease-in-out 0s",
                                marginTop: "0.25em",
                                verticalAlign: "top",
                                backgroundColor: "rgb(255, 255, 255)",
                                backgroundSize: "contain",
                                appearance: "none",
                                WebkitPrintColorAdjust: "exact",
                                cursor: "pointer",
                                cssFloat: "left",
                                marginLeft: "-1.5em",
                                borderRadius: "50%",
                                width: "16px",
                                height: "16px",
                              }}
                            />
                            <label
                              className="form-check-label ms-2 text-muted"
                              htmlFor="flexRadioDefault4"
                              style={{
                                boxSizing: "border-box",
                                display: "inline-block",
                                cursor: "pointer",
                                marginLeft: "0.5rem",
                                color: "rgb(116, 120, 141)",
                              }}
                            >
                              Part Time
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="accordion-item mt-3"
                    style={{
                      boxSizing: "border-box",
                      backgroundColor: "transparent",
                      borderTop: "0px",
                      border: "none",
                      marginTop: "1rem",
                    }}
                  >
                    <h2
                      id="datePosted"
                      className="accordion-header"
                      style={{
                        boxSizing: "border-box",
                        marginTop: "0px",
                        fontWeight: 600,
                        lineHeight: 1.2,
                        fontSize: "1.875rem",
                        marginBottom: "0px",
                      }}
                    >
                      <button
                        id="collapseExample"
                        className="accordion-button btn btn-secondary"
                        type="button"
                        role="button"
                        style={{
                          boxSizing: "border-box",
                          margin: "0px",
                          fontFamily: "inherit",
                          textTransform: "none",
                          appearance: "button",
                          lineHeight: 1.5,
                          verticalAlign: "middle",
                          userSelect: "none",
                          borderColor: "rgb(116, 120, 141)",
                          padding: "1rem 1.25rem",
                          border: "0px",
                          borderRadius: "0px",
                          transition:
                            "color 0.15s ease-in-out 0s, background-color 0.15s ease-in-out 0s, border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s, border-radius 0.15s ease 0s, -webkit-box-shadow 0.15s ease-in-out 0s",
                          position: "relative",
                          display: "flex",
                          WebkitBoxAlign: "center",
                          alignItems: "center",
                          width: "100%",
                          textAlign: "left",
                          overflowAnchor: "none",
                          cursor: "pointer",
                          backgroundColor: "rgba(2, 175, 116, 0.15)",
                          color: "rgb(49, 64, 71)",
                          boxShadow: "none",
                          fontSize: "15px",
                          fontWeight: 500,
                        }}
                      >
                        Date Posted
                      </button>
                    </h2>
                    <div
                      className="collapse show"
                      style={{ boxSizing: "border-box" }}
                    >
                      <div
                        className="accordion-body"
                        style={{
                          boxSizing: "border-box",
                          padding: "1rem 1.25rem",
                        }}
                      >
                        <div
                          className="side-title form-check-all"
                          style={{ boxSizing: "border-box" }}
                        >
                          <div
                            className="form-check"
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              minHeight: "1.40625rem",
                              paddingLeft: "1.5em",
                              marginBottom: "0px",
                            }}
                          >
                            <input
                              id="checkAll"
                              className="form-check-input"
                              type="checkbox"
                              style={{
                                boxSizing: "border-box",
                                margin: "0px",
                                fontFamily: "inherit",
                                fontSize: "inherit",
                                lineHeight: "inherit",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center center",
                                border: "1px solid rgb(173, 181, 189)",
                                transition:
                                  "background-color 0.15s ease-in-out 0s, background-position 0.15s ease-in-out 0s, border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s, -webkit-box-shadow 0.15s ease-in-out 0s",
                                marginTop: "0.25em",
                                verticalAlign: "top",
                                backgroundColor: "rgb(255, 255, 255)",
                                backgroundSize: "contain",
                                appearance: "none",
                                WebkitPrintColorAdjust: "exact",
                                cursor: "pointer",
                                cssFloat: "left",
                                marginLeft: "-1.5em",
                                borderRadius: "0.25em",
                                width: "16px",
                                height: "16px",
                              }}
                            />
                            <label
                              className="form-check-label ms-2 text-muted form-label"
                              htmlFor="checkAll"
                              style={{
                                boxSizing: "border-box",
                                display: "inline-block",
                                marginBottom: "0.5rem",
                                cursor: "pointer",
                                marginLeft: "0.5rem",
                                color: "rgb(116, 120, 141)",
                              }}
                            >
                              All
                            </label>
                          </div>
                          <div
                            className="form-check mt-2"
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              minHeight: "1.40625rem",
                              paddingLeft: "1.5em",
                              marginBottom: "0px",
                              marginTop: "0.5rem",
                            }}
                          >
                            <input
                              id="flexCheckChecked5"
                              className="form-check-input"
                              name="datePosted"
                              type="checkbox"
                              defaultChecked
                              value="last"
                              style={{
                                boxSizing: "border-box",
                                margin: "0px",
                                fontFamily: "inherit",
                                fontSize: "inherit",
                                lineHeight: "inherit",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center center",
                                border: "1px solid rgb(173, 181, 189)",
                                transition:
                                  "background-color 0.15s ease-in-out 0s, background-position 0.15s ease-in-out 0s, border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s, -webkit-box-shadow 0.15s ease-in-out 0s",
                                marginTop: "0.25em",
                                verticalAlign: "top",
                                backgroundSize: "contain",
                                appearance: "none",
                                WebkitPrintColorAdjust: "exact",
                                cursor: "pointer",
                                cssFloat: "left",
                                marginLeft: "-1.5em",
                                borderRadius: "0.25em",
                                borderColor: "rgb(2, 175, 116)",
                                backgroundColor: "rgb(2, 175, 116)",
                                width: "16px",
                                height: "16px",
                                backgroundImage:
                                  "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/%3e%3c/svg%3e\")",
                              }}
                            />
                            <label
                              className="form-check-label ms-2 text-muted form-label"
                              htmlFor="flexCheckChecked5"
                              style={{
                                boxSizing: "border-box",
                                display: "inline-block",
                                marginBottom: "0.5rem",
                                cursor: "pointer",
                                marginLeft: "0.5rem",
                                color: "rgb(116, 120, 141)",
                              }}
                            >
                              Last Hour
                            </label>
                          </div>
                          <div
                            className="form-check mt-2"
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              minHeight: "1.40625rem",
                              paddingLeft: "1.5em",
                              marginBottom: "0px",
                              marginTop: "0.5rem",
                            }}
                          >
                            <input
                              id="flexCheckChecked6"
                              className="form-check-input"
                              name="datePosted"
                              type="checkbox"
                              value="last"
                              style={{
                                boxSizing: "border-box",
                                margin: "0px",
                                fontFamily: "inherit",
                                fontSize: "inherit",
                                lineHeight: "inherit",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center center",
                                border: "1px solid rgb(173, 181, 189)",
                                transition:
                                  "background-color 0.15s ease-in-out 0s, background-position 0.15s ease-in-out 0s, border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s, -webkit-box-shadow 0.15s ease-in-out 0s",
                                marginTop: "0.25em",
                                verticalAlign: "top",
                                backgroundColor: "rgb(255, 255, 255)",
                                backgroundSize: "contain",
                                appearance: "none",
                                WebkitPrintColorAdjust: "exact",
                                cursor: "pointer",
                                cssFloat: "left",
                                marginLeft: "-1.5em",
                                borderRadius: "0.25em",
                                width: "16px",
                                height: "16px",
                              }}
                            />
                            <label
                              className="form-check-label ms-2 text-muted form-label"
                              htmlFor="flexCheckChecked6"
                              style={{
                                boxSizing: "border-box",
                                display: "inline-block",
                                marginBottom: "0.5rem",
                                cursor: "pointer",
                                marginLeft: "0.5rem",
                                color: "rgb(116, 120, 141)",
                              }}
                            >
                              Last 24 hours
                            </label>
                          </div>
                          <div
                            className="form-check mt-2"
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              minHeight: "1.40625rem",
                              paddingLeft: "1.5em",
                              marginBottom: "0px",
                              marginTop: "0.5rem",
                            }}
                          >
                            <input
                              id="flexCheckChecked7"
                              className="form-check-input"
                              name="datePosted"
                              type="checkbox"
                              value="last"
                              style={{
                                boxSizing: "border-box",
                                margin: "0px",
                                fontFamily: "inherit",
                                fontSize: "inherit",
                                lineHeight: "inherit",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center center",
                                border: "1px solid rgb(173, 181, 189)",
                                transition:
                                  "background-color 0.15s ease-in-out 0s, background-position 0.15s ease-in-out 0s, border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s, -webkit-box-shadow 0.15s ease-in-out 0s",
                                marginTop: "0.25em",
                                verticalAlign: "top",
                                backgroundColor: "rgb(255, 255, 255)",
                                backgroundSize: "contain",
                                appearance: "none",
                                WebkitPrintColorAdjust: "exact",
                                cursor: "pointer",
                                cssFloat: "left",
                                marginLeft: "-1.5em",
                                borderRadius: "0.25em",
                                width: "16px",
                                height: "16px",
                              }}
                            />
                            <label
                              className="form-check-label ms-2 text-muted form-label"
                              htmlFor="flexCheckChecked7"
                              style={{
                                boxSizing: "border-box",
                                display: "inline-block",
                                marginBottom: "0.5rem",
                                cursor: "pointer",
                                marginLeft: "0.5rem",
                                color: "rgb(116, 120, 141)",
                              }}
                            >
                              Last 7 days
                            </label>
                          </div>
                          <div
                            className="form-check mt-2"
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              minHeight: "1.40625rem",
                              paddingLeft: "1.5em",
                              marginBottom: "0px",
                              marginTop: "0.5rem",
                            }}
                          >
                            <input
                              id="flexCheckChecked8"
                              className="form-check-input"
                              name="datePosted"
                              type="checkbox"
                              value="last"
                              style={{
                                boxSizing: "border-box",
                                margin: "0px",
                                fontFamily: "inherit",
                                fontSize: "inherit",
                                lineHeight: "inherit",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center center",
                                border: "1px solid rgb(173, 181, 189)",
                                transition:
                                  "background-color 0.15s ease-in-out 0s, background-position 0.15s ease-in-out 0s, border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s, -webkit-box-shadow 0.15s ease-in-out 0s",
                                marginTop: "0.25em",
                                verticalAlign: "top",
                                backgroundColor: "rgb(255, 255, 255)",
                                backgroundSize: "contain",
                                appearance: "none",
                                WebkitPrintColorAdjust: "exact",
                                cursor: "pointer",
                                cssFloat: "left",
                                marginLeft: "-1.5em",
                                borderRadius: "0.25em",
                                width: "16px",
                                height: "16px",
                              }}
                            />
                            <label
                              className="form-check-label ms-2 text-muted form-label"
                              htmlFor="flexCheckChecked8"
                              style={{
                                boxSizing: "border-box",
                                display: "inline-block",
                                marginBottom: "0.5rem",
                                cursor: "pointer",
                                marginLeft: "0.5rem",
                                color: "rgb(116, 120, 141)",
                              }}
                            >
                              Last 14 days
                            </label>
                          </div>
                          <div
                            className="form-check mt-2"
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              minHeight: "1.40625rem",
                              paddingLeft: "1.5em",
                              marginBottom: "0px",
                              marginTop: "0.5rem",
                            }}
                          >
                            <input
                              id="flexCheckChecked9"
                              className="form-check-input"
                              name="datePosted"
                              type="checkbox"
                              value="last"
                              style={{
                                boxSizing: "border-box",
                                margin: "0px",
                                fontFamily: "inherit",
                                fontSize: "inherit",
                                lineHeight: "inherit",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center center",
                                border: "1px solid rgb(173, 181, 189)",
                                transition:
                                  "background-color 0.15s ease-in-out 0s, background-position 0.15s ease-in-out 0s, border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s, -webkit-box-shadow 0.15s ease-in-out 0s",
                                marginTop: "0.25em",
                                verticalAlign: "top",
                                backgroundColor: "rgb(255, 255, 255)",
                                backgroundSize: "contain",
                                appearance: "none",
                                WebkitPrintColorAdjust: "exact",
                                cursor: "pointer",
                                cssFloat: "left",
                                marginLeft: "-1.5em",
                                borderRadius: "0.25em",
                                width: "16px",
                                height: "16px",
                              }}
                            />
                            <label
                              className="form-check-label ms-2 text-muted form-label"
                              htmlFor="flexCheckChecked9"
                              style={{
                                boxSizing: "border-box",
                                display: "inline-block",
                                marginBottom: "0.5rem",
                                cursor: "pointer",
                                marginLeft: "0.5rem",
                                color: "rgb(116, 120, 141)",
                              }}
                            >
                              Last 30 days
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="accordion-item mt-3"
                    style={{
                      boxSizing: "border-box",
                      backgroundColor: "transparent",
                      borderTop: "0px",
                      borderBottomRightRadius: "0.25rem",
                      borderBottomLeftRadius: "0.25rem",
                      border: "none",
                      marginTop: "1rem",
                    }}
                  >
                    <h2
                      id="tagCloud"
                      className="accordion-header"
                      style={{
                        boxSizing: "border-box",
                        marginTop: "0px",
                        fontWeight: 600,
                        lineHeight: 1.2,
                        fontSize: "1.875rem",
                        marginBottom: "0px",
                      }}
                    >
                      <button
                        id="collapseExample"
                        className="accordion-button btn btn-secondary"
                        type="button"
                        role="button"
                        style={{
                          boxSizing: "border-box",
                          margin: "0px",
                          fontFamily: "inherit",
                          textTransform: "none",
                          appearance: "button",
                          lineHeight: 1.5,
                          verticalAlign: "middle",
                          userSelect: "none",
                          borderColor: "rgb(116, 120, 141)",
                          padding: "1rem 1.25rem",
                          border: "0px",
                          borderRadius: "0px",
                          transition:
                            "color 0.15s ease-in-out 0s, background-color 0.15s ease-in-out 0s, border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s, border-radius 0.15s ease 0s, -webkit-box-shadow 0.15s ease-in-out 0s",
                          position: "relative",
                          display: "flex",
                          WebkitBoxAlign: "center",
                          alignItems: "center",
                          width: "100%",
                          textAlign: "left",
                          overflowAnchor: "none",
                          cursor: "pointer",
                          backgroundColor: "rgba(2, 175, 116, 0.15)",
                          color: "rgb(49, 64, 71)",
                          boxShadow: "none",
                          fontSize: "15px",
                          fontWeight: 500,
                        }}
                      >
                        Tags Cloud
                      </button>
                    </h2>
                    <div
                      className="collapse show"
                      style={{ boxSizing: "border-box" }}
                    >
                      <div
                        className="accordion-body"
                        style={{
                          boxSizing: "border-box",
                          padding: "1rem 1.25rem",
                        }}
                      >
                        <div
                          className="side-title d-flex flex-wrap align-items-start gap-1"
                          style={{
                            boxSizing: "border-box",
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "0.25rem",
                            WebkitBoxAlign: "start",
                            alignItems: "flex-start",
                          }}
                        >
                          <a
                            className="badge tag-cloud fs-13 mt-2"
                            href="#/joblist"
                            style={{
                              boxSizing: "border-box",
                              textDecoration: "none",
                              padding: "0.313rem 0.5rem",
                              borderRadius: "0.25rem",
                              display: "inline-block",
                              fontWeight: 500,
                              lineHeight: 1,
                              textAlign: "center",
                              whiteSpace: "nowrap",
                              verticalAlign: "baseline",
                              fontSize: "13px",
                              transition: "all 0.5s ease 0s",
                              color: "rgb(116, 120, 141)",
                              backgroundColor: "rgb(248, 249, 252)",
                              marginTop: "0.5rem",
                            }}
                          >
                            design
                          </a>
                          <a
                            className="badge tag-cloud fs-13 mt-2"
                            href="#/joblist"
                            style={{
                              boxSizing: "border-box",
                              textDecoration: "none",
                              padding: "0.313rem 0.5rem",
                              borderRadius: "0.25rem",
                              display: "inline-block",
                              fontWeight: 500,
                              lineHeight: 1,
                              textAlign: "center",
                              whiteSpace: "nowrap",
                              verticalAlign: "baseline",
                              fontSize: "13px",
                              transition: "all 0.5s ease 0s",
                              color: "rgb(116, 120, 141)",
                              backgroundColor: "rgb(248, 249, 252)",
                              marginTop: "0.5rem",
                            }}
                          >
                            marketing
                          </a>
                          <a
                            className="badge tag-cloud fs-13 mt-2"
                            href="#/joblist"
                            style={{
                              boxSizing: "border-box",
                              textDecoration: "none",
                              padding: "0.313rem 0.5rem",
                              borderRadius: "0.25rem",
                              display: "inline-block",
                              fontWeight: 500,
                              lineHeight: 1,
                              textAlign: "center",
                              whiteSpace: "nowrap",
                              verticalAlign: "baseline",
                              fontSize: "13px",
                              transition: "all 0.5s ease 0s",
                              color: "rgb(116, 120, 141)",
                              backgroundColor: "rgb(248, 249, 252)",
                              marginTop: "0.5rem",
                            }}
                          >
                            business
                          </a>
                          <a
                            className="badge tag-cloud fs-13 mt-2"
                            href="#/joblist"
                            style={{
                              boxSizing: "border-box",
                              textDecoration: "none",
                              padding: "0.313rem 0.5rem",
                              borderRadius: "0.25rem",
                              display: "inline-block",
                              fontWeight: 500,
                              lineHeight: 1,
                              textAlign: "center",
                              whiteSpace: "nowrap",
                              verticalAlign: "baseline",
                              fontSize: "13px",
                              transition: "all 0.5s ease 0s",
                              color: "rgb(116, 120, 141)",
                              backgroundColor: "rgb(248, 249, 252)",
                              marginTop: "0.5rem",
                            }}
                          >
                            developer
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
