/** @jsx jsx */
import React, { useState } from "react";
import { jsx } from "@emotion/core";
import { Tabs, TabList, Tab, TabPanel, TabPanels } from "@reach/tabs";

import ReportBody from "../components/report-body";

function ReportCategory() {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <>
      <div>ReportCategory</div>
      <Tabs
        onChange={index => setTabIndex(index)}
        style={{
          color: "white",
          backgroundColor: "black"
        }}
      >
        <TabList>
          <Tab>Ingreesse</Tab>
          <Tab>Withdraw</Tab>
        </TabList>
        <TabPanels style={{ padding: 20 }}>
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
