import React, { useRef, useEffect } from "react";
import Chart from "chart.js";
import ChartPluginLabels from "chartjs-plugin-labels";
import { connect } from "react-redux";

function ShowChart({ categories, transaction }) {
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

  const chartRef = useRef(null);
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

    const myChartRef = chartRef.current.getContext("2d");
    new Chart(myChartRef, {
      type: "doughnut",
      data: {
        labels: Object.keys(amountPerCategory.withdraw),
        datasets: [
          {
            label: "Withdraw",
            data: Object.values(amountPerCategory.withdraw),
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
          text: `Withdraw ${currentMonthString}`
        },
        plugins: {
          labels: {
            render: "percentage",
            precision: 2
          }
        }
      }
    });
  }, [categories, transactionsCurrentMonth]);
  return (
    <div css={container}>
      <canvas id="myChart" ref={chartRef} />
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
