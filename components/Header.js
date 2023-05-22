import React from "react";
import HeaderItem from "./HeaderItem";
import HiName from "./HiName";


const Header = ({ account_id, student_Fname }) => {
  return (
    <>
      <nav
        id="navigation"
        className="navbar navbar-expand-lg fixed-top sticky p-0 nav-sticky"
        style={{
          boxSizing: "border-box",
          display: "flex",
          WebkitBoxAlign: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          WebkitBoxPack: "start",
          justifyContent: "flex-start",
          position: "fixed",
          top: "0px",
          right: "0px",
          left: "0px",
          zIndex: 1030,
          transition: "all 0.5s ease 0s",
          background: "rgb(255, 255, 255)",
          backgroundColor: "rgb(255, 255, 255)",
          marginTop: "0px",
          boxShadow: "rgba(49, 64, 71, 0.08) 0px 3px 10px 0px",
          padding: "0px",
          paddingTop: "0px",
          paddingBottom: "0px",
        }}
      >
        <div
          className="custom-container container-fluid active"
          style={{
            boxSizing: "border-box",
            width: "100%",
            paddingRight: "var(--bs-gutter-x,10px)",
            paddingLeft: "var(--bs-gutter-x,10px)",
            marginRight: "auto",
            marginLeft: "auto",
            maxWidth: "90%",
            display: "flex",
            flexWrap: "inherit",
            WebkitBoxAlign: "center",
            alignItems: "center",
            WebkitBoxPack: "justify",
            justifyContent: "space-between",
          }}
        >
          <a
            className="navbar-brand text-dark fw-bold me-auto"
            href="#"
            style={{
              boxSizing: "border-box",
              textDecoration: "none",
              paddingTop: "0.32422rem",
              paddingBottom: "0.32422rem",
              fontSize: "1.17188rem",
              whiteSpace: "nowrap",
              marginRight: "auto",
              fontWeight: 700,
              color: "rgba(49,64,71,1)",
            }}
          >
            <img
              className="logo-dark"
              height={22}
              src="Logo.png"
              style={{
                boxSizing: "border-box",
                verticalAlign: "middle",
                display: "inline-block",
              }}
            />
            <img
              className="logo-light"
              height={22}
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGoAAAAWCAYAAAAowQktAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3NpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDM1MiwgMjAyMC8wMS8zMC0xNTo1MDozOCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDplYzQwYTYxNi05MmIwLTdlNGQtYWNmZS03MjY1YTA3Yzk2OGQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTg4NkYwOTQxMDk0MTFFQ0IwOUU5NDU5MTNFRDJGQjIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTg4NkYwOTMxMDk0MTFFQ0IwOUU5NDU5MTNFRDJGQjIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjEgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZWM0MGE2MTYtOTJiMC03ZTRkLWFjZmUtNzI2NWEwN2M5NjhkIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOmVjNDBhNjE2LTkyYjAtN2U0ZC1hY2ZlLTcyNjVhMDdjOTY4ZCIvPiA8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"
              style={{
                boxSizing: "border-box",
                verticalAlign: "middle",
                display: "none",
              }}
            />
          </a>
          <div style={{ boxSizing: "border-box" }}>
            <button
              className="me-3 navbar-toggler"
              type="button"
              aria-label="Toggle navigation"
              style={{
                boxSizing: "border-box",
                margin: "0px",
                fontFamily: "inherit",
                textTransform: "none",
                appearance: "button",
                borderRadius: "0.25rem",
                transition:
                  "box-shadow 0.15s ease-in-out 0s, -webkit-box-shadow 0.15s ease-in-out 0s",
                lineHeight: 1,
                backgroundColor: "transparent",
                cursor: "pointer",
                display: "none",
                padding: "0px",
                border: "none",
                fontSize: "24px",
                marginRight: "1rem",
              }}
            >
              <i className="mdi mdi-menu" style={{ boxSizing: "border-box" }} />
            </button>
          </div>
          <div
            id="navbarCollapse"
            className="navbar-collapse collapse active"
            style={{
              boxSizing: "border-box",
              WebkitBoxFlex: "1",
              flexGrow: 1,
              WebkitBoxAlign: "center",
              alignItems: "center",
              flexBasis: "auto",
              display: "flex",
            }}
          >
            <ul
              className="navbar-nav mx-auto navbar-center active"
              style={{
                boxSizing: "border-box",
                marginTop: "0px",
                listStyle: "none",
                display: "flex",
                paddingLeft: "0px",
                marginBottom: "0px",
                WebkitBoxOrient: "horizontal",
                WebkitBoxDirection: "normal",
                flexDirection: "row",
                marginRight: "auto",
                marginLeft: "auto",
              }}
            >
              
              <HeaderItem ItemLink={"/Jobs"} ItemName={"Jobs"} />
              <HeaderItem ItemLink={"/Applications"} ItemName={"Applications"} />
              <HeaderItem ItemLink={"/Profile"} ItemName={"Profile"} />
              <HeaderItem ItemLink={"/LoginPage"} ItemName={"Logout"} />

              
            </ul>
          </div>
          <ul
            className="header-menu list-inline d-flex align-items-center mb-0"
            style={{
              boxSizing: "border-box",
              marginTop: "0px",
              listStyle: "none",
              paddingLeft: "0px",
              display: "flex",
              WebkitBoxAlign: "center",
              alignItems: "center",
              marginBottom: "0px",
            }}
          >

            <HiName name={student_Fname} image={"https://www.svgrepo.com/show/382109/male-avatar-boy-face-man-user-7.svg"} />
            
          </ul>
        </div>
      </nav>
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
  font-family: popins, sans-serif;
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


export default Header;