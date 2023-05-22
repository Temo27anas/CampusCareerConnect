import React from "react";
import ShortProfileCard from "./ShortProfileCard";
import ProfileSettings from "./ProfileSettings";

export default function ProfileCard({ account_id,account_type,AboutText, Major, Minor, Classifications, GraduationYear,NumberOfCredits,Linkedin,Gender,Name,City,Country,BirthDate,Phone,Email,CVLink,FlagByInterviwer }) {


  const [navigation, setNavigation] = React.useState("Overview");

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
              className="col-lg-4"
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
              <div
                className="profile-sidebar me-lg-4 card"
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
                  marginRight: "1.5rem",
                }}
              >
                 
                <ShortProfileCard account_id={account_id} account_type={account_type} AvatarLink ={"https://www.svgrepo.com/show/382109/male-avatar-boy-face-man-user-7.svg"} Name={Name} Gender={Gender} City={City} Country={Country} BirthDate = {BirthDate} Phone={Phone} Email={Email} CVLink={CVLink} FlagByInterviwer={FlagByInterviwer} />

              </div>
            </div>
            <div
              className="col-lg-8"
              style={{
                boxSizing: "border-box",
                maxWidth: "100%",
                paddingRight: "calc(20px * 0.5)",
                paddingLeft: "calc(20px * 0.5)",
                marginTop: "0",
                flex: "0 0 auto",
                WebkitBoxFlex: "0",
                flexShrink: 0,
                width: "66.6667%",
                position: "relative",
              }}
            >
              <div
                className="profile-content-page mt-4 mt-lg-0 card"
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
                  marginTop: "0px",
                }}
              >
                <ul
                  id="pills-tab"
                  className="profile-content-nav nav-pills border-bottom mb-4 nav"
                  role="tablist"
                  style={{
                    boxSizing: "border-box",
                    marginTop: "0px",
                    listStyle: "none",
                    display: "flex",
                    flexWrap: "wrap",
                    paddingLeft: "0px",
                    borderBottom: "1px solid rgb(239, 240, 242)",
                    marginBottom: "1.5rem",
                  }}
                >
                  <li
                    className="nav-item"
                    role="presentation"
                    style={{ boxSizing: "border-box" }}
                    onClick={() => setNavigation("Overview")}
                  >
                    <a
                      className="active nav-link"
                      type="button"
                      to="#"
                      style={{
                        boxSizing: "border-box",
                        textDecoration: "none",
                        appearance: "button",
                        transition:
                          "color 0.15s ease-in-out 0s, background-color 0.15s ease-in-out 0s, border-color 0.15s ease-in-out 0s",
                        display: "block",
                        cursor: "pointer",
                        background: "0px 0px",
                        border: "0px",
                        borderBottom: "2px solid transparent",
                        borderRadius: "0px",
                        padding: "12px 26px",
                        fontWeight: 500,
                        fontSize: "16px",
                        color: "rgb(2, 175, 116)",
                        borderBottomColor: "rgb(2, 175, 116)",
                        backgroundColor: "transparent",
                      }}
                    >
                      Overview
                    </a>
                  </li>
                  <li
                    className="nav-item"
                    role="presentation"
                    style={{ boxSizing: "border-box" }}
                    onClick={() => setNavigation("Settings")}
                  >
                    <a
                      className="nav-link"
                      type="button"
                      to="#"
                      style={{
                        boxSizing: "border-box",
                        textDecoration: "none",
                        appearance: "button",
                        transition:
                          "color 0.15s ease-in-out 0s, background-color 0.15s ease-in-out 0s, border-color 0.15s ease-in-out 0s",
                        display: "block",
                        cursor: "pointer",
                        background: "0px 0px",
                        border: "0px",
                        borderBottom: "2px solid transparent",
                        borderRadius: "0px",
                        padding: "12px 26px",
                        color: "rgb(49, 64, 71)",
                        fontWeight: 500,
                        fontSize: "16px",
                      }}
                    >
                      Settings
                    </a>
                  </li>
                </ul>
                
                {navigation === "Overview" ? (
                  <div
                  className="p-4 card-body"
                  style={{
                    boxSizing: "border-box",
                    flex: "1 1 auto",
                    WebkitBoxFlex: "1",
                    padding: "1.5rem",
                  }}
                >
                  <div
                    className="tab-content"
                    style={{ boxSizing: "border-box" }}
                  >
                    <div
                      className="tab-pane active"
                      style={{ boxSizing: "border-box", display: "block" }}
                    >
                      <div style={{ boxSizing: "border-box" }}>
                        <h5
                          className="fs-18 fw-bold"
                          style={{
                            boxSizing: "border-box",
                            marginTop: "0px",
                            marginBottom: "0.5rem",
                            lineHeight: 1.2,
                            fontSize: "18px",
                            fontWeight: 700,
                          }}
                        >
                          About
                        </h5>
                        <p
                          className="text-muted mt-4"
                          style={{
                            boxSizing: "border-box",
                            marginBottom: "1rem",
                            marginTop: "1.5rem",
                            color: "rgb(116, 120, 141)",
                          }}
                        >
                          {AboutText}{" "}
                        </p>
                          
                      </div>
                      <div
                        className="candidate-education-details mt-4"
                        style={{ boxSizing: "border-box", marginTop: "1.5rem" }}
                      >
                        <h6
                          className="fs-18 fw-bold mb-0"
                          style={{
                            boxSizing: "border-box",
                            marginTop: "0px",
                            lineHeight: 1.2,
                            fontSize: "18px",
                            marginBottom: "0px",
                            fontWeight: 700,
                          }}
                        >
                          Education
                        </h6>
                        <div
                          className="candidate-education-content mt-4 d-flex"
                          style={{
                            boxSizing: "border-box",
                            position: "relative",
                            display: "flex",
                            marginTop: "1.5rem",
                          }}
                        >
                          <div
                            className="circle flex-shrink-0 bg-soft-primary"
                            style={{
                              boxSizing: "border-box",
                              borderRadius: "40px",
                              width: "35px",
                              height: "35px",
                              lineHeight: "35px",
                              textAlign: "center",
                              flexShrink: 0,
                              backgroundColor: "rgba(2, 175, 116, 0.15)",
                              color: "rgb(2, 175, 116)",
                            }}
                          >
                            A
                          </div>
                          <div
                            className="ms-4"
                            style={{
                              boxSizing: "border-box",
                              marginLeft: "1.5rem",
                            }}
                          >
                            <h6
                              className="fs-16 mb-1"
                              style={{
                                boxSizing: "border-box",
                                marginTop: "0px",
                                fontWeight: 600,
                                lineHeight: 1.2,
                                fontSize: "16px",
                                marginBottom: "0.25rem",
                              }}
                            >
                              Bachelor in {Major} 
                            </h6>
                            <p
                              className="mb-2 text-muted"
                              style={{
                                boxSizing: "border-box",
                                marginTop: "0px",
                                marginBottom: "0.5rem",
                                color: "rgb(116, 120, 141)",
                              }}
                            >
                              Al Akhawayn University In Ifrane 
                            </p>
                            <p
                              className="text-muted"
                              style={{
                                boxSizing: "border-box",
                                marginTop: "0px",
                                marginBottom: "1rem",
                                color: "rgb(116, 120, 141)",
                              }}
                            >
                              -  <b>Minor in: </b> {Minor} <br/>
                              -  <b>Classifications: </b> {Classifications}<br/>
                              -  <b>Number of Credits: </b> {NumberOfCredits}<br/>
                              -  <b>Graduation Year: </b> {GraduationYear}<br/>
                              

                            </p>
                          </div>
                        </div>
                       
                       
                      </div>
                    
                    
                      <div
                        className="mt-4"
                        style={{ boxSizing: "border-box", marginTop: "1.5rem" }}
                      >
                        <h5
                          className="fs-18 fw-bold"
                          style={{
                            boxSizing: "border-box",
                            marginTop: "0px",
                            marginBottom: "0.5rem",
                            lineHeight: 1.2,
                            fontSize: "18px",
                            fontWeight: 700,
                          }}
                        >
                          LinkedIn Profile
                        </h5>
                      </div>
                      <div
                        className="mt-0 d-flex flex-wrap align-items-start gap-1"
                        style={{
                          boxSizing: "border-box",
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "0.25rem",
                          WebkitBoxAlign: "start",
                          alignItems: "flex-start",
                          marginTop: "0px",
                        }}
                      >
                        <a
                          href={Linkedin}
                          target="_blank"
                          className="btn btn-primary"
                          style={{
                          }} 
                        >
                          <i
                            className="fab fa-linkedin"
                            style={{
                              boxSizing: "border-box",
                              marginRight: "0.5rem",
                            }}
                          ></i>
                          LinkedIn
                        </a>
                        

                      </div>
                    </div>
                    <div
                      className="tab-pane"
                      style={{ boxSizing: "border-box", display: "none" }}
                    >
                      <form action="#" style={{ boxSizing: "border-box" }}>
                        <div style={{ boxSizing: "border-box" }}>
                          <h5
                            className="fs-17 fw-semibold mb-3 mb-0"
                            style={{
                              boxSizing: "border-box",
                              marginTop: "0px",
                              lineHeight: 1.2,
                              fontSize: "17px",
                              fontWeight: 600,
                              marginBottom: "1rem",
                            }}
                          >
                            My Account
                          </h5>
                          <div
                            className="text-center"
                            style={{
                              boxSizing: "border-box",
                              textAlign: "center",
                            }}
                          >
                            <div
                              className="mb-4 profile-user"
                              style={{
                                boxSizing: "border-box",
                                position: "relative",
                                display: "inline-block",
                                marginBottom: "1.5rem",
                              }}
                            >
                              <img
                                id="profile-img"
                                className="rounded-circle img-thumbnail profile-img"
                                src="https://jobvia.react-light.pichforest.com/static/media/img-02.c217af98.jpg"
                                style={{
                                  boxSizing: "border-box",
                                  verticalAlign: "middle",
                                  padding: "0.25rem",
                                  border: "1px solid rgb(239, 240, 242)",
                                  backgroundColor: "rgb(255, 255, 255)",
                                  maxWidth: "100%",
                                  width: "150px",
                                  height: "150px",
                                  objectFit: "cover",
                                  borderRadius: "50%",
                                }}
                              />
                              <div
                                className="p-0 rounded-circle profile-photo-edit"
                                style={{
                                  boxSizing: "border-box",
                                  position: "absolute",
                                  bottom: "5px",
                                  right: "0px",
                                  padding: "0px",
                                  borderRadius: "50%",
                                }}
                              >
                                <input
                                  id="profile-img-file-input"
                                  className="profile-img-file-input form-control"
                                  type="file"
                                  style={{
                                    boxSizing: "border-box",
                                    margin: "0px",
                                    fontFamily: "inherit",
                                    border: "1px solid rgb(226, 229, 232)",
                                    borderRadius: "0.25rem",
                                    transition:
                                      "border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s, -webkit-box-shadow 0.15s ease-in-out 0s",
                                    width: "100%",
                                    lineHeight: 1.5,
                                    color: "rgb(73, 80, 87)",
                                    backgroundColor: "rgb(255, 255, 255)",
                                    backgroundClip: "padding-box",
                                    appearance: "none",
                                    padding: "10px",
                                    borderColor: "rgb(219, 223, 226)",
                                    fontSize: "14px",
                                    fontWeight: 500,
                                    overflow: "hidden",
                                    display: "none",
                                    cursor: "pointer",
                                  }}
                                />
                                <label
                                  className="profile-photo-edit avatar-xs form-label"
                                  htmlFor="profile-img-file-input"
                                  style={{
                                    boxSizing: "border-box",
                                    marginBottom: "0.5rem",
                                    height: "2.5rem",
                                    width: "2.5rem",
                                    lineHeight: "2.5rem",
                                    display: "inline-flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    position: "absolute",
                                    bottom: "5px",
                                    right: "0px",
                                  }}
                                >
                                  <i
                                    className="uil uil-edit"
                                    style={{
                                      boxSizing: "border-box",
                                      borderRadius: "100%",
                                      background: "rgb(255, 255, 255)",
                                      color: "rgb(49, 64, 71)",
                                      display: "inline-block",
                                      width: "34px",
                                      height: "34px",
                                      lineHeight: "34px",
                                      textAlign: "center",
                                      marginBottom: "0px",
                                      boxShadow:
                                        "rgba(49, 64, 71, 0.08) 0px 3px 10px 0px",
                                      cursor: "pointer",
                                    }}
                                  />
                                </label>
                              </div>
                            </div>
                          </div>
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
                                className="mb-3"
                                style={{
                                  boxSizing: "border-box",
                                  marginBottom: "1rem",
                                }}
                              >
                                <label
                                  className="form-label"
                                  htmlFor="firstName"
                                  style={{
                                    boxSizing: "border-box",
                                    display: "inline-block",
                                    marginBottom: "0.5rem",
                                  }}
                                >
                                  First Name
                                </label>
                                <input
                                  id="firstName"
                                  className="form-control"
                                  type="text"
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
                                    color: "rgb(73, 80, 87)",
                                    backgroundColor: "rgb(255, 255, 255)",
                                    backgroundClip: "padding-box",
                                    appearance: "none",
                                    padding: "10px",
                                    borderColor: "rgb(219, 223, 226)",
                                    fontSize: "14px",
                                    fontWeight: 500,
                                  }}
                                />
                              </div>
                            </div>
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
                                className="mb-3"
                                style={{
                                  boxSizing: "border-box",
                                  marginBottom: "1rem",
                                }}
                              >
                                <label
                                  className="form-label"
                                  htmlFor="lastName"
                                  style={{
                                    boxSizing: "border-box",
                                    display: "inline-block",
                                    marginBottom: "0.5rem",
                                  }}
                                >
                                  Last Name
                                </label>
                                <input
                                  id="lastName"
                                  className="form-control"
                                  type="text"
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
                                    color: "rgb(73, 80, 87)",
                                    backgroundColor: "rgb(255, 255, 255)",
                                    backgroundClip: "padding-box",
                                    appearance: "none",
                                    padding: "10px",
                                    borderColor: "rgb(219, 223, 226)",
                                    fontSize: "14px",
                                    fontWeight: 500,
                                  }}
                                />
                              </div>
                            </div>
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
                                className="mb-3"
                                style={{
                                  boxSizing: "border-box",
                                  marginBottom: "1rem",
                                }}
                              >
                                <label
                                  className="form-label"
                                  htmlFor="choices-single-categories"
                                  style={{
                                    boxSizing: "border-box",
                                    display: "inline-block",
                                    marginBottom: "0.5rem",
                                  }}
                                >
                                  Account Type
                                </label>
                                <select
                                  id="choices-single-categories"
                                  className="form-select"
                                  name="choices-single-categories"
                                  aria-label="Default select example"
                                  style={{
                                    boxSizing: "border-box",
                                    margin: "0px",
                                    fontFamily: "inherit",
                                    textTransform: "none",
                                    overflowWrap: "normal",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "right 1.25rem center",
                                    border: "1px solid rgb(226, 229, 232)",
                                    borderRadius: "0.25rem",
                                    transition:
                                      "border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s, -webkit-box-shadow 0.15s ease-in-out 0s",
                                    display: "block",
                                    width: "100%",
                                    lineHeight: 1.5,
                                    color: "rgb(73, 80, 87)",
                                    backgroundColor: "rgb(255, 255, 255)",
                                    backgroundImage:
                                      "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23314047' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e\")",
                                    backgroundSize: "16px 12px",
                                    appearance: "none",
                                    padding: "10px",
                                    borderColor: "rgb(219, 223, 226)",
                                    fontSize: "14px",
                                    fontWeight: 500,
                                  }}
                                >
                                  <option
                                    value="4"
                                    style={{ boxSizing: "border-box" }}
                                  >
                                    Accounting
                                  </option>
                                  <option
                                    value="1"
                                    style={{ boxSizing: "border-box" }}
                                  >
                                    IT & Software
                                  </option>
                                  <option
                                    value="3"
                                    style={{ boxSizing: "border-box" }}
                                  >
                                    Marketing
                                  </option>
                                  <option
                                    value="5"
                                    style={{ boxSizing: "border-box" }}
                                  >
                                    Banking
                                  </option>
                                </select>
                              </div>
                            </div>
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
                                className="mb-3"
                                style={{
                                  boxSizing: "border-box",
                                  marginBottom: "1rem",
                                }}
                              >
                                <label
                                  className="form-label"
                                  htmlFor="email"
                                  style={{
                                    boxSizing: "border-box",
                                    display: "inline-block",
                                    marginBottom: "0.5rem",
                                  }}
                                >
                                  Email
                                </label>
                                <input
                                  id="email"
                                  className="form-control"
                                  type="text"
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
                                    color: "rgb(73, 80, 87)",
                                    backgroundColor: "rgb(255, 255, 255)",
                                    backgroundClip: "padding-box",
                                    appearance: "none",
                                    padding: "10px",
                                    borderColor: "rgb(219, 223, 226)",
                                    fontSize: "14px",
                                    fontWeight: 500,
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="mt-4"
                          style={{
                            boxSizing: "border-box",
                            marginTop: "1.5rem",
                          }}
                        >
                          <h5
                            className="fs-17 fw-semibold mb-3"
                            style={{
                              boxSizing: "border-box",
                              marginTop: "0px",
                              lineHeight: 1.2,
                              fontSize: "17px",
                              fontWeight: 600,
                              marginBottom: "1rem",
                            }}
                          >
                            Profile
                          </h5>
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
                              className="col-lg-12"
                              style={{
                                boxSizing: "border-box",
                                maxWidth: "100%",
                                paddingRight: "calc(20px * 0.5)",
                                paddingLeft: "calc(20px * 0.5)",
                                marginTop: "0",
                                flex: "0 0 auto",
                                WebkitBoxFlex: "0",
                                flexShrink: 0,
                                width: "100%",
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
                                <label
                                  className="form-label"
                                  htmlFor="exampleFormControlTextarea1"
                                  style={{
                                    boxSizing: "border-box",
                                    display: "inline-block",
                                    marginBottom: "0.5rem",
                                  }}
                                >
                                  Introduce Yourself
                                </label>
                                <textarea
                                  className="form-control"
                                  defaultValue="Developer with over 5 years' experience working in both the public and private sectors. Diplomatic, personable, and adept at managing sensitive situations. Highly organized, self-motivated, and proficient with computers. Looking to boost students’ satisfactions scores for International University. Bachelor's degree in communications."
                                  rows={5}
                                  style={{
                                    boxSizing: "border-box",
                                    margin: "0px",
                                    fontFamily: "inherit",
                                    resize: "vertical",
                                    border: "1px solid rgb(226, 229, 232)",
                                    borderRadius: "0.25rem",
                                    transition:
                                      "border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s, -webkit-box-shadow 0.15s ease-in-out 0s",
                                    display: "block",
                                    width: "100%",
                                    lineHeight: 1.5,
                                    color: "rgb(73, 80, 87)",
                                    backgroundColor: "rgb(255, 255, 255)",
                                    backgroundClip: "padding-box",
                                    appearance: "none",
                                    padding: "10px",
                                    borderColor: "rgb(219, 223, 226)",
                                    fontSize: "14px",
                                    fontWeight: 500,
                                    minHeight: "calc(1.5em + 1.25rem + 2px)",
                                  }}
                                />
                              </div>
                            </div>
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
                                className="mb-3"
                                style={{
                                  boxSizing: "border-box",
                                  marginBottom: "1rem",
                                }}
                              >
                                <label
                                  className="form-label"
                                  htmlFor="languages"
                                  style={{
                                    boxSizing: "border-box",
                                    display: "inline-block",
                                    marginBottom: "0.5rem",
                                  }}
                                >
                                  Languages
                                </label>
                                <input
                                  id="languages"
                                  className="form-control"
                                  type="text"
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
                                    color: "rgb(73, 80, 87)",
                                    backgroundColor: "rgb(255, 255, 255)",
                                    backgroundClip: "padding-box",
                                    appearance: "none",
                                    padding: "10px",
                                    borderColor: "rgb(219, 223, 226)",
                                    fontSize: "14px",
                                    fontWeight: 500,
                                  }}
                                />
                              </div>
                            </div>
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
                                className="mb-3"
                                style={{
                                  boxSizing: "border-box",
                                  marginBottom: "1rem",
                                }}
                              >
                                <label
                                  className="form-label"
                                  htmlFor="choices-single-location"
                                  style={{
                                    boxSizing: "border-box",
                                    display: "inline-block",
                                    marginBottom: "0.5rem",
                                  }}
                                >
                                  Location
                                </label>
                                <select
                                  id="choices-single-location"
                                  className="form-select"
                                  name="choices-single-location"
                                  aria-label="Default select exam ple"
                                  style={{
                                    boxSizing: "border-box",
                                    margin: "0px",
                                    fontFamily: "inherit",
                                    textTransform: "none",
                                    overflowWrap: "normal",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "right 1.25rem center",
                                    border: "1px solid rgb(226, 229, 232)",
                                    borderRadius: "0.25rem",
                                    transition:
                                      "border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s, -webkit-box-shadow 0.15s ease-in-out 0s",
                                    display: "block",
                                    width: "100%",
                                    lineHeight: 1.5,
                                    color: "rgb(73, 80, 87)",
                                    backgroundColor: "rgb(255, 255, 255)",
                                    backgroundImage:
                                      "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23314047' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e\")",
                                    backgroundSize: "16px 12px",
                                    appearance: "none",
                                    padding: "10px",
                                    borderColor: "rgb(219, 223, 226)",
                                    fontSize: "14px",
                                    fontWeight: 500,
                                  }}
                                >
                                  <option
                                    value="ME"
                                    style={{ boxSizing: "border-box" }}
                                  >
                                    Montenegro
                                  </option>
                                  <option
                                    value="MS"
                                    style={{ boxSizing: "border-box" }}
                                  >
                                    Montserrat
                                  </option>
                                  <option
                                    value="MA"
                                    style={{ boxSizing: "border-box" }}
                                  >
                                    Morocco
                                  </option>
                                  <option
                                    value="MZ"
                                    style={{ boxSizing: "border-box" }}
                                  >
                                    Mozambique
                                  </option>
                                </select>
                              </div>
                            </div>
                            <div
                              className="col-lg-12"
                              style={{
                                boxSizing: "border-box",
                                maxWidth: "100%",
                                paddingRight: "calc(20px * 0.5)",
                                paddingLeft: "calc(20px * 0.5)",
                                marginTop: "0",
                                flex: "0 0 auto",
                                WebkitBoxFlex: "0",
                                flexShrink: 0,
                                width: "100%",
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
                                <label
                                  className="form-label"
                                  htmlFor="attachmentscv"
                                  style={{
                                    boxSizing: "border-box",
                                    display: "inline-block",
                                    marginBottom: "0.5rem",
                                  }}
                                >
                                  Attachments CV
                                </label>
                                <input
                                  id="attachmentscv"
                                  className="form-control"
                                  type="file"
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
                                    color: "rgb(73, 80, 87)",
                                    backgroundColor: "rgb(255, 255, 255)",
                                    backgroundClip: "padding-box",
                                    appearance: "none",
                                    padding: "10px",
                                    borderColor: "rgb(219, 223, 226)",
                                    fontSize: "14px",
                                    fontWeight: 500,
                                    overflow: "hidden",
                                    cursor: "pointer",
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="mt-4"
                          style={{
                            boxSizing: "border-box",
                            marginTop: "1.5rem",
                          }}
                        >
                          <h5
                            className="fs-17 fw-semibold mb-3"
                            style={{
                              boxSizing: "border-box",
                              marginTop: "0px",
                              lineHeight: 1.2,
                              fontSize: "17px",
                              fontWeight: 600,
                              marginBottom: "1rem",
                            }}
                          >
                            Social Media
                          </h5>
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
                                className="mb-3"
                                style={{
                                  boxSizing: "border-box",
                                  marginBottom: "1rem",
                                }}
                              >
                                <label
                                  className="form-label"
                                  htmlFor="facebook"
                                  style={{
                                    boxSizing: "border-box",
                                    display: "inline-block",
                                    marginBottom: "0.5rem",
                                  }}
                                >
                                  Facebook
                                </label>
                                <input
                                  id="facebook"
                                  className="form-control"
                                  type="text"
                                  to="https://www.facebook.com"
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
                                    color: "rgb(73, 80, 87)",
                                    backgroundColor: "rgb(255, 255, 255)",
                                    backgroundClip: "padding-box",
                                    appearance: "none",
                                    padding: "10px",
                                    borderColor: "rgb(219, 223, 226)",
                                    fontSize: "14px",
                                    fontWeight: 500,
                                  }}
                                />
                              </div>
                            </div>
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
                                className="mb-3"
                                style={{
                                  boxSizing: "border-box",
                                  marginBottom: "1rem",
                                }}
                              >
                                <label
                                  className="form-label"
                                  htmlFor="twitter"
                                  style={{
                                    boxSizing: "border-box",
                                    display: "inline-block",
                                    marginBottom: "0.5rem",
                                  }}
                                >
                                  Twitter
                                </label>
                                <input
                                  id="twitter"
                                  className="form-control"
                                  type="text"
                                  to="https://www.twitter.com"
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
                                    color: "rgb(73, 80, 87)",
                                    backgroundColor: "rgb(255, 255, 255)",
                                    backgroundClip: "padding-box",
                                    appearance: "none",
                                    padding: "10px",
                                    borderColor: "rgb(219, 223, 226)",
                                    fontSize: "14px",
                                    fontWeight: 500,
                                  }}
                                />
                              </div>
                            </div>
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
                                className="mb-3"
                                style={{
                                  boxSizing: "border-box",
                                  marginBottom: "1rem",
                                }}
                              >
                                <label
                                  className="form-label"
                                  htmlFor="linkedin"
                                  style={{
                                    boxSizing: "border-box",
                                    display: "inline-block",
                                    marginBottom: "0.5rem",
                                  }}
                                >
                                  Linkedin
                                </label>
                                <input
                                  id="linkedin"
                                  className="form-control"
                                  type="text"
                                  to="https://www.linkedin.com"
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
                                    color: "rgb(73, 80, 87)",
                                    backgroundColor: "rgb(255, 255, 255)",
                                    backgroundClip: "padding-box",
                                    appearance: "none",
                                    padding: "10px",
                                    borderColor: "rgb(219, 223, 226)",
                                    fontSize: "14px",
                                    fontWeight: 500,
                                  }}
                                />
                              </div>
                            </div>
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
                                className="mb-3"
                                style={{
                                  boxSizing: "border-box",
                                  marginBottom: "1rem",
                                }}
                              >
                                <label
                                  className="form-label"
                                  htmlFor="whatsapp"
                                  style={{
                                    boxSizing: "border-box",
                                    display: "inline-block",
                                    marginBottom: "0.5rem",
                                  }}
                                >
                                  Whatsapp
                                </label>
                                <input
                                  id="whatsapp"
                                  className="form-control"
                                  type="text"
                                  to="https://www.whatsapp.com"
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
                                    color: "rgb(73, 80, 87)",
                                    backgroundColor: "rgb(255, 255, 255)",
                                    backgroundClip: "padding-box",
                                    appearance: "none",
                                    padding: "10px",
                                    borderColor: "rgb(219, 223, 226)",
                                    fontSize: "14px",
                                    fontWeight: 500,
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="mt-4"
                          style={{
                            boxSizing: "border-box",
                            marginTop: "1.5rem",
                          }}
                        >
                          <h5
                            className="fs-17 fw-semibold mb-3"
                            style={{
                              boxSizing: "border-box",
                              marginTop: "0px",
                              lineHeight: 1.2,
                              fontSize: "17px",
                              fontWeight: 600,
                              marginBottom: "1rem",
                            }}
                          >
                            Change Password
                          </h5>
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
                              className="col-lg-12"
                              style={{
                                boxSizing: "border-box",
                                maxWidth: "100%",
                                paddingRight: "calc(20px * 0.5)",
                                paddingLeft: "calc(20px * 0.5)",
                                marginTop: "0",
                                flex: "0 0 auto",
                                WebkitBoxFlex: "0",
                                flexShrink: 0,
                                width: "100%",
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
                                <label
                                  className="form-label"
                                  htmlFor="current-password-input"
                                  style={{
                                    boxSizing: "border-box",
                                    display: "inline-block",
                                    marginBottom: "0.5rem",
                                  }}
                                >
                                  Current password
                                </label>
                                <input
                                  id="current-password-input"
                                  className="form-control"
                                  type="password"
                                  placeholder="Enter Current password"
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
                                    color: "rgb(73, 80, 87)",
                                    backgroundColor: "rgb(255, 255, 255)",
                                    backgroundClip: "padding-box",
                                    appearance: "none",
                                    padding: "10px",
                                    borderColor: "rgb(219, 223, 226)",
                                    fontSize: "14px",
                                    fontWeight: 500,
                                  }}
                                />
                              </div>
                            </div>
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
                                className="mb-3"
                                style={{
                                  boxSizing: "border-box",
                                  marginBottom: "1rem",
                                }}
                              >
                                <label
                                  className="form-label"
                                  htmlFor="new-password-input"
                                  style={{
                                    boxSizing: "border-box",
                                    display: "inline-block",
                                    marginBottom: "0.5rem",
                                  }}
                                >
                                  New password
                                </label>
                                <input
                                  id="new-password-input"
                                  className="form-control"
                                  type="password"
                                  placeholder="Enter new password"
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
                                    color: "rgb(73, 80, 87)",
                                    backgroundColor: "rgb(255, 255, 255)",
                                    backgroundClip: "padding-box",
                                    appearance: "none",
                                    padding: "10px",
                                    borderColor: "rgb(219, 223, 226)",
                                    fontSize: "14px",
                                    fontWeight: 500,
                                  }}
                                />
                              </div>
                            </div>
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
                                className="mb-3"
                                style={{
                                  boxSizing: "border-box",
                                  marginBottom: "1rem",
                                }}
                              >
                                <label
                                  className="form-label"
                                  htmlFor="confirm-password-input"
                                  style={{
                                    boxSizing: "border-box",
                                    display: "inline-block",
                                    marginBottom: "0.5rem",
                                  }}
                                >
                                  Confirm Password
                                </label>
                                <input
                                  id="confirm-password-input"
                                  className="form-control"
                                  type="password"
                                  placeholder="Confirm Password"
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
                                    color: "rgb(73, 80, 87)",
                                    backgroundColor: "rgb(255, 255, 255)",
                                    backgroundClip: "padding-box",
                                    appearance: "none",
                                    padding: "10px",
                                    borderColor: "rgb(219, 223, 226)",
                                    fontSize: "14px",
                                    fontWeight: 500,
                                  }}
                                />
                              </div>
                            </div>
                            <div
                              className="col-lg-12"
                              style={{
                                boxSizing: "border-box",
                                maxWidth: "100%",
                                paddingRight: "calc(20px * 0.5)",
                                paddingLeft: "calc(20px * 0.5)",
                                marginTop: "0",
                                flex: "0 0 auto",
                                WebkitBoxFlex: "0",
                                flexShrink: 0,
                                width: "100%",
                                position: "relative",
                              }}
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
                                  id="verification"
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
                                    width: "1em",
                                    height: "1em",
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
                                  }}
                                />
                                <label
                                  className="form-check-label form-label"
                                  htmlFor="verification"
                                  style={{
                                    boxSizing: "border-box",
                                    display: "inline-block",
                                    marginBottom: "0.5rem",
                                    cursor: "pointer",
                                  }}
                                >
                                  Enable Two-Step Verification via email
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="mt-4 text-end"
                          style={{
                            boxSizing: "border-box",
                            marginTop: "1.5rem",
                            textAlign: "right",
                          }}
                        >
                          <a
                            className="btn btn-primary"
                            href="https://jobvia.react-light.pichforest.com/myprofile"
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
                            Update
                          </a>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                ) : (
                  <ProfileSettings account_id={account_id}  account_type={account_type } AboutText = {AboutText} Major={Major} Minor={Minor} GraduationYear={GraduationYear} NumberOfCredits={NumberOfCredits} Linkedin={Linkedin}
                  Gender={Gender} Name={Name} City={City} Country={Country} BirthDate={BirthDate} Phone={Phone} Email={Email} CVLink={CVLink} FlagByInterviwer={FlagByInterviwer} />
                )}


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
  font-family: popins,sans-serif;
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
