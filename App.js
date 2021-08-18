import React,{useState} from "react";

const App = () => {
  
  const [count, setCount] = useState(0);
  const incNum = () => {
    setCount(count+1);
    //count++;
    //console.log("clicked " + count);

  }

  return( 
  <>
  <div style={{textAlign:'center', color: 'purple',}}>
  <h1>{count}</h1>
  <button onClick={incNum}>CLICK</button>
  </div>
  </>
  );
};

export default App;
