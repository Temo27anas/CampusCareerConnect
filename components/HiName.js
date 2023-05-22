

const HiName = (props) => {
    return (
        <div
              className="list-inline-item dropdown"
              style={{
                boxSizing: "border-box",
                display: "inline-block",
                position: "relative",
              }}
            >
              <a
                id="userdropdown"
                className="header-item"
                type="button"
                aria-expanded="false"
                aria-haspopup="true"
                to="#"
                style={{
                  boxSizing: "border-box",
                  textDecoration: "none",
                  appearance: "button",
                  border: "0px",
                  borderRadius: "0px",
                  height: "65px",
                  lineHeight: "65px",
                  display: "inline-block",
                  cursor: "pointer",
                  transition: "all 0.5s ease 0s",
                  color: "rgb(49, 64, 71)",
                }}
              >
                <img
                  className="rounded-circle me-1"
                  height={35}
                  width={35}
                  alt="mdo"
                  src={props.image}
                  style={{
                    boxSizing: "border-box",
                    verticalAlign: "middle",
                    marginRight: "0.25rem",
                    borderRadius: "50%",
                  }}
                />{" "}
                <span
                  className="d-none d-md-inline-block fw-medium"
                  style={{
                    boxSizing: "border-box",
                    fontWeight: 500,
                    display: "inline-block",
                  }}
                >
                  Hi, {props.name}
                </span>
              </a>
              
            </div>
    )
}

export default HiName
