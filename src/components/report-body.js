import React from "react";
import { connect } from "react-redux";

import Balance from "./balance";

function mapState(state) {
  return state;
}

export function ReportBody({ type, transaction, categories }) {
  let balance = {};
  let month = "",
    currentDate = "";
  let amount = 0;
  let row, category;
  let children = [];
  for (let item in transaction) {
    row = transaction[item];
    category = categories[row.categoryId].name;
    if (row.type === type) {
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
        amount = balance[category] ? balance[category].value : 0;
      }
      balance = {
        ...balance,
        [category]: {
          name: category,
          value: amount + row.amount
        }
      };
    }
  }
  children.push(<Balance key={month} month={month} list={balance} />);
  return <>{children}</>;
}

export default connect(mapState)(ReportBody);
