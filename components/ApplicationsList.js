import React from "react";
import JobCard from "./jobitem";

export default function ApplicationsList() {
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
              className="mt-4 pt-2 col-lg-12"
              style={{
                boxSizing: "border-box",
                maxWidth: "100%",
                paddingRight: "calc(20px * 0.5)",
                paddingLeft: "calc(20px * 0.5)",
                flex: "0 0 auto",
                WebkitBoxFlex: "0",
                flexShrink: 0,
                width: "100%",
                position: "relative",
                marginTop: "1.5rem",
                paddingTop: "0.5rem",
              }}
            >
             
              
              
              <JobCard />
              <h5
                className="mb-0"
                style={{
                  boxSizing: "border-box",
                  marginTop: "0",
                  marginBottom: "0.5rem",
                  fontSize: "1.25rem",
                  fontWeight: 500,
                  lineHeight: 1.2,
                }}
              >
                Status : <b>Applied</b>
              </h5>
              <JobCard />
              <h5
                className="mb-0"
                style={{
                  boxSizing: "border-box",
                  marginTop: "0",
                  marginBottom: "0.5rem",
                  fontSize: "1.25rem",
                  fontWeight: 500,
                  lineHeight: 1.2,
                }}
              >
                Status : <b>Applied</b>
              </h5>
              <JobCard />
              <h5
                className="mb-0"
                style={{
                  boxSizing: "border-box",
                  marginTop: "0",
                  marginBottom: "0.5rem",
                  fontSize: "1.25rem",
                  fontWeight: 500,
                  lineHeight: 1.2,
                }}
              >
                Status : <b>Applied</b>
              </h5>
              <JobCard />
              <h5
                className="mb-0"
                style={{
                  boxSizing: "border-box",
                  marginTop: "0",
                  marginBottom: "0.5rem",
                  fontSize: "1.25rem",
                  fontWeight: 500,
                  lineHeight: 1.2,
                }}
              >
                Status : <b>Applied</b>
              </h5>
              <JobCard />
              <h5
                className="mb-0"
                style={{
                  boxSizing: "border-box",
                  marginTop: "0",
                  marginBottom: "0.5rem",
                  fontSize: "1.25rem",
                  fontWeight: 500,
                  lineHeight: 1.2,
                }}
              >
                Status : <b>Applied</b>
              </h5>
            
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
