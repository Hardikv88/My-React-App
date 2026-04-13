import { Circles } from "react-loader-spinner";

export default function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/20 dark:bg-black/40">
      <Circles height="50" width="50" color="blue" />
    </div>
  );
}
