import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { GLOBAL_TEXT } from "../../constants/Strings";

export default function HooksScreen() {
  const navigate = useNavigate();

  return (
    // Grid layout: 1 col on mobile, 3 on desktop

    <div className="flex flex-col items-center justify-center px-10 py-20 rounded">
      <button
        onClick={() => navigate("/hooks/memo")}
        className="bg-indigo-600 hover:bg-indigo-700
                  text-white shadow-sm shadow-indigo-200 dark:shadow-indigo-900/30 w-[500px] h-[50px] m-5 rounded font-medium"
      >
        {GLOBAL_TEXT.USE_MEMO_HOOK}
      </button>

      <button
        onClick={() => navigate("/hooks/callback")}
        className="bg-indigo-600 hover:bg-indigo-700
                  text-white shadow-sm shadow-indigo-200 dark:shadow-indigo-900/30 w-[500px] h-[50px] m-5 rounded font-medium"
      >
        {GLOBAL_TEXT.CALL_BACK_HOOK}
      </button>

      <button
        onClick={() => navigate("/hooks/useref")}
        className="bg-indigo-600 hover:bg-indigo-700
                  text-white shadow-sm shadow-indigo-200 dark:shadow-indigo-900/30 w-[500px] h-[50px] m-5 rounded font-medium"
      >
       {GLOBAL_TEXT.USE_REF_HOOK}
      </button>

      <button
        onClick={() => navigate("/hooks/counter")}
        className="bg-indigo-600 hover:bg-indigo-700
                  text-white shadow-sm shadow-indigo-200 dark:shadow-indigo-900/30 w-[500px] h-[50px] m-5 rounded font-medium"
      >
        {GLOBAL_TEXT.REDUX}
      </button>

      <Outlet />
    </div>
  );
}
