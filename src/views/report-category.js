/** @jsx jsx */
import React, { useState } from "react";
import { jsx } from "@emotion/core";
import { Tabs, TabList, Tab, TabPanel, TabPanels } from "@reach/tabs";

import ReportBody from "../components/report-body";

function ReportCategory() {
  const [tabIndex, setTabIndex] = useState(0);

  const buttonStyle = {
    border: "1px solid transparent",
    outline: "none",
    background: "transparent",
    borderRadius: "4px 4px 0 0",
    marginBottom: "-1px",
    padding: ".75em 1.25em",
    fontSize: "15px",
    cursor: "pointer"
  };

  return (
    <>
      <h1
        css={{
          fontSize: "30px",
          marginBottom: "1em",
          letterSpacing: "1px"
        }}
      >
        Report Category
      </h1>
      <Tabs onChange={index => setTabIndex(index)}>
        <TabList
          css={{
            borderBottom: "1px solid rgba(0, 200, 82, 0.5)",
            '[aria-selected="true"]': {
              backgroundColor: "#fff",
              borderColor: "rgba(0, 200, 82, 0.5)",
              borderBottomColor: "transparent!important"
            }
          }}
        >
          <Tab css={buttonStyle}>Ingreesse</Tab>
          <Tab css={buttonStyle}>Withdraw</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <ReportBody key={1} type={"ingreesse"} />
          </TabPanel>
          <TabPanel>
            <ReportBody key={2} type={"withdraw"} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}

export default ReportCategory;
