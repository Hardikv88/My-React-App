import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function HooksScreen() {
  const navigate = useNavigate();

  return (
    // Grid layout: 1 col on mobile, 3 on desktop

    <div className="flex flex-col items-center justify-center px-10 py-20 rounded">
      <button
        onClick={() => navigate("/hooks/memo")}
        className="bg-green-700 text-white w-[500px] h-[50px] m-5 rounded font-medium"
      >
        useMemo
      </button>

      <button
        onClick={() => navigate("/hooks/callback")}
        className="bg-green-700 text-white w-[500px] h-[50px] m-5 rounded font-medium"
      >
        CallBack Hook
      </button>

      <button
        onClick={() => navigate("/hooks/useref")}
        className="bg-green-700 text-white w-[500px] h-[50px] m-5 rounded font-medium"
      >
        useRef Hook 
      </button>

      <button
        onClick={() => navigate("/hooks/counter")}
        className="bg-green-700 text-white w-[500px] h-[50px] m-5 rounded font-medium"
      >
        Redux
      </button>

      <Outlet />
    </div>
  );
}
