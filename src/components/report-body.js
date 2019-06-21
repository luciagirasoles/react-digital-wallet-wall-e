import React from "react";

import Balance from "./balance";

const dataTest = {
  1: {
    id: 1,
    type: "ingreesse",
    amount: 12.12,
    date: Date.now() - 4593867349,
    categoryId: 1
  },
  2: {
    id: 2,
    type: "ingreesse",
    amount: 34,
    date: Date.now() - 567667472,
    categoryId: 1
  },
  3: {
    id: 3,
    type: "withdraw",
    amount: 8,
    date: Date.now() - 234565234,
    categoryId: 3
  },
  4: {
    id: 4,
    type: "ingreesse",
    amount: 1.8,
    date: Date.now() - 8786766,
    categoryId: 1
  }
};

function ReportBody() {
  let balance = {};
  let month = "",
    currentDate = "";
  let amount = 0;
  let row;
  let children = [];
  for (let item in dataTest) {
    row = dataTest[item];
    currentDate = new Date(row.date).toLocaleString("en-US", {
      month: "long",
      year: "numeric"
    });
    if (month === "") month = currentDate;
    if (month !== currentDate) {
      children.push(<Balance key={month} month={month} list={balance} />);
      month = currentDate;
      amount = 0;
    } else {
      amount = balance[row.categoryId] ? balance[row.categoryId].value : 0;
    }
    balance = {
      ...balance,
      [row.categoryId]: {
        name: row.categoryId,
        value: amount + row.amount
      }
    };
  }
  children.push(<Balance key={month} month={month} list={balance} />);
  return <>{children}</>;
}

export default ReportBody;
