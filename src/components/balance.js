import React from "react";
import BalanceItem from "./balance-item";

function Balance({ month, list }) {
  return (
    <div>
      <h1>{month}</h1>
      {Object.values(list).map(category => (
        <BalanceItem key={category.name} category={category} />
      ))}
    </div>
  );
}

export default Balance;
