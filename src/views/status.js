/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import { connect } from "react-redux";
import { Link } from "@reach/router";
import { Card, Button } from "./../components/ui";
import { HeaderButton } from "./../components/ui";
import { FaChevronRight } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { FaCaretUp } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

function Status({ totals, topCategories }) {
  const currentMonth = new Date().toLocaleString("en-US", { month: "long" });
  const colorGreen = "#00c852";

  const cssHeader = {
    backgroundColor: "#00c853",
    padding: 24,
    color: "white",
    borderRadius: "4px 4px 0 0",
    textShadow: "1px 1px 1px rgba(0,0,0,0.3)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  };
  const cssSectionCard = {
    backgroundColor: "white",
    margin: 16,
    borderRadius: 4
  };
  const cssArrowRight = {
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    fontSize: 18,
    margin: "auto",
    height: 18,
    color: colorGreen
  };
  const cssCurrentMonth = {
    marginBottom: 8,
    fontSize: 12,
    textAlign: "center"
  };

  const cssMonthResumeList = {
    display: "flex",
    margin: 0,
    justifyContent: "center",
    textAlign: "center"
  };

  const cssMonthResumeItem = {
    flex: "1 1 0",
    fontSize: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  };

  const cssCurrentTime = {
    marginBottom: 8,
    borderRadius: 4
  };

  const cssListCategories = {
    display: "flex",
    alignItems: "center",
    margin: "16px 0",
    justifyContent: "space-between"
  };
  const cssImgCategory = {
    marginRight: 8
  };
  const cssPriceCategories = {
    marginLeft: "auto"
  };
  const cssFaCarets = { fontSize: 24, marginLeft: 4 };

  return (
    <Card
      styles={{
        maxWidth: "520px",
        margin: "auto",
        position: "relative",
        paddingBottom: 104,
        backgroundColor: "#efefef"
      }}
    >
      <div css={{ margin: "-2rem" }}>
        <section
          css={{
            ...cssHeader,
            backgroundColor: totals.total < 0 ? "red" : colorGreen
          }}
        >
          <span css={{ fontSize: 14 }}>Total</span>
          <span css={{ fontSize: 32 }}>$ {totals.total}</span>
        </section>
        <section>
          <div css={cssSectionCard}>
            <HeaderButton>
              <Link
                to="/report-category"
                css={{ textDecoration: "none", color: "inherit" }}
              >
                <h4
                  css={{
                    margin: 0,
                    lineHeight: "1.5",
                    transition: "all 0.25s"
                  }}
                >
                  Month resume
                </h4>
                <p css={{ fontSize: 12, margin: 0, color: "#777777" }}>
                  Click to see a detailed resume
                </p>
                <span css={cssArrowRight}>
                  <FaChevronRight />
                </span>
              </Link>
            </HeaderButton>
            <div css={{ padding: "24px 0" }}>
              <h3 css={cssCurrentMonth}>
                <time css={cssCurrentTime}>{currentMonth.toUpperCase()}</time>
              </h3>
              <ul css={cssMonthResumeList}>
                <li css={cssMonthResumeItem}>
                  <span>$ {totals.totalWithdraw}</span>
                  <FaCaretDown css={{ ...cssFaCarets, color: "red" }} />
                </li>
                <li css={cssMonthResumeItem}>
                  <span>$ {totals.totalIngreesse}</span>
                  <FaCaretUp css={{ ...cssFaCarets, color: colorGreen }} />
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <div css={cssSectionCard}>
            <HeaderButton>
              <Link
                to="/report-chart"
                css={{ textDecoration: "none", color: "inherit" }}
              >
                <h4
                  css={{
                    margin: 0,
                    lineHeight: "1.5",
                    transition: "all 0.25s"
                  }}
                >
                  Category resume
                </h4>
                <p css={{ fontSize: 12, margin: 0, color: "#777777" }}>
                  Click to see a detailed categories oh this month
                </p>
                <span css={cssArrowRight}>
                  <FaChevronRight />
                </span>
              </Link>
            </HeaderButton>
            <div css={{ padding: "8px 16px", fontSize: 14 }}>
              <ul>
                <li css={cssListCategories}>
                  <img
                    css={cssImgCategory}
                    src={topCategories.withdraw.image}
                    width="20"
                    alt="Icon of category"
                  />
                  <span>{topCategories.withdraw.name}</span>
                  <span css={cssPriceCategories}>
                    $ {topCategories.withdraw.amount}
                    <FaCaretDown css={{ color: "red" }} />
                  </span>
                </li>
                <li css={cssListCategories}>
                  <img
                    css={cssImgCategory}
                    src={topCategories.ingresse.image}
                    width="20"
                    alt="Icon of category"
                  />
                  <span>{topCategories.ingresse.name}</span>
                  <span css={cssPriceCategories}>
                    $ {topCategories.ingresse.amount}{" "}
                    <FaCaretUp css={{ color: colorGreen }} />
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <Link
          css={{
            width: 42,
            height: 42,
            borderRadius: "50%",
            display: "flex",
            backgroundColor: colorGreen,
            textDecoration: "none",
            color: "white",
            fontSize: 18,
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            bottom: 24,
            right: 0,
            left: 0,
            margin: "auto"
          }}
          to="/new"
        >
          <FaPlus />
        </Link>
      </div>
    </Card>
  );
}
function mapState(state) {
  const arrTransactions = Object.values(state.transaction);
  const categories = state.categories;
  let total = 0;
  let totalIngreesse = 0;
  let totalWithdraw = 0;
  const currentMonth = new Date().getMonth();

  total = arrTransactions.reduce((accu, current) => {
    if (current.type === "ingresse") {
      totalIngreesse += current.amount;
      return accu + current.amount;
    }
    totalWithdraw += current.amount;
    return accu - current.amount;
  }, 0);

  const categoriesIdOfThisMonthWithAmount = arrTransactions
    .filter(trans => new Date(trans.date).getMonth() === currentMonth)
    .reduce((ac, el) => {
      const key = el.categoryId;
      const value = el.amount;
      if (ac.hasOwnProperty(key)) {
        ac[key] += value;
      } else {
        ac[key] = value;
      }
      return ac;
    }, {});

  const categoriesOfThisMonth = Object.keys(categoriesIdOfThisMonthWithAmount);
  const topCategories = categoriesOfThisMonth.reduce(
    (accum, idCategory) => {
      let currentType = categories[idCategory].type;
      if (accum[currentType].name) {
        if (
          accum[currentType].amount <
          categoriesIdOfThisMonthWithAmount[idCategory]
        ) {
          accum[currentType].name = categories[idCategory].name;
          accum[currentType].image = categories[idCategory].image;
          accum[currentType].amount =
            categoriesIdOfThisMonthWithAmount[idCategory];
        }
      } else {
        accum[currentType].name = categories[idCategory].name;
        accum[currentType].image = categories[idCategory].image;
        accum[currentType].amount =
          categoriesIdOfThisMonthWithAmount[idCategory];
      }
      return accum;
    },
    {
      ingresse: {},
      withdraw: {}
    }
  );

  return {
    totals: { total, totalIngreesse, totalWithdraw },
    /* topCategories contains:
      ingresse: { name: "categoryName", amount: 0, image: "" },
      withdraw: { name: "categoryName", amount: 0, image: "" }
    */
    topCategories: topCategories
  };
}

export default connect(mapState)(Status);
