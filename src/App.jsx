import Header from "./components/Header"
import ResultTable from "./components/ResultTable";
import UserInput from "./components/UserInput"
import { useState } from "react";

function App() {

  const [input, setInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  function updateInput(inputId, newValue) {
    setInput((prevInput) => {
      return {
        ...prevInput,
        [inputId]: +newValue
      }
    })
  }

  const isValid = input.duration >=1;

  return (
    <>
      <Header />
      <UserInput updateInput={updateInput} input={input} />
      {isValid ? <ResultTable input={input}/> : <p className="center">Please enter valid input data!</p>}
    </>
  )
}

export default App
