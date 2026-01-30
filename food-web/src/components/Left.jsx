import React from "react";
import FilterBoxes from "./FilterBoxes";

function Left() {
  return (
    <div
      style={{
        width: "20%",
        height: "85vh",
        position: "fixed",
        top: "15vh",
        fontFamily: "monospace",
        fontWeight: "400",
        fontSize: "16px",
        color: "gray",
      }}
    >
      <FilterBoxes />
    </div>
  );
}

export default Left;
