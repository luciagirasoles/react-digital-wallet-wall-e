/** @jsx jsx */
import React, { useState } from "react";
import { jsx } from "@emotion/core";
import { Tabs, TabList, Tab, TabPanel, TabPanels } from "@reach/tabs";
import { Card } from "./../components/ui";

import ReportBody from "../components/report-body";

function ReportCategory() {
  const [tabIndex, setTabIndex] = useState(0);

  const colors = ["#00c852", "red"];
  const backgroundColor = colors[tabIndex];

  const buttonStyle = {
    border: `1px solid transparent`,
    outline: "none",
    borderRadius: "4px 4px 0 0",
    marginBottom: "-1px",
    padding: ".75em 1.25em",
    fontSize: "15px",
    cursor: "pointer"
  };

  return (
    <Card
      styles={{
        maxWidth: "520px",
        margin: "auto",
        position: "relative",
        backgroundColor: "#efefef"
      }}
    >
      <h1
        css={{
          fontSize: "30px",
          marginBottom: "1em",
          letterSpacing: "1px"
        }}
      >
        Monthly Report
      </h1>
      <Tabs onChange={index => setTabIndex(index)}>
        <TabList
          css={{
            borderBottom: `1px solid ${backgroundColor}`,
            '[aria-selected="true"]': {
              backgroundColor: backgroundColor,
              borderColor: backgroundColor,
              borderBottomColor: `${backgroundColor}!important`
            }
          }}
        >
          <Tab css={buttonStyle}>Ingreesse</Tab>
          <Tab css={buttonStyle}>Withdraw</Tab>
        </TabList>
        <TabPanels css={{ paddingBottom: 5 }}>
          <TabPanel>
            <ReportBody key={1} type={"ingreesse"} />
          </TabPanel>
          <TabPanel>
            <ReportBody key={2} type={"withdraw"} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Card>
  );
}

export default ReportCategory;
