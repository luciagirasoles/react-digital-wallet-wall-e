/**@jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

function BalanceItem({ category }) {
  const sectionStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: 300,
    margin: "2em 0"
  };
  return (
    <section css={sectionStyle}>
      <img src={category["image"]} alt={category["name"]} />
      <div
        css={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "15px",
          fontSize: "1.05em",
          letterSpacing: "1px",
          height: 64,
          justifyContent: "space-around"
        }}
      >
        <span>{category["name"]} Category</span>
        <span>$ {category["value"]}</span>
      </div>
    </section>
  );
}

export default BalanceItem;
