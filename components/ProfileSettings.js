import React, { useState } from "react";

export default function ProfileSettings({ account_id,account_type,AboutText, Major, Minor, Classifications, GraduationYear,NumberOfCredits,Linkedin,
  Gender,Name,City,Country,BirthDate,Phone,Email,CVLink,FlagByInterviwer}) {

  const [AboutTextCh, setAboutText] = useState(AboutText);
  const [MajorCh, setMajor] = useState(Major);
  const [MinorCh, setMinor] = useState(Minor);
  const [ClassificationsCh, setClassifications] = useState(Classifications);
  const [GraduationYearCh, setGraduationYear] = useState(GraduationYear);
  const [NumberOfCreditsCh, setNumberOfCredits] = useState(NumberOfCredits);
  const [LinkedinCh, setLinkedin] = useState(Linkedin);
  const [GenderCh, setGender]  =useState(Gender);
  //split name to first and last name
  let name = Name.split(" ");
  const [FirstNameCh, setFirstName] = useState(name[0]);
  const [LastNameCh, setLastName] = useState(name[1]);
  const [CityCh, setCity] = useState(City);
  const [CountryCh, setCountry] = useState(Country);
  const [BirthDateCh, setBirthDate] = useState(BirthDate);
  const [PhoneCh, setPhone] = useState(Phone);
  const [CVLinkCh, setCVLink] = useState(CVLink);


const updateProfile = async (id) => {
  try {
      const response = await fetch('https://apiccc.netlify.app/.netlify/functions/api/EditProfile/'+id +'/' + FirstNameCh + '/' + LastNameCh + '/' + AboutTextCh + '/' + NumberOfCreditsCh, {
          method: 'GET'
      });
      const json = await response.json();
      console.log(json);

  } catch (error) {
      console.log(error);
  }
}


  return (
    <>
      <div
        className="p-4 card-body"
        style={{
          boxSizing: "border-box",
          flex: "1 1 auto",
          WebkitBoxFlex: "1",
          padding: "1.5rem",
        }}
      >
        <div className="tab-content" style={{ boxSizing: "border-box" }}>
          <div
            className="tab-pane"
            style={{ boxSizing: "border-box", display: "none" }}
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
                Developer with over 5 years' experience working in both the
                public and private sectors. Diplomatic, personable, and adept at
                managing sensitive situations. Highly organized, self-motivated,
                and proficient with computers. Looking to boost students’
                satisfactions scores for{" "}
                <b style={{ boxSizing: "border-box", fontWeight: "bolder" }}>
                  International University
                </b>
                . Bachelor's degree in communications.
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
                It describes the candidate's relevant experience, skills, and
                achievements. The purpose of this career summary is to explain
                your qualifications for the job in 3-5 sentences and convince
                the manager to read the whole resume document.
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
                  B
                </div>
                <div
                  className="ms-4"
                  style={{ boxSizing: "border-box", marginLeft: "1.5rem" }}
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
                    BCA - Bachelor of Computer Applications
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
                    International University - (2004 - 2010)
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
                    There are many variations of passages of available, but the
                    majority alteration in some form. As a highly skilled and
                    successfull product development and design specialist with
                    more than 4 Years of My experience.
                  </p>
                </div>
              </div>
              <div
                className="candidate-education-content mt-3 d-flex"
                style={{
                  boxSizing: "border-box",
                  position: "relative",
                  display: "flex",
                  marginTop: "1rem",
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
                  M
                </div>
                <div
                  className="ms-4"
                  style={{ boxSizing: "border-box", marginLeft: "1.5rem" }}
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
                    MCA - Master of Computer Application
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
                    International University - (2010 - 2012)
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
                    There are many variations of passages of available, but the
                    majority alteration in some form. As a highly skilled and
                    successfull product development and design specialist with
                    more than 4 Years of My experience.
                  </p>
                </div>
              </div>
              <div
                className="candidate-education-content mt-3 d-flex"
                style={{
                  boxSizing: "border-box",
                  position: "relative",
                  display: "flex",
                  marginTop: "1rem",
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
                  D
                </div>
                <div
                  className="ms-4"
                  style={{ boxSizing: "border-box", marginLeft: "1.5rem" }}
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
                    Design Communication Visual
                  </h6>
                  <p
                    className="text-muted mb-2"
                    style={{
                      boxSizing: "border-box",
                      marginTop: "0px",
                      marginBottom: "0.5rem",
                      color: "rgb(116, 120, 141)",
                    }}
                  >
                    International University - (2012-2015)
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
                    There are many variations of passages of available, but the
                    majority alteration in some form. As a highly skilled and
                    successfull product development and design specialist with
                    more than 4 Years of My experience.
                  </p>
                </div>
              </div>
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
                Experiences
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
                  {" "}
                  W{" "}
                </div>
                <div
                  className="ms-4"
                  style={{ boxSizing: "border-box", marginLeft: "1.5rem" }}
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
                    Web Design & Development Team Leader
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
                    Creative Agency - (2013 - 2016)
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
                    There are many variations of passages of available, but the
                    majority alteration in some form. As a highly skilled and
                    successfull product development and design specialist with
                    more than 4 Years of My experience.
                  </p>
                </div>
              </div>
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
                  {" "}
                  P{" "}
                </div>
                <div
                  className="ms-4"
                  style={{ boxSizing: "border-box", marginLeft: "1.5rem" }}
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
                    Project Manager
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
                    Jobvia Technology Pvt.Ltd - (Pressent)
                  </p>
                  <p
                    className="text-muted mb-0"
                    style={{
                      boxSizing: "border-box",
                      marginTop: "0px",
                      marginBottom: "0px",
                      color: "rgb(116, 120, 141)",
                    }}
                  >
                    There are many variations of passages of available, but the
                    majority alteration in some form. As a highly skilled and
                    successfull product development and design specialist with
                    more than 4 Years of My experience.
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
                Skills
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
              <span
                className="badge fs-13 bg-soft-blue mt-2"
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
                  marginTop: "0.5rem",
                  backgroundColor: "rgba(31, 134, 239, 0.15)",
                  color: "rgb(31, 134, 239)",
                }}
              >
                Cloud Management
              </span>
              <span
                className="badge fs-13 bg-soft-blue mt-2"
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
                  marginTop: "0.5rem",
                  backgroundColor: "rgba(31, 134, 239, 0.15)",
                  color: "rgb(31, 134, 239)",
                }}
              >
                Responsive Design
              </span>
              <span
                className="badge fs-13 bg-soft-blue mt-2"
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
                  marginTop: "0.5rem",
                  backgroundColor: "rgba(31, 134, 239, 0.15)",
                  color: "rgb(31, 134, 239)",
                }}
              >
                Network Architecture
              </span>
              <span
                className="badge fs-13 bg-soft-blue mt-2"
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
                  marginTop: "0.5rem",
                  backgroundColor: "rgba(31, 134, 239, 0.15)",
                  color: "rgb(31, 134, 239)",
                }}
              >
                PHP
              </span>
              <span
                className="badge fs-13 bg-soft-blue mt-2"
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
                  marginTop: "0.5rem",
                  backgroundColor: "rgba(31, 134, 239, 0.15)",
                  color: "rgb(31, 134, 239)",
                }}
              >
                Bootstrap
              </span>
              <span
                className="badge fs-13 bg-soft-blue mt-2"
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
                  marginTop: "0.5rem",
                  backgroundColor: "rgba(31, 134, 239, 0.15)",
                  color: "rgb(31, 134, 239)",
                }}
              >
                UI & UX Designer
              </span>
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
                Spoken languages
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
              <span
                className="badge fs-13 bg-soft-success mt-2"
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
                  marginTop: "0.5rem",
                  backgroundColor: "rgba(4, 133, 101, 0.15)",
                  color: "rgb(4, 133, 101)",
                }}
              >
                English
              </span>
              <span
                className="badge fs-13 bg-soft-success mt-2"
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
                  marginTop: "0.5rem",
                  backgroundColor: "rgba(4, 133, 101, 0.15)",
                  color: "rgb(4, 133, 101)",
                }}
              >
                German
              </span>
              <span
                className="badge fs-13 bg-soft-success mt-2"
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
                  marginTop: "0.5rem",
                  backgroundColor: "rgba(4, 133, 101, 0.15)",
                  color: "rgb(4, 133, 101)",
                }}
              >
                French
              </span>
            </div>
          </div>
          <div
            className="tab-pane active"
            style={{ boxSizing: "border-box", display: "block" }}
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
                  style={{ boxSizing: "border-box", textAlign: "center" }}
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
                      src="https://www.svgrepo.com/show/382109/male-avatar-boy-face-man-user-7.svg"
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
                      style={{ boxSizing: "border-box", marginBottom: "1rem" }}
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
                        placeholder={FirstNameCh}
                        onChange={(e) => setFirstName(e.target.value)}
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
                      style={{ boxSizing: "border-box", marginBottom: "1rem" }}
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
                        placeholder={LastNameCh}
                        onChange={(e) => setLastName(e.target.value)}
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
                   
                  </div>
                </div>
              </div>
              <div
                className="mt-4"
                style={{ boxSizing: "border-box", marginTop: "1.5rem" }}
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
                      style={{ boxSizing: "border-box", marginBottom: "1rem" }}
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
                        placeholder={AboutText}
                        onChange={(e) => setAboutText(e.target.value)}
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
                      style={{ boxSizing: "border-box", marginBottom: "1rem" }}
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
                        Number of Credits
                      </label>
                      <input
                        id="languages"
                        className="form-control"
                        type="text"
                        placeholder={NumberOfCreditsCh}
                        onChange={(e) => setNumberOfCredits(e.target.value)}
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
                      style={{ boxSizing: "border-box", marginBottom: "1rem" }}
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
                style={{ boxSizing: "border-box", marginTop: "1.5rem" }}
              >
                
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
                  href="#"
                  onClick={ () => {updateProfile(account_id); location.reload()
                  }}
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
