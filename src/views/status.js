/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import { Link } from "@reach/router";

function Status() {
  return (
    <div>
      <Link
        to="/new"
        css={{
          display: "block",
          lineHeight: "55px",
          textAlign: "center",
          textDecoration: "none",
          position: "fixed",
          bottom: "25px",
          right: "25px",
          border: "none",
          borderRadius: "50%",
          backgroundColor: "#000  ",
          color: "#fff",
          height: "55px",
          width: "55px",
          fontSize: "35px"
        }}
      >
        +
      </Link>
    </div>
  );
}

export default Status;
