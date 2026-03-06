import React, { useState } from 'react';


function Settings(){
  const [color, setColor] = useState<string>("blue");

  return (
    <div
      className="w-full min-h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <h1 className="text-white text-2xl p-4">Setting page</h1>

      
      <div className="fixed bottom-20 inset-x-0 flex justify-center px-2">
        <div className="flex gap-4 shadow-lg bg-white rounded-lg px-3 py-2">
          <button className="outline-none px-4 py-2 rounded-full bg-blue-500" onClick={() => setColor("blue")} >Blue</button>
          <button className="outline-none px-4 py-2 rounded-full bg-red-500" onClick={() => setColor("red")} >Red</button>
          <button className="outline-none px-4 py-2 rounded-full bg-green-500" onClick={() => setColor("green")} >Green</button>
          <button className="outline-none px-4 py-2 rounded-full bg-yellow-500" onClick={() => setColor("yellow")} >Yellow</button>
                    <button className="outline-none px-4 py-2 rounded-full bg-pink-500" onClick={() => setColor("pink")} >Pink</button>
                              <button className="outline-none px-4 py-2 rounded-full bg-gray-500" onClick={() => setColor("gray")} >Gray</button>
        </div>
      </div>
    </div>
  );
};


export default Settings;
