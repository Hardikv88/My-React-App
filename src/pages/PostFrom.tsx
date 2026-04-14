import { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../context/UserContext";
import { GLOBAL_TEXT } from "../constants/Strings";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  gender: string;
  country: string;
  state: string;
  city: string;
  address: string;
};

const countries = ["India", "USA"];
const states: Record<string, string[]> = {
  India: ["Gujarat", "Maharashtra"],
  USA: ["California", "Texas"],
};
const cities: Record<string, string[]> = {
  Gujarat: ["Surat", "Ahmedabad"],
  Maharashtra: ["Mumbai", "Pune"],
  California: ["Los Angeles", "San Diego"],
  Texas: ["Dallas", "Houston"],
};


/* ── Reusable field styles ── */
const inputCls = `
  w-full px-3.5 py-2.5 text-sm rounded-xl
  bg-gray-50 dark:bg-white/5
  border border-gray-200 dark:border-gray-700/50
  text-gray-900 dark:text-white
  placeholder:text-gray-400 dark:placeholder:text-gray-600
  focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-400
  dark:focus:border-indigo-500/50
  transition-all duration-150
`;

const labelCls = "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5";
const errorCls = "mt-1.5 text-xs text-red-500 dark:text-red-400 flex items-center gap-1";

export default function PostFrom(props: { data: FormValues }) {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      name: props.data.name,
      email: props.data.email,
      phone: props.data.phone,
      gender: props.data.gender,
      country: props.data.country,
      state: props.data.state,
      city: props.data.city,
      address: props.data.address,
    },
  });
  const userContext = useContext(UserContext);

  const selectedCountry = watch("country");
  const selectedState = watch("state");

  const onSubmit = (data: FormValues) => {
    userContext.setUserName(data.name);
  };


  return (
    <div className="min-h-full py-8 px-4">
      <div className="max-w-xl mx-auto">
        {/* Page header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">User Information</h1>
          
        </div>

        {/* Form Card */}
        <div className="bg-white dark:bg-[#1e2a3a] rounded-2xl border border-gray-200 dark:border-gray-700/50 shadow-sm p-6 md:p-7">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Name */}
            <div>
              <label htmlFor="name" className={labelCls}>Name</label>
              <input
                type="text"
                id="name"
                placeholder="Full name"
                {...register("name", { required: "Name is required" })}
                className={inputCls}
              />
              {errors.name && <p className={errorCls}>⚠ {errors.name.message}</p>}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className={labelCls}>Email Address</label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                {...register("email", {
                  required: "Email required",
                  pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email" },
                })}
                className={inputCls}
              />
              {errors.email && <p className={errorCls}>⚠ {errors.email.message}</p>}
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className={labelCls}>Phone Number</label>
              <input
                id="phone"
                type="number"
                placeholder="10-digit number"
                {...register("phone", {
                  required: "Phone required",
                  minLength: { value: 10, message: "Minimum 10 digits" },
                  maxLength: { value: 15, message: "Maximum 15 digits" },
                })}
                className={inputCls}
              />
              {errors.phone && <p className={errorCls}>⚠ {errors.phone.message}</p>}
            </div>

            {/* Gender */}
            <div>
              <label className={labelCls}>Gender</label>
              <div className="flex gap-5">
                {["male", "female"].map((g) => (
                  <label key={g} className="flex items-center gap-2 cursor-pointer group">
                    <input
                      type="radio"
                      id={g}
                      value={g}
                      {...register("gender", { required: g === "male" ? "Select gender" : false })}
                      className="w-4 h-4 accent-indigo-600"
                    />
                    <span className="text-sm text-gray-700 dark:text-gray-300 capitalize group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {g}
                    </span>
                  </label>
                ))}
              </div>
              {errors.gender && <p className={errorCls}>⚠ {errors.gender.message}</p>}
            </div>

            {/* Country / State / City — 3-col grid on md+ */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Country */}
              <div>
                <label htmlFor="country" className={labelCls}>Country</label>
                <select
                  {...register("country", { required: "Select country" })}
                  className={inputCls}
                >
                  <option value="">Country</option>
                  {countries.map((c) => <option key={c}>{c}</option>)}
                </select>
                {errors.country && <p className={errorCls}>⚠ {errors.country.message}</p>}
              </div>

              {/* State */}
              <div>
                <label htmlFor="state" className={labelCls}>State</label>
                <select
                  {...register("state", { required: "Select state" })}
                  className={inputCls}
                >
                  <option value="">State</option>
                  {selectedCountry && states[selectedCountry]?.map((s) => <option key={s}>{s}</option>)}
                </select>
                {errors.state && <p className={errorCls}>⚠ {errors.state.message}</p>}
              </div>

              {/* City */}
              <div>
                <label htmlFor="city" className={labelCls}>City</label>
                <select
                  {...register("city", { required: "Select city" })}
                  className={inputCls}
                >
                  <option value="">City</option>
                  {selectedState && cities[selectedState]?.map((c) => <option key={c}>{c}</option>)}
                </select>
                {errors.city && <p className={errorCls}>⚠ {errors.city.message}</p>}
              </div>
            </div>

            {/* Address */}
            <div>
              <label htmlFor="address" className={labelCls}>Address</label>
              <textarea
                id="address"
                rows={3}
                placeholder="Street, area..."
                {...register("address", { required: "Address required" })}
                className={`${inputCls} resize-none`}
              />
              {errors.address && <p className={errorCls}>⚠ {errors.address.message}</p>}
            </div>

            {/* Divider */}
            <div className="border-t border-gray-100 dark:border-gray-700/40 pt-2" />

            {/* Buttons */}
            <div className="flex gap-3">
              <button
                type="submit"
                className="
                  flex-1 py-2.5 rounded-xl text-sm font-semibold
                  bg-indigo-600 hover:bg-indigo-700
                  text-white shadow-sm shadow-indigo-200 dark:shadow-indigo-900/30
                  transition-all active:scale-[0.98]
                "
              >
                {GLOBAL_TEXT.SAVE}
              </button>
              <button
                type="button"
                onClick={() => reset()}
                className="
                  flex-1 py-2.5 rounded-xl text-sm font-semibold
                  bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10
                  text-gray-600 dark:text-gray-300
                  border border-gray-200 dark:border-gray-700/50
                  transition-all active:scale-[0.98]
                "
              >
                {GLOBAL_TEXT.RESET}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
