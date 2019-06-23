/** @jsx jsx */
import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import { Provider } from "react-redux";
import { Global, jsx } from "@emotion/core";

import New from "./views/new";
import ReportCategory from "./views/report-category";
import Status from "./views/status";
import Navbar from "./components/navbar";
import ShowChart from "./components/s-chart";
import store from "./store";

function App() {
  return (
    <>
      <Global
        styles={{
          body: {
            background: "#fafafa",
            fontFamily: "'Helvetica Neue', sans-serif",
            margin: 0
          },
          ul: {
            listStyle: "none",
            padding: 0,
            margin: 0
          },
          "h1,h2,h3,h4,h5,h6": {
            margin: 0,
            fontWeight: "normal"
          }
        }}
      />
      <Navbar />
      <main
        css={{
          maxWidth: "1000px",
          margin: "auto",
          padding: "0 1em"
        }}
      >
        <Router>
          <Status path="/" />
          <New path="/new" />
          <ReportCategory path="/report-category" />
          <ShowChart path="/report-chart" />
        </Router>
      </main>
    </>
  );
}

const $root = document.getElementById("root");

render(
  <Provider store={store}>
    <App />
  </Provider>,
  $root
);
