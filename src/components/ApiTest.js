import React from "react";
import axios from "axios";


const ApiTest = () => {
  const [count, setCount] = React.useState(0);
  const [input, setInput] = React.useState("");
  const [Calendar, setCalendar] = React.useState("");

  React.useEffect(() => {
    getCalendar();
   
  }, []); 

  const getCalendar = () => {
    axios
      .get("https://api.cronofy.com/v1/events")
      .then((results) => setCalendar(results.data.calendar))
      .catch((err) => console.log(err.message));
  };

  //when other values change, the first function gets triggered again
  //   console.log("This gets called any time a value is updated");
  
  return (
    <div>
      <h2>This is API</h2>
      <p>{Calendar}</p>

      <button onClick={getCalendar}> Calendar </button>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <p>{count}</p>
      <label>Name</label>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
    </div>
  );
};

export default ApiTest;