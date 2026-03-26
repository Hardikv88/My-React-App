import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../features/store";
import { removeItem } from "../features/AddCard";
import CardView from "../components/CardView";

export default function CartViewScreen() {
  const cartItems = useSelector((state: RootState) => state.addItem);
  console.log(cartItems.items);
  const dispatch = useDispatch<AppDispatch>();

  const handleClick = (id: number) => {
    console.log("handleClick", id);
    dispatch(removeItem(id));
  };

  if (cartItems.items.length == 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] text-center">
        <p className="text-2xl font-semibold text-gray-600">
          No Products Found
        </p>
        <p className="text-gray-400 mt-2">
          Please try again later or add some products
        </p>
      </div>
    );
  }

  return (
    // Grid layout: 1 col on mobile, 3 on desktop

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6 bg-gray-50">
      {cartItems.items.map((item) => (
        <CardView
          key={item.id}
          isVisibleCart={true}
          productItemData={item}
          btnCallBack={() => handleClick(item.id)}
        />
      ))}
    </div>
  );
}
