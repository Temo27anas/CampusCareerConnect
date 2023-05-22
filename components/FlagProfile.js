




import React, { use } from "react";
import { useState } from "react";

export default function FlagProfile({FlagByInterviwer, ProfileId}){
  // create a button than can flag a profile, the square button consist of a flag icon and a red background,
  // the button should be placed on the top right corner of the profile card
  // only Admin can see the flag button
  const [flag, setFlag] = useState(FlagByInterviwer);


  return (
    <div>
      <button
        type="button"
        className="btn btn-danger"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        style={{
          boxSizing: "border-box",
          display: "inline-block",
          fontWeight: 400,
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
            "color 0.15s ease-in-out 0s, background-color 0.15s ease-in-out 0s, border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s",
          backgroundColor: "#dc3545",
          borderColor: "#dc3545",
          color: "#fff",
          WebkitAppearance: "button",
          cursor: "pointer",
          marginRight: "1rem",
        }}
        onClick={() => {
          setFlag(!flag);
        }}

      >
        {/*If it is flagged show unflag profile, if it is not flagged show flag profile*/}
        {flag ? "Unflag Profile" : "Flag Profile"}

      </button>

      
    </div>
  );
}
