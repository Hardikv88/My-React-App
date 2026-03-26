import { useEffect, useState } from "react";
import apiHelper from "../services/ApiHelper";
import {
  Product,
  ProductResponseModal,
} from "../services/modals/ProductResponseModal";
import { Circles } from "react-loader-spinner";
import { useDispatch } from "react-redux";
import { AppDispatch} from "../features/store";
import { addItem } from "../features/AddCard";
import CardView from "../components/CardView";
const Page_Size = 6;

export default function RestApis() {
  const [isLoading, setLoading] = useState(false);
  const [productsData, setProductsData] = useState<Product[] | []>([]);
  const totalProducts = productsData.length;
  const totalPages = Math.ceil(totalProducts / Page_Size);
  const [currentPage, setCurrentPage] = useState(1);
  const startPosition = (currentPage - 1) * Page_Size;
  const endPosition = startPosition + Page_Size;

  const dispatch = useDispatch<AppDispatch>();

 
  useEffect(() => {
    getProducts();
  }, []);

  // GET Example
  const getProducts = async () => {
    try {
      setLoading(true);
      const response = await apiHelper
        .get<ProductResponseModal>("/products?limit=50")
        .catch((err) => {
          console.log("Errr", err.message);
        });

      setProductsData(response.data.products);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  const onPageChange = (n: number) => {
    setCurrentPage(n);
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/20">
        <Circles height="50" width="50" color="blue" />
      </div>
    );
  }

  const handleClick = (data: Product) => {
    dispatch(addItem(data));
  };

  return (
    // Grid layout: 1 col on mobile, 3 on desktop
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6 bg-gray-50">
        {productsData.slice(startPosition, endPosition).map((item) => (
          <CardView
             key={item.id}
            isVisibleCart={false}
            productItemData={item}
            btnCallBack={() => handleClick(item)}
          />
        ))}
      </div>
      <div className="flex items-center justify-center gap-2 my-10">
        {/* Previous Button */}
        <button
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
          className="px-4 py-2 rounded-lg border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition"
        >
          Previous
        </button>
        {/* Page Numbers */}
        <div className="flex gap-1">
          {[...Array(totalPages).keys()].map((n) => {
            const pageNum = n + 1;
            const isActive = currentPage === pageNum;
            return (
              <button
                key={pageNum}
                onClick={() => onPageChange(pageNum)}
                className={`w-10 h-10 rounded-lg font-semibold transition-all ${
                  isActive
                    ? "bg-teal-600 text-white shadow-md scale-110"
                    : "text-gray-600 hover:bg-gray-100 border border-transparent"
                }`}
              >
                {pageNum}
              </button>
            );
          })}
        </div>

        {/* Next Button */}
        <button
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          className="px-4 py-2 rounded-lg border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition"
        >
          Next
        </button>
      </div>
    </>
  );
}
