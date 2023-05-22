
import React from "react";

export default function Banner({BannerName}) {
  return (
    <>
      <section
        className="page-title-box"
        style={{
          boxSizing: "border-box",
          backgroundPosition: "center center",
          backgroundImage:
            'url("https://jobvia.react-light.pichforest.com/assets/images/home/page-title.png")',
          backgroundSize: "cover",
          backgroundColor: "rgb(2, 150, 99)",
          position: "relative",
          paddingTop: "225px",
          paddingBottom: "110px",
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
            className="row justify-content-center"
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
              className="col-md-6"
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
                className="text-center text-white"
                style={{
                  boxSizing: "border-box",
                  textAlign: "center",
                  color: "rgba(255,255,255,1)",
                }}
              >
                <h3
                  className="mb-4"
                  style={{
                    boxSizing: "border-box",
                    marginTop: "0px",
                    fontWeight: 600,
                    lineHeight: 1.2,
                    fontSize: "2.5rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  {BannerName}
                </h3>
                
                
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
