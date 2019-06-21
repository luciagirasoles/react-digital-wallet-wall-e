/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import { connect } from "react-redux";
import { navigate } from "@reach/router";
import { Input, Card, Select, Button } from "../components/ui";
import { addTransaction } from "../actions";

export function New({ categories, createTransaction }) {
  const [type, setType] = React.useState("ingresse");
  const [amount, setAmount] = React.useState("");
  const [category, setCategory] = React.useState("");

  function handleTypeChange(event) {
    setType(event.target.value);
  }

  function handleAmountChange(event) {
    setAmount(parseFloat(event.target.value));
  }

  function handleCategoryChange(event) {
    setCategory(parseInt(event.target.value));
  }

  function handleSubmit(event) {
    event.preventDefault();
    createTransaction({
      type,
      amount,
      categoryId: category
    });
    navigate("/");
  }

  const styleLabel = {
    marginRight: "1em",
    minWidth: "115px",
    "@media (max-width: 460px)": {
      display: "block",
      margin: "1rem 0"
    }
  };

  const styleField = {
    margin: "2rem 0",
    display: "flex",
    alignItems: "center",
    "@media (max-width: 460px)": {
      flexDirection: "column",
      alignItems: "initial",
      margin: "1rem 0"
    }
  };

  return (
    <Card
      css={{
        margin: "auto",
        maxWidth: "500px"
      }}
    >
      <form onSubmit={handleSubmit}>
        <div css={styleField}>
          <label css={styleLabel}>Type: </label>
          <label>
            <input
              type="radio"
              name="ingresse"
              value="ingresse"
              checked={type === "ingresse"}
              onChange={handleTypeChange}
            />
            Ingresse
          </label>
          <label>
            <input
              type="radio"
              name="withdraw"
              value="withdraw"
              checked={type === "withdraw"}
              onChange={handleTypeChange}
            />
            Withdraw
          </label>
        </div>
        <div css={styleField}>
          <label htmlFor="amount" css={styleLabel}>
            Amout:{" "}
          </label>
          <Input
            aria-label="Write the amount"
            placeholder="1.00"
            type="number"
            id="amount"
            name="amount"
            required
            value={amount}
            onChange={handleAmountChange}
          />
        </div>
        <div css={styleField}>
          <label htmlFor="filter" css={styleLabel}>
            Select Category:
          </label>
          <Select
            styles={{
              container: {
                flex: "1",
                "@media (max-width: 460px)": {
                  width: "100%"
                }
              }
            }}
            id="filter"
            name="filter"
            aria-label="Select a filter"
            onChange={handleCategoryChange}
            value={category}
            required
          >
            <option value="">-- Select a category --</option>
            {categories
              .filter(categorie => categorie.type === type)
              .map(categorie => (
                <option value={categorie.id} key={categorie.id}>
                  {categorie.name}
                </option>
              ))}
          </Select>
        </div>
        <div
          css={{
            margin: "2rem 0"
          }}
        >
          <Button type="submit">Save</Button>
        </div>
      </form>
    </Card>
  );
}

function mapState(state) {
  return {
    categories: Object.values(state.categories),
    data: "space"
  };
}

function mapDispatch(dispatch) {
  return {
    createTransaction(transaction) {
      return dispatch(addTransaction(transaction));
    }
  };
}

export default connect(
  mapState,
  mapDispatch
)(New);
