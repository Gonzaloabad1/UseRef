import "./Print.css";
import { useRef, useState } from "react";
const Print = () => {
  const textInput = useRef(null);
  const [name, setName] = useState("");
  const printValue = () => {
  const inputValue = textInput.current?.value;
  if (inputValue) setName(inputValue);
  console.log("Imprime nombre:", inputValue);
  };
  return (
  <div>
  <h1>Hola soy {name}</h1>
  <input type="text" placeholder="name" ref={textInput} />
  <button onClick={printValue}>Mostrar</button>
  </div>
  );
  };
export default Print;