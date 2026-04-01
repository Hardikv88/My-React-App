import { useEffect, useRef, useState } from "react";
import UseRefWatchComponent from "./UseRefWatchComponent";

export default function UseRefHookScreen() {
  const [count, setCount] = useState(0);
  let val = useRef(0);
  //   let val = 0;

  let btnRef = useRef(null);

  function handleIncrement() {
    val.current = val.current + 1;
    console.log("Value of val: ", val.current);

    // without useRef call val is not increment value
    //val = val + 1;
    //console.log("Value of val: ", val);
    setCount(count + 1);
  }

  function changeColor() {
    btnRef.current.style.backgroundColor = "Red";
  }

  useEffect(() => {
    console.log("main useEffect call...");
  });

  return (
    // Grid layout: 1 col on mobile, 3 on desktop

    <div className="flex flex-col items-center justify-center px-10 py-20 rounded">
      <h1>Counter :{count}</h1>

      <div>
        <button
          ref={btnRef}
          type="button"
          onClick={handleIncrement}
          className="bg-gray-400 text-white m-4 px-4 py-2 rounded"
        >
          Increment
        </button>
      </div>

      <div>
        <button
          type="button"
          onClick={changeColor}
          className="bg-gray-400 text-white m-4 px-4 py-2 rounded"
        >
          Change button color
        </button>
      </div>
      <div className="w-full h-[1px] bg-gray-300 my-4 m-12"></div>

      <UseRefWatchComponent />
    </div>
  );
}
