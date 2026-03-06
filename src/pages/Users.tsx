import { useEffect, useState } from "react";

function Users() {
  const [todos, setTodos] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");

  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editValue, setEditValue] = useState("");

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("todos");
    if (saved) {
      setTodos(JSON.parse(saved));
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (!input.trim()) return;

    setTodos([...todos, input]);
    setInput("");
  };

  const deleteTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const startEdit = (index: number) => {
    setEditIndex(index);
    setEditValue(todos[index]);
  };

  const saveEdit = () => {
    if (!editValue.trim()) return;
    if (editIndex === null) return;

    const updated = [...todos];
    updated[editIndex] = editValue;

    setTodos(updated);
    setEditIndex(null);
    setEditValue("");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start py-10 px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-6">

        {/* Title */}
        <h2 className="text-2xl font-bold text-center mb-6">
          Users List
        </h2>

        {/* Input Area */}
        <div className="flex gap-2 mb-4">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter value..."
            className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            onClick={addTodo}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Add
          </button>
        </div>

        <hr className="mb-4" />

        {/* List */}
        <ul className="space-y-3">
          {todos.map((todo, index) => (
            <li
              key={index}
              className="flex items-center justify-between bg-gray-50 border rounded-lg px-3 py-2"
            >
              {editIndex === index ? (
                <div className="flex w-full gap-2">
                  <input
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    className="flex-1 border rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />

                  <button
                    onClick={saveEdit}
                    className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                  >
                    Save
                  </button>

                  <button
                    onClick={() => setEditIndex(null)}
                    className="bg-gray-400 text-white px-3 py-1 rounded hover:bg-gray-500"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <>
                  <span className="text-gray-800 break-all">
                    {todo}
                  </span>

                  <div className="flex gap-2 ml-2">
                    <button
                      onClick={() => startEdit(index)}
                      className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => deleteTodo(index)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>

        {/* Empty State */}
        {todos.length === 0 && (
          <p className="text-center text-gray-500 mt-6">
            No users added yet.
          </p>
        )}
      </div>
    </div>
  );
}

export default Users;