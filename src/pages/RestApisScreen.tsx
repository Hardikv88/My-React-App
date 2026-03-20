import { useEffect, useState } from "react";
import { Star, ShoppingCart } from "lucide-react";
import apiHelper from "../services/ApiHelper";
import {
  Product,
  ProductResponseModal,
} from "../services/modals/ProductResponseModal";
import { Circles } from "react-loader-spinner";
const Page_Size = 5;

export default function RestApis() {
  const [isLoading, setLoading] = useState(false);
  const [productsData, setProductsData] = useState<Product[] | []>([]);
  const totalProducts = productsData.length;
  const totalPages = Math.ceil(totalProducts / Page_Size);
  const [currentPage, setCurrentPage] = useState(1);
  const startPosition = (currentPage - 1) * Page_Size;
  const endPosition = startPosition + Page_Size;
  console.log({ startPosition, endPosition, currentPage });

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
      console.log("This is new response ::");
      setProductsData(response.data.products);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  const onPageChange = (n: number) => {
    setCurrentPage(n);
    console.log(n);
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/20">
        <Circles height="50" width="50" color="blue" />
      </div>
    );
  }

  return (
    // Grid layout: 1 col on mobile, 3 on desktop
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6 bg-gray-50">
        {productsData.slice(startPosition, endPosition).map((item) => (
          <div
            key={item.id}
            className="group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            {/* Image Container */}
            <div className="relative h-64 bg-gray-100 overflow-hidden">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-gray-700 uppercase tracking-wider shadow-sm">
                {item.brand}
              </div>
            </div>
            {/* Content Section */}
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-gray-900 line-clamp-1">
                  {item.title}
                </h3>
                <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-lg">
                  <Star size={14} className="fill-yellow-400 text-yellow-400" />
                  <span className="text-xs font-bold text-yellow-700">
                    {item.rating}
                  </span>
                </div>
              </div>
              <p className="text-gray-500 text-sm line-clamp-2 mb-4 h-10">
                {item.description}
              </p>
              <div className="flex items-center justify-between mt-6">
                <div>
                  <p className="text-gray-400 text-xs uppercase font-semibold">
                    Price
                  </p>
                  <p className="text-2xl font-black text-teal-600">
                    ${item.price}
                  </p>
                </div>
                <button className="bg-gray-900 hover:bg-teal-600 text-white p-3 rounded-2xl transition-colors shadow-lg">
                  <ShoppingCart size={20} />
                </button>
              </div>
              {/* Availability Status */}
              <div className="mt-4 pt-4 border-t border-gray-50 flex items-center gap-2">
                <div
                  className={`w-2 h-2 rounded-full ${item.availabilityStatus === "In Stock" ? "bg-green-500" : "bg-red-500"}`}
                />
                <span className="text-xs font-medium text-gray-500">
                  {item.availabilityStatus}
                </span>
              </div>
            </div>
          </div>
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
