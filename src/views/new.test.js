import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import { New } from "./new";

test("New component", async () => {
  const categories = [
    {
      id: 1,
      type: "ingresse",
      name: "Award",
      image: "/images/Award.png"
    },
    {
      id: 2,
      type: "ingresse",
      name: "Space",
      image: "/images/Space.png"
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

  const typeFilter = getByLabelText("Select a category");
  fireEvent.change(typeFilter, { target: { value: "Space" } });

  fireEvent.submit(amountInput);

  expect(createTransaction).toHaveBeenCalledWith({
    type: "ingresse",
    amount: 20.0,
    categoryId: 2
  });
});
