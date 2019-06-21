import React from "react";
import BalanceItem from "./balance-item";

function Balance({ month, categories }) {
  let children;
  for (let categoryId of categories) {
    children += (
      <BalanceItem key={categoryId} category={categories[categoryId]} />
    );
  }
  return (
    <div>
      <h1>{month}</h1>
      {children}
    </div>
  );
}

export default Balance;
