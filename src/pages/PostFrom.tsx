import React from "react";
import { useForm } from "react-hook-form";
import { data } from "react-router-dom";

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

let componentRenderCount = 0;

export default function PostFrom(props: {data: FormValues}) {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormValues>({defaultValues: {
    name: props.data.name,
    email: props.data.email,
    phone: props.data.phone,
    gender: props.data.gender,
    country: props.data.country,
    state: props.data.state,
    city: props.data.city,
    address: props.data.address,
  }});

  const selectedCountry = watch("country");
  const selectedState = watch("state");

  const onSubmit = (data: FormValues) => {
    console.log("Form Data:", data);
    console.log("Form Data:", data.name);
  };
 
 componentRenderCount ++;
  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow rounded-lg">
    <center>
    <h1 className="text-xl font-bold mb-4">User Information</h1>
    </center>
    <h2 className="text-sm text-gray-500 mb-6">Component Render Count: {componentRenderCount}</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        {/* Name */}
        <div>
           <label htmlFor="name" className="block mb-2 font-medium">Name</label>  
          <input
          type="text"
            id="name"
            placeholder="Name"
            {...register("name", { required: "Name is required" })}
            className="w-full border p-2 rounded"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
            <label htmlFor="email" className="block mb-2 font-medium">Email Address</label>  
          <input
          id="email"
          type="email"
            placeholder="Email"
            {...register("email", {
              required: "Email required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email",
              },
            })}
            className="w-full border p-2 rounded"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block mb-2 font-medium">Phone Number</label>
          <input
          id="phone"
          type="number"
            placeholder="Phone"
            {...register("phone", {
              required: "Phone required",
              minLength: { value: 10, message: "Minimum 10 digits" },
              maxLength: { value: 15, message: "Maximum 15 digits" },
            })}
            className="w-full border p-2 rounded"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone.message}</p>
          )}
        </div>

        {/* Gender */}
        <div>
          <label htmlFor="gender" className="block mb-2 font-medium">Gender</label>

          <label className="mr-4">
            <input type="radio" id="male" value="male" {...register("gender", { required: "Select gender" })} />
            <span className="ml-1">Male</span>
          </label>

          <label className="mr-4">
            <input type="radio" id="female" value="female" {...register("gender")} />
            <span className="ml-1">Female</span>
          </label>

          {errors.gender && (
            <p className="text-red-500 text-sm">{errors.gender.message}</p>
          )}
        </div>

        {/* Country */}
        <div>
             <label htmlFor="country" className="block mb-2 font-medium">Country</label>
          <select
            {...register("country", { required: "Select country" })}
            className="w-full border p-2 rounded"
          >
            <option value="">Select Country</option>
            {countries.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>

          {errors.country && (
            <p className="text-red-500 text-sm">{errors.country.message}</p>
          )}
        </div>

        {/* State */}
        <div>
             <label htmlFor="state" className="block mb-2 font-medium">State</label>
          <select
            {...register("state", { required: "Select state" })}
            className="w-full border p-2 rounded"
          >
            <option value="">Select State</option>
            {selectedCountry &&
              states[selectedCountry]?.map((s) => (
                <option key={s}>{s}</option>
              ))}
          </select>

          {errors.state && (
            <p className="text-red-500 text-sm">{errors.state.message}</p>
          )}
        </div>

        {/* City */}
        <div>
             <label htmlFor="city" className="block mb-2 font-medium">City</label>
          <select
            {...register("city", { required: "Select city" })}
            className="w-full border p-2 rounded"
          >
            <option value="">Select City</option>
            {selectedState &&
              cities[selectedState]?.map((c) => (
                <option key={c}>{c}</option>
              ))}
          </select>

          {errors.city && (
            <p className="text-red-500 text-sm">{errors.city.message}</p>
          )}
        </div>

        {/* Address */}
        <div>
          <label htmlFor="address" className="block mb-2 font-medium">Address</label>
          <textarea
            id="address"
            placeholder="Address"
            {...register("address", { required: "Address required" })}
            className="w-full border p-2 rounded"
          />
          {errors.address && (
            <p className="text-red-500 text-sm">{errors.address.message}</p>
          )}
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Save
          </button>

          <button
            type="button"
            onClick={() => reset()}
            className="bg-gray-400 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
        </div>

      </form>
    </div>
  );
}