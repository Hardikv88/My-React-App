import { useCallback, useEffect, useRef, useState } from "react";
import ChildComponent from "./ChildComponent";

export default function CallBackHookScreen() {
  const [count, setCount] = useState(0);
  const previousFuncation = useRef(null);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const expensiveCalculation = useCallback(() => {
    let result = 0;
    for (let i = 0; i <= 10000000; i++) {
      result += i;
    }
    return result;
  }, [count]);

  useEffect(() => {
    if(previousFuncation.current){
        if(previousFuncation.current === expensiveCalculation){
                console.log('Funcation not re-created');
        }else{
                console.log('Funcation created');
        }
    }else{
        previousFuncation.current = expensiveCalculation;
    }
  }, [expensiveCalculation])
  

  return (
    <div className="flex flex-col items-center justify-center px-10 py-20 rounded">
      <h1>Counter :{count}</h1>

      <div>
        <button
          type="button"
          onClick={handleClick}
          className="bg-gray-400 text-white px-4 py-2 rounded"
        >
          Increment
        </button>
      </div>

      <div>
        <h1>{expensiveCalculation()}</h1>
      </div>

      <div>
        <ChildComponent ButtonName={"Chick me"} handleClick={handleClick} />
      </div>
    </div>
  );
}
function userRef(arg0: null) {
    throw new Error("Function not implemented.");
}

