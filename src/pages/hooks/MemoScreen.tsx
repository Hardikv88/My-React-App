import { useMemo, useState } from "react";

export default function MemoScreen() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);

  function expensiveTask(num: number): number {
    for (let i = 0; i <= 1000000000; i++) {}
    return num * 2;
  }

  let doubleValue = useMemo(() => expensiveTask(input), [input]);

  return (
    <div className="flex flex-col items-center justify-center px-10 py-20 rounded">
      <button
        onClick={() => setCount(count + 1)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Increment
      </button>

      <div>Count : {count}</div>

      <input
        className="border border-gray-400 rounded px-3 py-2"
        type="number"
        placeholder="enter number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <div>Double : {doubleValue}</div>
    </div>
  );
}
