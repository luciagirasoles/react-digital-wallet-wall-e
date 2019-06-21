import React from "react";

import Balance from "./balance";

const dataTest = {
  1: {
    id: 1,
    type: "ingreesse",
    amount: 12.12,
    date: Date.now() - 45938349,
    categoryId: 1
  },
  2: {
    id: 2,
    type: "ingreesse",
    amount: 12.12,
    date: Date.now() - 567672,
    categoryId: 1
  },
  3: {
    id: 3,
    type: "withdraw",
    amount: 8,
    date: Date.now() - 234234,
    categoryId: 3
  },
  4: {
    id: 4,
    type: "ingreesse",
    amount: 1.8,
    date: Date.now() - 87866,
    categoryId: 1
  }
};

function ReportBody() {
  let balanceItems = {};
  let month = "";
  let amount = 0;
  let row;
  for (let item of dataTest) {
    row = dataTest[item];
    if (
      month === "" ||
      month !== new Date(row.date).toLocaleString("en-US", { month: "long" })
    ) {
      month = new Date(row.date).toLocaleString("en-US", {
        month: "long"
      });
      amount = 0;
      balanceItems = {
        ...balanceItems,
        [month]: {
          [row.categoryId]: {
            name: row.categoryId,
            value: row.amount
          }
        }
      };
    } else if (
      month === new Date(row.date).toLocaleString("en-US", { month: "long" })
    ) {
      amount = balanceItems[month][row.categoryId]
        ? balanceItems[month][row.categoryId].value
        : 0;
      balanceItems[month][row.categoryId].value = amount + row.amount;
    }
  }
  let children;
  for (let month of balanceItems) {
    children += (
      <Balance key={month} month={month} categories={balanceItems[month]} />
    );
  }

  return children;
}

export default ReportBody;
