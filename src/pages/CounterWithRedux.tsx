import { useDispatch } from "react-redux";
import { AppDispatch } from "../features/store";
import {
  increment,
  decrement,
  incrementByAmount,
  reset,
} from "../features/counterRedux";

export default function CounterWithRedux() {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div style={{ textAlign: "center", marginTop: 50 }}>
      <button
        type="button"
        style={{ backgroundColor: "darkolivegreen" }}
        className="m-4 bg-gray-400 text-white px-4 py-2 rounded"
        onClick={() => dispatch(increment())}
      >
        +
      </button>
      <button
        type="button"
        className="m-4 bg-gray-400 text-white px-4 py-2 rounded"
        style={{ backgroundColor: "darkolivegreen" }}
        onClick={() => dispatch(decrement(1))}
      >
        -
      </button>
      <button
        type="button"
        style={{ backgroundColor: "darkolivegreen" }}
        className="m-4 bg-gray-400 text-white px-4 py-2 rounded"
        onClick={() => dispatch(incrementByAmount(5))}
      >
        +5
      </button>

      <button
        type="button"
        style={{ backgroundColor: "darkolivegreen" }}
        className="m-4 bg-gray-400 text-white px-4 py-2 rounded"
        onClick={() => dispatch(reset())}
      >
        Reset
      </button>
    </div>
  );
}
