import React, {useState} from "react";
function CountButton(){
    const [count, setCount] = useState(1)
    function handleClick(){
        setCount(count + 1);
    }
return(
    <button onClick={handleClick}>click {count}</button>
   )

}

function App(){
return(<><CountButton/></>)
}




export default App 