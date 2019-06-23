/**@jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

function BalanceItem({ category }) {
  const sectionStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: 300
  };
  return (
    <section css={sectionStyle}>
      <img src={category["image"]} alt={category["name"]} />
      <div
        css={{
          marginLeft: "5px",
          fontSize: "1.05em",
          letterSpacing: "1px"
        }}
      >
        <span>Category {category["name"]} =></span>
        <span>{category["value"]}</span>
      </div>
    </section>
  );
}

export default BalanceItem;
