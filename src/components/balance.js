/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import BalanceItem from "./balance-item";

function Balance({ month, list }) {
  return (
    <div>
      <h2
        css={{
          margin: "1em 0"
        }}
      >
        {month}
      </h2>
      {Object.values(list).map(category => (
        <BalanceItem key={category.name} category={category} />
      ))}
    </div>
  );
}

export default Balance;
