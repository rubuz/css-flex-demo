import { useState } from "react";
import Box from "./components/Box";
import "./App.css";

function App() {
  const [flexDirection, setFlexDirection] = useState("row");
  const [justifyContent, setJustifyContent] = useState("flex-start");
  const [alignItems, setAlignItems] = useState("flex-start");

  const handleChange = (event, settingsFunction) => {
    settingsFunction(event.target.value);
  };

  const containerStyles = {
    flexDirection,
    justifyContent,
    alignItems,
  };

  return (
    <div className="App">
      <h1>CSS FlexBox Demo</h1>
      <div className="container" style={containerStyles}>
        <Box text={"This"} bg={"#E88D67"} />
        <Box text={"is"} bg={"#3083DC"} />
        <Box text={"Flex"} bg={"#BB999C"} />
        <Box text={"Box"} bg={"#C0E6DE"} />
        <Box text={"Demo"} bg={"#B2C9AB"} />
      </div>
      <div className="input-container">
        <label>
          Flex Direction:
          <select
            value={flexDirection}
            onChange={(event) => handleChange(event, setFlexDirection)}
          >
            <option value="row">Row</option>
            <option value="row-reverse">Row Reverse</option>
            <option value="column">Column</option>
            <option value="column-reverse">Column Reverse</option>
          </select>
        </label>
        <label>
          Justify Content:
          <select
            value={justifyContent}
            onChange={(event) => handleChange(event, setJustifyContent)}
          >
            <option value="flex-start">Flex Start</option>
            <option value="flex-end">Flex End</option>
            <option value="center">Center</option>
            <option value="space-between">Space Between</option>
            <option value="space-around">Space Around</option>
          </select>
        </label>
        <label>
          Align Items:
          <select
            value={alignItems}
            onChange={(event) => handleChange(event, setAlignItems)}
          >
            <option value="flex-start">Flex Start</option>
            <option value="flex-end">Flex End</option>
            <option value="center">Center</option>
            <option value="baseline">Baseline</option>
            <option value="stretch">Stretch</option>
          </select>
        </label>
      </div>
    </div>
  );
}

export default App;
