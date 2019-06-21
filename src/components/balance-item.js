/**@jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

function BalanceItem({ category }) {
  const sectionStyle = {
    display: "flex",
    flexDirection: "row",
    width: 300
  };
  return (
    <section css={sectionStyle}>
      <span>{category["name"]}</span>
      <span>{category["value"]}</span>
    </section>
  );
}
