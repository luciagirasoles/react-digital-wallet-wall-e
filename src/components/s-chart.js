import React, { useRef, useEffect } from "react";
import Chart from "chart.js";
import ChartPluginLabels from "chartjs-plugin-labels";
import { connect } from "react-redux";

export function ShowChart({ categories, transaction }) {
  const container = {
    width: "30vw",
    height: "30vh",
    background: "white",
    padding: "30px 20px 10px 20px",
    borderRadius: "10px",
    boxShadow: "0px 10px 0px -5px rgba(0,0,0,0.3)"
  };
  const currentMonth = new Date().getMonth();
  const transactionsCurrentMonth = Object.values(transaction).filter(
    value => new Date(value.date).getMonth() === currentMonth
  );

  const chartRefIngresse = useRef(null);
  const chartRefWithdraw = useRef(null);
  useEffect(() => {
    let amountPerCategory = { ingresse: {}, withdraw: {} };
    let amount = 0;
    let row, category;
    for (let item in transactionsCurrentMonth) {
      row = transactionsCurrentMonth[item];
      category = categories[row.categoryId].name;
      amount = amountPerCategory[row.type][category]
        ? amountPerCategory[row.type][category]
        : 0;
      amountPerCategory[row.type][category] = amount + row.amount;
    }
    const currentMonthString = new Date().toLocaleString("en-US", {
      month: "long"
    });

    const chart = type => {
      return {
        type: "doughnut",
        data: {
          labels: Object.keys(amountPerCategory[type]),
          datasets: [
            {
              label: `${type}`,
              data: Object.values(amountPerCategory[type]),
              backgroundColor: [
                "#64c955",
                "#4cc0c0",
                "#f1e05b",
                "#f16083",
                "#4c6bc1",
                "purple",
                "skyblue",
                "pink"
              ]
            }
          ]
        },
        options: {
          title: {
            display: true,
            text: `${type.charAt(0).toUpperCase() +
              type.slice(1)} ${currentMonthString}`
          },
          plugins: {
            labels: {
              render: "percentage",
              precision: 2
            }
          }
        }
      };
    };

    const myChartRefIngresse = chartRefIngresse.current.getContext("2d");
    new Chart(myChartRefIngresse, chart("ingresse"));

    const myChartRefWithdraw = chartRefWithdraw.current.getContext("2d");
    new Chart(myChartRefWithdraw, chart("withdraw"));
  }, [categories, transactionsCurrentMonth]);

  return (
    <div css={container}>
      <canvas id="CanvasIngresse" ref={chartRefIngresse} />
      <canvas id="CanvasWithdraw" ref={chartRefWithdraw} />
    </div>
  );
}

function mapState(state) {
  return state;
}

export default connect(
  mapState,
  null
)(ShowChart);
