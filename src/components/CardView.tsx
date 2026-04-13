import { useSelector } from "react-redux";
import { Product } from "../modals/ProductResponseModal";
import { Star, Trash2, ShoppingCart } from "lucide-react";
import { RootState } from "../features/store";

type CardViewProps = {
  readonly productItemData: Product;
  readonly isVisibleCart: Boolean;
  readonly btnCallBack?: () => void;
};

export default function CardView({
  productItemData,
  btnCallBack,
  isVisibleCart,
}: CardViewProps) {
  const selectItems = useSelector((state: RootState) => state.addItem.items);

  return (
    <div className="group bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm dark:shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Image Container */}
      <div className="relative h-64 bg-gray-100 dark:bg-gray-900 dark:shadow-lg overflow-hidden">
        <img
          src={productItemData.thumbnail}
          alt={productItemData.title}
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-gray-700 dark:text-gray-200 uppercase tracking-wider shadow-sm">
          {productItemData.brand}
        </div>
      </div>
      {/* Content Section */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white line-clamp-1">
            {productItemData.title}
          </h3>
          <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-lg">
            <Star size={14} className="fill-yellow-400 text-yellow-400" />
            <span className="text-xs font-bold text-yellow-700">
              {productItemData.rating}
            </span>
          </div>
        </div>
        <p className="text-gray-500 dark:text-gray-300 text-sm line-clamp-2 mb-4 h-10">
          {productItemData.description}
        </p>
        <div className="flex items-center justify-between mt-6">
          <div>
            <p className="text-gray-400 dark:text-gray-400 text-xs uppercase font-semibold">
              Price
            </p>
            <p className="text-2xl font-black text-teal-600 dark:text-teal-400">
              ${productItemData.price}
            </p>
          </div>
          {isVisibleCart ? (
            <button
              onClick={btnCallBack}
              className="bg-gray-900 dark:bg-teal-600 hover:bg-teal-600 dark:hover:bg-teal-700 text-white p-3 rounded-2xl transition-colors shadow-lg"
            >
              <Trash2 size={20} />
            </button>
          ) : selectItems.find(
              (cardItems) => cardItems.id == productItemData.id,
            ) ? (
            <button
              onClick={btnCallBack}
              disabled
              className="bg-gray-900 text-white p-3 rounded-2xl shadow-lg opacity-50 cursor-not-allowed"
            >
              <ShoppingCart size={20} />
            </button>
          ) : (
            <button
              onClick={btnCallBack}
              className="bg-gray-900 hover:bg-teal-600 text-white p-3 rounded-2xl transition-colors shadow-lg"
            >
              <ShoppingCart size={20} />
            </button>
          )}
        </div>
        {/* Availability Status */}
        <div className="mt-4 pt-4 border-t border-gray-50 flex items-center gap-2">
          <div
            className={`w-2 h-2 rounded-full ${productItemData.availabilityStatus === "In Stock" ? "bg-green-500" : "bg-red-500"}`}
          />
          <span className="text-xs font-medium text-gray-500">
            {productItemData.availabilityStatus}
          </span>
        </div>
      </div>
    </div>
  );
}
