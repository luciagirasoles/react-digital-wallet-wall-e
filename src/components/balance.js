import React from "react";
import BalanceItem from "./balance-item";

function Balance({ month, list }) {
  console.log(list);
  let children = [];
  for (let categoryId in list) {
    children.push(<BalanceItem key={categoryId} category={list[categoryId]} />);
  }
  return (
    <div>
      <h1>{month}</h1>
      {children}
    </div>
  );
}

export default Balance;
