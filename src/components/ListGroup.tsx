import { useState } from "react";
import TabsBar from "./TabsBar";

function ListGroup() {
  // Type: string array
  const items: string[] = [
    "Rajkot",
    "Ahmedabad",
    "Surat",
    "Vadodara",
    "Gandhinagar",
  ];

  // Type: number (or null if nothing selected)
  const [selectIndex, setSelectIndex] = useState<number | null>(0);
  return (
    <>
      <div>
        <h1>List Group</h1>
        <ul className="list-group">
          {items.length === 0 && <p>No items found.</p>}

          {items.map((item, index) => (
            <button
              key={item}
              style={{ backgroundColor: index === selectIndex ? "red" : "white" }}
              onClick={() => setSelectIndex(index)}
            >
              {item}
            </button>
          ))}
        </ul>
      </div>
      <h1>Tabs Bar Component Below</h1>
      <TabsBar />
    </>
  );
}

export default ListGroup;
