import React from "react";
 const ChildComponent = React.memo(
    (props: {ButtonName: String; handleClick: () => void }) => {
  console.log('Child Component re-rendered....');
  return (
    <div className="flex flex-col items-center justify-center px-10 py-20 rounded">
        <button onClick={props.handleClick}
            type="button"
            className="bg-gray-400 text-white px-4 py-2 rounded"
          >
            {props.ButtonName}
        </button>
    </div>
  );
}
);

export default ChildComponent

//React.memo -> wrap -> component -> component re-render tabhi hoga jab props change honge nahi toh re-render nahi hoga