/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import { connect } from "react-redux";
import { navigate } from "@reach/router";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
  ComboboxOptionText
} from "@reach/combobox";
import { Input, Card, Button, inputStyles } from "../components/ui";
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

  function handleSubmit(event) {
    event.preventDefault();
    const findCategorie = categories.find(
      categorie => categorie.name === category
    );
    if (!findCategorie) {
      alert("Select a valid category");
      return;
    }
    createTransaction({
      type,
      amount,
      categoryId: findCategorie.id
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
        <div>
          <h1>New transaction</h1>
        </div>
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
          <Combobox
            onSelect={item => setCategory(item)}
            css={{
              flex: "1",
              "@media (max-width: 460px)": {
                width: "100%"
              }
            }}
          >
            <ComboboxInput
              aria-label="Select a category"
              autoComplete="off"
              placeholder="Select a category"
              onChange={event => setCategory(event.target.value)}
              value={category}
              css={inputStyles}
            />
            <ComboboxPopover
              css={{ background: "#fff", border: "1px solid #ddd" }}
            >
              <ComboboxList
                aria-labelledby="demo"
                css={{
                  paddingLeft: "0px",
                  listStyle: "none",
                  "li[data-highlighted]": {
                    background: "#ddd"
                  }
                }}
              >
                {categories
                  .filter(categorie => categorie.type === type)
                  .map(categorie => (
                    <ComboboxOption
                      value={categorie.name}
                      key={categorie.id}
                      css={{
                        display: "flex",
                        alignItems: "center",
                        marginTop: "3px",
                        padding: "5px",
                        transition: "all .3s",
                        cursor: "pointer",
                        ":hover": {
                          background: "#ddd"
                        }
                      }}
                    >
                      <img
                        css={{
                          width: "30px",
                          height: "30px",
                          marginRight: "7.5px"
                        }}
                        src={categorie.image}
                        alt={categorie.name}
                      />
                      <ComboboxOptionText />
                    </ComboboxOption>
                  ))}
              </ComboboxList>
            </ComboboxPopover>
          </Combobox>
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
    categories: Object.values(state.categories)
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
