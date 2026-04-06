import { useState } from "react";
import TabsBar from "./TabsBar";
import "./ListGroup.css";

function ListGroup() {
  const items: string[] = [
    "Rajkot",
    "Ahmedabad",
    "Surat",
    "Vadodara",
    "Gandhinagar",
  ];
  const [selectIndex, setSelectIndex] = useState<number | null>(0);

  return (
    <>
      <div className="list-group-container">
        <h1 className="list-group-title">List Group</h1>
        <ul className="list-group-list">
          {items.length === 0 && <p>No items found.</p>}
          {items.map((item, index) => (
            <button
              key={item}
              className={`list-group-btn${index === selectIndex ? " selected" : ""}`}
              onClick={() => setSelectIndex(index)}
            >
              {item}
            </button>
          ))}
        </ul>
      </div>
      <h1 className="tabs-bar-title">Tabs Bar Component Below</h1>
      <TabsBar />
    </>
  );
}

export default ListGroup;
