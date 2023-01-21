import { useEffect, useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () =>setValue((prev)=>prev +1);
  const onChange = (event) =>setKeyword(event.target.value);
  console.log("i run all the time");
  useEffect(()=>{
    console.log("CALL THE API....");
  },[]); //지켜볼게 없으므로 처음 한번만 실행
  useEffect(()=>{
    if(keyword !== "" && keyword.length>5){
    console.log("SEARCH FOR", keyword);
    }
  },[keyword]); //keyword가 변화할 때만 실행
  useEffect(()=>{
    console.log("i run when 'counter' changes.");
  },[counter]); //counter 변화할 때만 실행
  useEffect(()=>{
    console.log("i run when keyword & counter changes.");
  },[keyword, counter]); 
  return (
    <div>
      <input 
      value={keyword}
      onChange={onChange}
      type="text" 
      placeholder="Search here..." />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
