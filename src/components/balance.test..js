import React from "react";
import { render } from "@testing-library/react";
import Balance from "./balance";

test("balance-item component", () => {
  const month = "June";
  const list = { name: "Categoria 1", value: 34.6 };
  const { asFragment } = render(<Balance month={month} list={list} />);
  expect(asFragment()).toMatchSnapshot();
});
