import { LOGIN_TEXT } from "../../constants/Strings";
import apiHelper from "../../services/ApiHelper";
import { useState } from "react";
import ShowLoader from "../../components/ShowLoader";
import { LoginResponseModel } from "../../modals/LoginResponseModel";
import { useAuth } from "../../hooks/useAuth";

export default function LoginScreen() {
  const [isLoading, setLoading] = useState(false);
  const [email, setEmail] = useState("emilys");
  const [password, setPassword] = useState("emilyspass");
const { login } = useAuth();
  const handleSubmit = () => {
    console.log("Form Data:", email, password);
    getLoginUser(email, password);
  };

  const getLoginUser = async (email: string, password: string) => {
    console.log("Login Data:", email, password);
    try {
      setLoading(true);
      const response = await apiHelper
        .post<LoginResponseModel>("/auth/login", {
          username: email,
          password: password,
        })
        .catch((err) => {
          console.log("Errr", err.message);
        });
      // setUser(response.data);
      login(response.data);
      console.log("Login Response", response);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  return (
    <>
      {isLoading && <ShowLoader />}
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
          {/* Title */}
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            {LOGIN_TEXT.LOGIN_TO_YOUR_ACCOUNT}
          </h2>

          {/* Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault(); // prevent page reload
              handleSubmit();
            }}
            className="space-y-5"
          >
            {/* Email */}
            <div>
              <label className="block text-gray-600 mb-1">Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder={LOGIN_TEXT.ENTER_YOUR_EMAIL}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                // {...register("email", {
                //   required: "Email required",
                //   pattern: {
                //     value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                //     message: "Invalid email",
                //   },
                // })}
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-600 mb-1">Password</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="input"
                placeholder={LOGIN_TEXT.ENTER_YOUR_PASSWORD}
                // {...register("password", {
                //   required: "Password is required",
                //   minLength: {
                //     value: 8,
                //     message: "Password must be at least 8 characters",
                //   },
                //   maxLength: {
                //     value: 12,
                //     message: "Password must be at most 12 characters",
                //   },
                //   validate: {
                //     hasLower: (v: string) =>
                //       /[a-z]/.test(v) || "At least 1 lowercase letter required",
                //     hasUpper: (v: string) =>
                //       /[A-Z]/.test(v) || "At least 1 uppercase letter required",
                //     hasNumber: (v: string) =>
                //       /[0-9]/.test(v) || "At least 1 number required",
                //     hasSpecial: (v: string) =>
                //       /[^A-Za-z0-9]/.test(v) ||
                //       "At least 1 special character required",
                //   },
                // })}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>

            {/* Forgot Password */}
            <div className="flex justify-end">
              <button
                type="button"
                className="text-sm text-blue-500 hover:underline"
              >
                {LOGIN_TEXT.FORGOT_PASSWORD}
              </button>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
            >
              {LOGIN_TEXT.LOGIN}
            </button>
          </form>

          {/* Footer */}
          <p className="text-sm text-center text-gray-500 mt-6">
            {LOGIN_TEXT.DONT_HAVE_AN_ACCOUNT}{" "}
            <span className="text-blue-500 cursor-pointer hover:underline">
              {LOGIN_TEXT.SIGNUP}
            </span>
          </p>
        </div>
      </div>
    </>
  );
}