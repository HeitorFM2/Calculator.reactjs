import { Container, Row, Title } from "./styles/syles";
import Inputs from "./components/Input";
import Buttons from "./components/Button";

import { useState } from "react";

function App() {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [fistNumber, setFirstNumber] = useState("0");
  const [operation, setOperation] = useState("");

  const handleClear = () => {
    setCurrentNumber("0");
    setFirstNumber("0");
    setOperation("");
  };

  const handleAddNumber = (number) => {
    setCurrentNumber((prev) => `${prev === "0" ? "" : prev}${number}`);
  };

  const handleDelNumber = () => {
    if (currentNumber.length === 1) {
      setCurrentNumber('0');
      setFirstNumber('0');
    } else {
      setCurrentNumber(currentNumber.slice(0, -1));
    }
  };

  const handleSumNumbers = () => {
    if (fistNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("+");
    } else {
      let num1 = String(fistNumber).replace(",", ".");
      let num2 = String(currentNumber).replace(",", ".");
      const sum = Number(num1) + Number(num2);
      setCurrentNumber(String(sum));
      setOperation("");
    }
  };

  const handleSubNumbers = () => {
    if (fistNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("-");
    } else {
      let num1 = String(fistNumber).replace(",", ".");
      let num2 = String(currentNumber).replace(",", ".");
      const sub = Number(num1) - Number(num2);
      setCurrentNumber(String(sub));
      setOperation("");
    }
  };

  const handleDivisionNumbers = () => {
    if (fistNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("/");
    } else {
      let num1 = String(fistNumber).replace(",", ".");
      let num2 = String(currentNumber).replace(",", ".");
      const divi = Number(num1) / Number(num2);
      setCurrentNumber(String(divi));
      setOperation("");
    }
  };

  const handleMultipleNumbers = () => {
    if (fistNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("*");
    } else {
      let num1 = String(fistNumber).replace(",", ".");
      let num2 = String(currentNumber).replace(",", ".");
      const multi = Number(num1) * Number(num2);
      setCurrentNumber(String(multi));
      setOperation("");
    }
  };

  const handlePercentNumbers = () => {
    const perc = Number(currentNumber) / 100;
    let result = String(perc).replace(".", ",");
    setCurrentNumber(result);
  };

  const handleEquals = () => {
    if (fistNumber !== "0" && operation !== "" && currentNumber !== "0") {
      switch (operation) {
        case "+":
          handleSumNumbers();
          break;
        case "-":
          handleSubNumbers();
          break;
        case "/":
          handleDivisionNumbers();
          break;
        case "*":
          handleMultipleNumbers();
          break;
        default:
          break;
      }
    }
  };

  const titleText = "<CALCULATOR/>";
  return (
    <div className="App">
      <Container>
        <div>
          <Title>{titleText}</Title>

          <Inputs value={currentNumber} />
          

          <Row>
            <Buttons label={"%"} onClick={handlePercentNumbers} />
            <Buttons label={"CE"} onClick={handleClear} />
            <Buttons label={"C"} onClick={handleClear} />
            <Buttons label={"DEL"} onClick={handleDelNumber} />
          </Row>
          <Row>
            <Buttons label={1} onClick={() => handleAddNumber("1")} />
            <Buttons label={2} onClick={() => handleAddNumber("2")} />
            <Buttons label={3} onClick={() => handleAddNumber("3")} />
            <Buttons label={"+"} onClick={handleSumNumbers} />
          </Row>
          <Row>
            <Buttons label={4} onClick={() => handleAddNumber("4")} />
            <Buttons label={5} onClick={() => handleAddNumber("5")} />
            <Buttons label={6} onClick={() => handleAddNumber("6")} />
            <Buttons label={"-"} onClick={handleSubNumbers} />
          </Row>
          <Row>
            <Buttons label={7} onClick={() => handleAddNumber("7")} />
            <Buttons label={8} onClick={() => handleAddNumber("8")} />
            <Buttons label={9} onClick={() => handleAddNumber("9")} />
            <Buttons label={"/"} onClick={handleDivisionNumbers} />
          </Row>
          <Row>
            <Buttons label={"X"} onClick={handleMultipleNumbers} />
            <Buttons label={0} onClick={() => handleAddNumber("0")} />
            <Buttons label={","} onClick={() => handleAddNumber(",")} />
            <Buttons label={"="} onClick={handleEquals}/>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default App;
