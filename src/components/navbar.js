/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { Link } from "@reach/router";

function Nabvar() {
  const linkStyle = {
    marginRight: "1em",
    textDecoration: "none",
    color: "#000",
    "&:hover": {
      color: "#003569"
    }
  };

  return (
    <nav
      css={{
        background: "#ffffff",
        borderBottom: "1px solid rgba(0,0,0,.0975)",
        marginBottom: "2em"
      }}
    >
      <ul
        css={{
          maxWidth: "1000px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "flex-end",
          padding: "1.5em",
          listStyle: "none",
          color: "#fff"
        }}
      >
        <li>
          <Link css={linkStyle} to="/">
            WALL·E
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nabvar;
