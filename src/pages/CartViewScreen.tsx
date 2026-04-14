import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../features/store";
import { removeItem } from "../features/AddCard";
import CardView from "../components/CardView";
import { ShoppingCart } from "lucide-react";

export default function CartViewScreen() {
  const cartItems = useSelector((state: RootState) => state.addItem);
  const dispatch = useDispatch<AppDispatch>();

  const handleClick = (id: number) => {
    dispatch(removeItem(id));
  };

  if (cartItems.items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] text-center px-4">
        <div className="w-16 h-16 rounded-2xl bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center mb-4">
          <ShoppingCart size={28} className="text-indigo-400" />
        </div>
        <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
          Your cart is empty
        </p>
        <p className="text-gray-400 dark:text-gray-500 text-sm mt-1.5">
          Browse REST APIs to add products to your cart
        </p>
      </div>
    );
  }

  return (
    <div className="p-6">
      {/* Page heading */}
      <div className="mb-6 flex items-center gap-2.5">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">Cart</h1>
        <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-100 dark:bg-indigo-500/15 text-indigo-600 dark:text-indigo-400">
          {cartItems.items.length}
        </span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cartItems.items.map((item) => (
          <CardView
            key={item.id}
            isVisibleCart={true}
            productItemData={item}
            btnCallBack={() => handleClick(item.id)}
          />
        ))}
      </div>
    </div>
  );
}
