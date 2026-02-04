import { useState } from "react";
import TabsBar from "./TabsBar.js";
import React from "react";

function ListGroup() {
  const items = ["Rajkot", "Ahmedabad", "Surat", "Vadodara", "Gandhinagar"];
  const [selectIndex, setSelectIndex] = useState("");

  return (
    <>
      <div>
        <h1>List Group</h1>
        <ul className="list-group">
          {items.length === 0 && <p>No items found.</p>}
          {items.map((item, index) => (
            <button
              key={item}
              className={
                index === selectIndex
                  ? "list-group-item active"
                  : "list-group-item"
              }
              onClick={() => {
                setSelectIndex(index);
              }}
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
