import React from "react";
import { Tab } from "@rneui/themed";

export default NavigationMenu = ({ onSelect }) => {
  const [index, setIndex] = React.useState(0);

  return (
    <>
      <Tab
        containerStyle={{ backgroundColor: "white" }}
        value={index}
        onChange={(e) => {
          onSelect(e);
          setIndex(e);
        }}
        indicatorStyle={{
          backgroundColor: "#323232",
          height: 3,
          fontWeight: "bold",
        }}
        variant="primary"
      >
        <Tab.Item
          title="Movies"
          titleStyle={{ fontSize: 14, color: "#323232" }}
        />
        <Tab.Item
          title="Search "
          titleStyle={{ fontSize: 14, color: "#323232" }}
        />
        <Tab.Item
          title="TV Shows"
          titleStyle={{ fontSize: 14, color: "#323232" }}
        />
      </Tab>
    </>
  );
};
