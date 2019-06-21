import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import { New } from "./new";

test("Home component", async () => {
  const categories = [
    {
      id: 1,
      type: "ingresse",
      amount: 12.12,
      date: new Date().toISOString(),
      categoryId: 1
    }
  ];
  const createTransaction = jest.fn();

  const { getByLabelText, asFragment } = render(
    <New categories={categories} createTransaction={createTransaction} />
  );

  expect(asFragment()).toMatchSnapshot();

  const amountInput = await waitForElement(() =>
    getByLabelText("Write the amount")
  );

  fireEvent.change(amountInput, { target: { value: 20.0 } });

  const typeFilter = getByLabelText("Select a filter");
  fireEvent.change(typeFilter, { target: { value: 1 } });

  fireEvent.submit(amountInput);

  expect(createTransaction).toHaveBeenCalledWith({
    type: "ingresse",
    amount: 20.0,
    categoryId: 1
  });
});
