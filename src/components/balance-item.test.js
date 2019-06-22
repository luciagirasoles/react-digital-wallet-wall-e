import React from "react";
import { render } from "@testing-library/react";
import BalanceItem from "./balance-item";

test("balance-item component", () => {
  const category = { name: "Categoria 1", value: 34.6 };
  const { asFragment } = render(<BalanceItem category={category} />);
  expect(asFragment()).toMatchSnapshot();
});
