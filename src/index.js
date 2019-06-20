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
          }
        }}
      />
      <Navbar />
      <main
        css={{
          maxWidth: "1000px",
          margin: "auto"
        }}
      >
        <Router>
          <Status path="/" />
          <New path="/new" />
          <ReportCategory path="/report-category" />
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
