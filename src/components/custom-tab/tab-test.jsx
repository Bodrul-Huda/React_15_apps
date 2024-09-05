import Tabs from "./tabs";

function RandomComponent() {
  return <h1>Some Random Component</h1>;
}

export default function TabTest() {
  const tabs = [
    {
      label: "Tab 1",
      content: "Content from tab 1",
    },
    {
      label: "Tab 2",
      content: "Content from tab 2",
    },
    {
      label: "Tab 3",
      content: <RandomComponent />,
    },
  ];

  function handleChange(currentTabIndex) {
    console.log(currentTabIndex);
  }

  return <Tabs tabsContent={tabs} onChange={handleChange} />;
}
