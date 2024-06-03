"use client";

import React from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";

import ProjectDetails from "./ProjectDetails";

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Story",
    children: <ProjectDetails />,
  },
  {
    key: "2",
    label: "Progress Updates",
    children: "Content of Tab Pane 2",
  },
  {
    key: "3",
    label: "Stages",
    children: "Content of Tab Pane 3",
  },
];

const FundraiserTabs: React.FC = () => (
  <Tabs
    className="dark:text-white"
    defaultActiveKey="1"
    items={items}
    onChange={onChange}
    tabBarStyle={{ color: "white" }}
    tabBarExtraContent={{}}
  />
);

export default FundraiserTabs;
