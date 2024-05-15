import './App.css';
import {useState} from "react";
import Button from "./components/button";
import Input from './components/input';
import * as math from "mathjs";

const App = () => {

  const[text , setText] = useState("")
  const[result , setResult] = useState("")

  const addToText = (val) => {
    setText((text) => [...text,val + " "]);
  };

  const calculateResult = () => {
    const input = text.join("");
    setResult(math.evaluate(input));
  };

  const resetInput = () => {
    setText("");
    setResult("");
  }

  return (
    <div className="App">
      <div className="calc-wrapper">
        <Input text = {text} result={result}/>
        <div className = "rows ">
          <Button symbol="7" handleClick={addToText}/>
          <Button symbol="8" handleClick={addToText}/>
          <Button symbol="9" handleClick={addToText}/>
          <Button symbol="/" color = "#bdc0c7" handleClick={addToText} fontColor= "black"/>
        </div>
        <div className = "rows ">
          <Button symbol="4" handleClick={addToText}/>
          <Button symbol="5" handleClick={addToText}/>
          <Button symbol="6" handleClick={addToText}/>
          <Button symbol="*" color = "#bdc0c7" handleClick={addToText} fontColor= "black"/>
        </div>
        <div className = "rows ">
          <Button symbol="1" handleClick={addToText}/>
          <Button symbol="2" handleClick={addToText}/>
          <Button symbol="3" handleClick={addToText}/>
          <Button symbol="-" color = "#bdc0c7" handleClick={addToText} fontColor= "black"/>
        </div>
        <div className = "rows ">
          <Button symbol="0" handleClick={addToText}/>
          <Button symbol="." handleClick={addToText}/>
          <Button symbol="=" handleClick={calculateResult}/>
          <Button symbol="+" color = "#bdc0c7" handleClick={addToText} fontColor= "black"/>
        </div>
        <Button symbol="Clear" color = "#bdc0c7" handleClick={resetInput} fontColor= "black"/>
      </div>
    </div>
  );
}

export default App;
