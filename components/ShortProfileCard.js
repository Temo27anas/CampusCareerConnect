import FlagProfile from "./FlagProfile";
import {HiOutlineDocument} from "react-icons/hi";




const ShortProfileCard = ({account_type, account_id, AvatarLink, Name, Gender, City, Country, BirthDate, Phone, Email, CVLink, FlagByInterviwer}) => {
  
  const CountAge = (BirthDate) => {
    var today = new Date();
    var birthDate = new Date(BirthDate);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate()))
    {
      age--;
    }
    return age;

  }


  const renderScoresFlagByInterviwer = (account_type, account_id, FlagByInterviwer) => {
    if (account_type === "admin")
    {
      return (
        <div>
        <ul
          className="list-inline d-flex justify-content-center align-items-center"
          style={{
            boxSizing: "border-box",
            marginTop: "0px",
            marginBottom: "1rem",
            listStyle: "none",
            paddingLeft: "0px",
            display: "flex",
            WebkitBoxPack: "center",
            justifyContent: "center",
            WebkitBoxAlign: "center",
            alignItems: "center",
          }}
        >
          <li
            className="list-inline-item text-warning fs-19"
            style={{
              boxSizing: "border-box",
              display: "inline-block",
              fontSize: "19px",
              color: "rgba(247,204,83,1)",
            }}
          >
            <i
              className="mdi mdi-star"
              style={{ boxSizing: "border-box" }}
            />
            <i
              className="mdi mdi-star"
              style={{ boxSizing: "border-box" }}
            />
            <i
              className="mdi mdi-star"
              style={{ boxSizing: "border-box" }}
            />
            <i
              className="mdi mdi-star"
              style={{ boxSizing: "border-box" }}
            />
            <i
              className="mdi mdi-star-half-full"
              style={{ boxSizing: "border-box" }}
            />
          </li>
        </ul>
        <ul
          className="candidate-detail-social-menu list-inline mb-0"
          style={{
            boxSizing: "border-box",
            marginTop: "0px",
            listStyle: "none",
            paddingLeft: "0px",
            marginBottom: "0px",
          }}
        >
          <li
            className="list-inline-item"
            style={{
              boxSizing: "border-box",
              display: "inline-block",
              marginRight: "0.5rem",
            }}
          >
            <a
              className="social-link rounded-3 btn-soft-primary"
              href="#"
              style={{
                boxSizing: "border-box",
                textDecoration: "none",
                borderColor: "transparent",
                transition: "all 0.5s ease 0s",
                display: "inline-block",
                width: "80px",
                height: "80px",
                lineHeight: "80px",
                fontSize: "36px",
                borderRadius: "0.4rem",
                backgroundColor: "rgba(2, 175, 116, 0.15)",
                color: "rgb(2, 175, 116)",
              }}
            >
              <h6>Score 1: 0.2/5.0</h6>
              <i
                className="uil uil-facebook-f"
                style={{ boxSizing: "border-box" }}
              />
            </a>
          </li>
          <li
            className="list-inline-item"
            style={{
              boxSizing: "border-box",
              display: "inline-block",
              marginRight: "0.5rem",
            }}
          >
            <a
              className="social-link rounded-3 btn-soft-info"
              href="https://jobvia.react-light.pichforest.com/myprofile"
              style={{
                boxSizing: "border-box",
                textDecoration: "none",
                borderColor: "transparent",
                transition: "all 0.5s ease 0s",
                display: "inline-block",
                width: "80px",
                height: "80px",
                lineHeight: "80px",
                fontSize: "36px",
                borderRadius: "0.4rem",
                backgroundColor: "rgba(95, 208, 243, 0.15)",
                color: "rgb(95, 208, 243)",
              }}
            >
              <h6>Score 1: 0.2/5.0</h6>
              <i
                className="uil uil-twitter-alt"
                style={{ boxSizing: "border-box" }}
              />
            </a>

          </li>
          <li
            className="list-inline-item"
            style={{
              boxSizing: "border-box",
              display: "inline-block",
              marginRight: "0.5rem",
            }}
          >
            <a
              className="social-link rounded-3 btn-soft-success"
              href="https://jobvia.react-light.pichforest.com/myprofile"
              style={{
                boxSizing: "border-box",
                textDecoration: "none",
                borderColor: "transparent",
                transition: "all 0.5s ease 0s",
                display: "inline-block",
                width: "80px",
                height: "80px",
                lineHeight: "80px",
                fontSize: "36px",
                borderRadius: "0.4rem",
                backgroundColor: "rgba(4, 133, 101, 0.15)",
                color: "rgb(4, 133, 101)",
              }}
            >
              <h6>Score 1: 0.2/5.0</h6>
              <i
                className="uil uil-whatsapp"
                style={{ boxSizing: "border-box" }}
                
              />

            </a>
            
          </li>
          <li
            className="list-inline-item"
            style={{
              boxSizing: "border-box",
              display: "inline-block",
            }}
          >
            <a
              className="social-link rounded-3 btn-soft-danger"
              href="https://jobvia.react-light.pichforest.com/myprofile"
              style={{
                boxSizing: "border-box",
                textDecoration: "none",
                borderColor: "transparent",
                transition: "all 0.5s ease 0s",
                display: "inline-block",
                width: "80px",
                height: "80px",
                lineHeight: "80px",
                margin: "6px",
                fontSize: "18px",
                borderRadius: "0.4rem",
                backgroundColor: "rgba(218, 55, 70, 0.15)",
                color: "rgb(218, 55, 70)",
              }}
            >
              <i
                className="uil uil-phone-alt"
                style={{ boxSizing: "border-box" }}
              />
              <h6>Score 1: 0.2/5.0</h6>
            </a>
          </li>
        </ul>
        <FlagProfile FlagByInterviwer = {FlagByInterviwer}  account_id={account_id} />
        </div>
      )
    }
    else{
      return(
      <></>)
    }
  }



  
  return (
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
                    className="text-center pb-4 border-bottom"
                    style={{
                      boxSizing: "border-box",
                      borderBottom: "1px solid rgb(239, 240, 242)",
                      paddingBottom: "1.5rem",
                      textAlign: "center",
                    }}
                  >
                    <img
                      className="avatar-lg img-thumbnail rounded-circle mb-4"
                      src={AvatarLink}
                      style={{
                        boxSizing: "border-box",
                        verticalAlign: "middle",
                        padding: "0.25rem",
                        border: "1px solid rgb(239, 240, 242)",
                        backgroundColor: "rgb(255, 255, 255)",
                        maxWidth: "100%",
                        height: "5rem",
                        width: "5rem",
                        marginBottom: "1.5rem",
                        borderRadius: "50%",
                      }}
                    />
                    <h5
                      className="mb-0"
                      style={{
                        boxSizing: "border-box",
                        marginTop: "0px",
                        fontWeight: 600,
                        lineHeight: 1.2,
                        fontSize: "1.17188rem",
                        marginBottom: "0px",
                      }}
                    >
                      {Name}
                    </h5>
                    <p
                      className="text-muted"
                      style={{
                        boxSizing: "border-box",
                        marginTop: "0px",
                        marginBottom: "1rem",
                        color: "rgb(116, 120, 141)",
                      }}
                    >
                      {Gender}, {CountAge(BirthDate)} years old
                    </p>

                     {renderScoresFlagByInterviwer(account_type, account_id, FlagByInterviwer)}


                  </div>


                  <div
                    className="mt-4 border-bottom pb-4"
                    style={{
                      boxSizing: "border-box",
                      borderBottom: "1px solid rgb(239, 240, 242)",
                      marginTop: "1.5rem",
                      paddingBottom: "1.5rem",
                    }}
                  >
                    <h5
                      className="fs-17 fw-bold mb-3"
                      style={{
                        boxSizing: "border-box",
                        marginTop: "0px",
                        lineHeight: 1.2,
                        fontSize: "17px",
                        marginBottom: "1rem",
                        fontWeight: 700,
                      }}
                    >
                      Documents
                    </h5>
                    <ul
                      className="profile-document list-unstyled mb-0"
                      style={{
                        boxSizing: "border-box",
                        marginTop: "0px",
                        listStyle: "none",
                        paddingLeft: "0px",
                        marginBottom: "0px",
                      }}
                    >
                      <li style={{ boxSizing: "border-box" }}>
                        <div
                          className="profile-document-list d-flex align-items-center mt-4"
                          style={{
                            boxSizing: "border-box",
                            display: "flex",
                            WebkitBoxAlign: "center",
                            alignItems: "center",
                            marginTop: "1.5rem",
                          }}
                        >
                          <div
                            className="icon flex-shrink-0"
                            style={{
                              boxSizing: "border-box",
                              display: "inline-flex",
                              alignItems: "center",
                              justifyContent: "center",
                              border: "1px solid rgba(116, 120, 141, 0.2)",
                              borderRadius: "6px",
                              width: "40px",
                              height: "40px",
                              lineHeight: "38px",
                              color: "rgb(116, 120, 141)",
                              textAlign: "center",
                              fontSize: "20px",
                              flexShrink: 0,
                            }}
                          >
                           
                            <HiOutlineDocument style={{fontSize:"30px"}}/>
                            <i
                              className="uil uil-file"
                              style={{ boxSizing: "border-box" }}
                            />
                          </div>
                          <div
                            className="ms-3"
                            style={{
                              boxSizing: "border-box",
                              marginLeft: "1rem",
                            }}
                          >
                            <h6
                              className="fs-16 mb-0"
                              style={{
                                boxSizing: "border-box",
                                marginTop: "0px",
                                fontWeight: 600,
                                lineHeight: 1.2,
                                fontSize: "16px",
                                marginBottom: "0px",
                              }}
                            >
                              Resume.pdf
                            </h6>
                            {/*Document Icon using  HiOutlineDocument */}
                            
            
                          </div>
                          <div
                            className="ms-auto"
                            style={{
                              boxSizing: "border-box",
                              marginLeft: "auto",
                            }}
                          >
                            {/*create a download button with the link to the resume*/}
                            <a
                              className="btn btn-soft-primary btn-sm"
                              href={CVLink}
                              style={{
                                boxSizing: "border-box",
                                textDecoration: "none",
                                borderColor: "transparent",
                                transition: "all 0.5s ease 0s",
                                color: "rgb(4, 133, 101)",
                                backgroundColor: "rgba(4, 133, 101, 0.15)",
                                fontSize: "12px",
                                borderRadius: "0.4rem",
                                padding: "0.25rem 0.75rem",
                              }}
                            >
                              Download



          
                              
                            </a>
                          </div>
                        </div>
                      </li>
                     
                    </ul>
                  </div>
                  <div
                    className="mt-4"
                    style={{ boxSizing: "border-box", marginTop: "1.5rem" }}
                  >
                    <h5
                      className="fs-17 fw-bold mb-3"
                      style={{
                        boxSizing: "border-box",
                        marginTop: "0px",
                        lineHeight: 1.2,
                        fontSize: "17px",
                        marginBottom: "1rem",
                        fontWeight: 700,
                      }}
                    >
                      Contacts
                    </h5>
                    <div
                      className="profile-contact"
                      style={{ boxSizing: "border-box" }}
                    >
                      <ul
                        className="list-unstyled mb-0"
                        style={{
                          boxSizing: "border-box",
                          marginTop: "0px",
                          listStyle: "none",
                          paddingLeft: "0px",
                          marginBottom: "0px",
                        }}
                      >
                        <li
                          style={{
                            boxSizing: "border-box",
                            padding: "10px 0px",
                          }}
                        >
                          <div
                            className="d-flex"
                            style={{ boxSizing: "border-box", display: "flex" }}
                          >{/*
                            <label
                              style={{
                                boxSizing: "border-box",
                                display: "inline-block",
                                minWidth: "118px",
                                fontWeight: 500,
                              }}
                            >
                              Email
                            </label>
                            <div style={{ boxSizing: "border-box" }}>
                              <p
                                className="text-muted text-break mb-0"
                                style={{
                                  boxSizing: "border-box",
                                  marginTop: "0px",
                                  marginBottom: "0px",
                                  overflowWrap: "break-word",
                                  wordBreak: "break-word",
                                  color: "rgb(116, 120, 141)",
                                }}
                              >
                                {Email}
                              </p>
                              
                            </div>
                            */}
                          </div>
                        </li>
                        <li
                          style={{
                            boxSizing: "border-box",
                            padding: "10px 0px",
                          }}
                        >
                          <div
                            className="d-flex"
                            style={{ boxSizing: "border-box", display: "flex" }}
                          >
                            <label
                              style={{
                                boxSizing: "border-box",
                                display: "inline-block",
                                minWidth: "118px",
                                fontWeight: 500,
                              }}
                            >
                              Phone Number
                            </label>
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
                                {Phone}
                              </p>
                            </div>
                          </div>
                        </li>
                        <li
                          style={{
                            boxSizing: "border-box",
                            padding: "10px 0px",
                          }}
                        >
                          <div
                            className="d-flex"
                            style={{ boxSizing: "border-box", display: "flex" }}
                          >
                            <label
                              style={{
                                boxSizing: "border-box",
                                display: "inline-block",
                                minWidth: "118px",
                                fontWeight: 500,
                              }}
                            >
                              Location
                            </label>
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
                               {City}, {Country}
                              </p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>


    );
    }

    export default ShortProfileCard;