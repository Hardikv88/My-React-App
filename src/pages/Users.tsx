import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Plus, Pencil, Trash2, Check, X, ListTodo } from "lucide-react";

function Users() {
  const [todos, setTodos] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editValue, setEditValue] = useState("");

  const location = useLocation();

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("todos");
    if (saved) setTodos(JSON.parse(saved));
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
    <div className="min-h-full py-8 px-4">
      <div className="w-full max-w-lg mx-auto">
        {/* Page Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2.5">
            <ListTodo size={22} className="text-indigo-500" />
            Users List
          </h1>
          <p className="text-gray-400 dark:text-gray-500 text-sm mt-1">
            {todos.length} {todos.length === 1 ? "entry" : "entries"} total
          </p>
        </div>

        {/* Card */}
        <div className="bg-white dark:bg-[#1e2a3a] rounded-2xl border border-gray-200 dark:border-gray-700/50 shadow-sm overflow-hidden">
          {/* Input Area */}
          <div className="p-4 border-b border-gray-100 dark:border-gray-700/50">
            <div className="flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && addTodo()}
                placeholder="Add a new entry..."
                className="
                  flex-1 px-3 py-2.5 text-sm rounded-xl
                  bg-gray-50 dark:bg-white/5
                  border border-gray-200 dark:border-gray-700/50
                  text-gray-900 dark:text-white
                  placeholder:text-gray-400 dark:placeholder:text-gray-600
                  focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-400
                  dark:focus:border-indigo-500/50
                  transition-all
                "
              />
              <button
                onClick={addTodo}
                className="
                  flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-semibold
                  bg-indigo-600 hover:bg-indigo-700 text-white
                  shadow-sm shadow-indigo-200 dark:shadow-indigo-900/30
                  transition-all active:scale-95
                "
              >
                <Plus size={16} />
                Add
              </button>
            </div>
          </div>

          {/* List */}
          <ul className="divide-y divide-gray-100 dark:divide-gray-700/40">
            {todos.map((todo, index) => (
              <li
                key={index}
                className="flex items-center justify-between px-4 py-3 group hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
              >
                {editIndex === index ? (
                  /* Edit mode */
                  <div className="flex w-full gap-2">
                    <input
                      autoFocus
                      value={editValue}
                      onChange={(e) => setEditValue(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && saveEdit()}
                      className="
                        flex-1 px-3 py-1.5 text-sm rounded-lg
                        bg-gray-50 dark:bg-white/5
                        border border-indigo-400 dark:border-indigo-500/60
                        text-gray-900 dark:text-white
                        focus:outline-none focus:ring-2 focus:ring-indigo-500/30
                        transition-all
                      "
                    />
                    <button
                      onClick={saveEdit}
                      className="p-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white transition-colors"
                    >
                      <Check size={15} />
                    </button>
                    <button
                      onClick={() => setEditIndex(null)}
                      className="p-1.5 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-600 dark:text-gray-300 transition-colors"
                    >
                      <X size={15} />
                    </button>
                  </div>
                ) : (
                  /* View mode */
                  <>
                    <span className="text-sm text-gray-800 dark:text-gray-200 break-all">
                      {todo}
                    </span>
                    <div className="flex gap-1.5 ml-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={() => startEdit(index)}
                        className="p-1.5 rounded-lg bg-amber-50 dark:bg-amber-500/10 hover:bg-amber-100 dark:hover:bg-amber-500/20 text-amber-600 dark:text-amber-400 transition-colors"
                      >
                        <Pencil size={14} />
                      </button>
                      <button
                        onClick={() => deleteTodo(index)}
                        className="p-1.5 rounded-lg bg-red-50 dark:bg-red-500/10 hover:bg-red-100 dark:hover:bg-red-500/20 text-red-500 dark:text-red-400 transition-colors"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </>
                )}
              </li>
            ))}
          </ul>

          {/* Empty State */}
          {todos.length === 0 && (
            <div className="py-14 px-4 text-center">
              <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center mx-auto mb-3">
                <ListTodo size={20} className="text-gray-400" />
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">
                No entries yet
              </p>
              <p className="text-gray-400 dark:text-gray-600 text-xs mt-1">
                Add one above to get started
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Users;
