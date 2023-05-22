


const HeaderItem = ({ItemName, ItemLink }) => {

    return(
        <li
                className="dropdown dropdown-hover nav-item"
                style={{ boxSizing: "border-box", position: "relative" }}
              >
                <a
                  id="homedrop"
                  className="arrow-none nav-link"
                  href={ItemLink}
                  style={{
                    boxSizing: "border-box",
                    textDecoration: "none",
                    display: "block",
                    padding: "23px 18px",
                    transition: "all 0.3s ease 0s",
                    color: "rgb(49, 64, 71)",
                    fontSize: "13px",
                    backgroundColor: "transparent",
                    paddingRight: "18px",
                    paddingLeft: "18px",
                    textTransform: "uppercase",
                    position: "relative",
                    fontWeight: 600,
                  }}
                >
                  {ItemName}
                  <div
                    className="arrow-down"
                    style={{ boxSizing: "border-box", display: "inline-block" }}
                  />
                </a>
             
                
                            


              </li>
    )
}


export default HeaderItem