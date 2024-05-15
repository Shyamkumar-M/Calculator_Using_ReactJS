import './App.css';
import {useState} from "react";
import Button from "./components/button";
import Input from './components/input';

const App = () => {

  const[text , setText] = useState("")
  const[result , setResult] = useState("")

  const addToInput = (val) => {
    setText((text) => [...text,val + " "]);
  };

  const calculateResult = () => {
    const input = text.join("");
    setResultText(math.evaluate(input));
  };

  const resetText = () => {
    setText("");
    setResultText("");
  }

  return (
    <div className="App">
      <div className="calc-wrapper">
        <Input text = {text} result={result}/>
        <div className = "rows ">
          <Button symbol="7"/>
          <Button symbol="8"/>
          <Button symbol="9"/>
          <Button symbol="/" color = "#f2a33c"/>
        </div>
        <div className = "rows ">
          <Button symbol="4"/>
          <Button symbol="5"/>
          <Button symbol="6"/>
          <Button symbol="*" color = "#f2a33c"/>
        </div>
        <div className = "rows ">
          <Button symbol="3"/>
          <Button symbol="2"/>
          <Button symbol="1"/>
          <Button symbol="-" color = "#f2a33c"/>
        </div>
        <div className = "rows ">
          <Button symbol="0"/>
          <Button symbol="."/>
          <Button symbol="="/>
          <Button symbol="+" color = "#f2a33c"/>
        </div>
        <Button symbol="Clear" color = "red"/>
      </div>
    </div>
  );
}

export default App;
