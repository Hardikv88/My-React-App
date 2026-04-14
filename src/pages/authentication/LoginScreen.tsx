import { LOGIN_TEXT } from "../../constants/Strings";
import apiHelper from "../../services/ApiHelper";
import { useState } from "react";
import ShowLoader from "../../components/ShowLoader";
import { LoginResponseModel } from "../../modals/LoginResponseModel";
import { useAuth } from "../../hooks/useAuth";
import { Lock, User } from "lucide-react";
import { setToken } from "../../utils/LocalStorage";

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
      login(response.data);
      setToken(response.data.accessToken); // Store entire user data (including tokens) securely
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

      {/* Full-page gradient background */}
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-50 via-white to-violet-50 dark:from-gray-950 dark:via-[#1a2236] dark:to-gray-950 px-4">
        {/* Card */}
        <div className="w-full max-w-md">
          {/* Logo / Brand mark */}
          <div className="flex justify-center mb-8">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-lg shadow-indigo-200 dark:shadow-indigo-900/40">
              <span className="text-white font-bold text-xl">A</span>
            </div>
          </div>

          <div className="bg-white dark:bg-[#1e2a3a] rounded-2xl shadow-xl shadow-gray-200/60 dark:shadow-black/40 border border-gray-100 dark:border-gray-700/50 p-8">
            {/* Header */}
            <div className="mb-7 text-center">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                {LOGIN_TEXT.LOGIN_TO_YOUR_ACCOUNT}
              </h1>
              <p className="text-gray-400 dark:text-gray-500 text-sm mt-1.5">
                Enter your credentials to continue
              </p>
            </div>

            {/* Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
              className="space-y-5"
            >
              {/* Username/Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                  Username
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500">
                    <User size={16} />
                  </span>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    placeholder={LOGIN_TEXT.ENTER_YOUR_EMAIL}
                    className="
                      w-full pl-9 pr-4 py-2.5 text-sm
                      bg-gray-50 dark:bg-white/5
                      border border-gray-200 dark:border-gray-700/60
                      rounded-xl text-gray-900 dark:text-white
                      placeholder:text-gray-400 dark:placeholder:text-gray-600
                      focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-400
                      dark:focus:ring-indigo-500/30 dark:focus:border-indigo-500/50
                      transition-all duration-150
                    "
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                  Password
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500">
                    <Lock size={16} />
                  </span>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="input"
                    placeholder={LOGIN_TEXT.ENTER_YOUR_PASSWORD}
                    className="
                      w-full pl-9 pr-4 py-2.5 text-sm
                      bg-gray-50 dark:bg-white/5
                      border border-gray-200 dark:border-gray-700/60
                      rounded-xl text-gray-900 dark:text-white
                      placeholder:text-gray-400 dark:placeholder:text-gray-600
                      focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-400
                      dark:focus:ring-indigo-500/30 dark:focus:border-indigo-500/50
                      transition-all duration-150
                    "
                  />
                </div>
              </div>

              {/* Forgot Password */}
              <div className="flex justify-end -mt-1">
                <button
                  type="button"
                  className="text-xs text-indigo-500 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 hover:underline transition-colors"
                >
                  {LOGIN_TEXT.FORGOT_PASSWORD}
                </button>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="
                  w-full py-2.5 px-4 rounded-xl text-sm font-semibold
                  bg-gradient-to-r from-indigo-500 to-violet-600
                  hover:from-indigo-600 hover:to-violet-700
                  text-white shadow-md shadow-indigo-200 dark:shadow-indigo-900/30
                  transition-all duration-200
                  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-[#1e2a3a]
                  active:scale-[0.98]
                "
              >
                {LOGIN_TEXT.LOGIN}
              </button>
            </form>

            {/* Footer */}
            <p className="text-xs text-center text-gray-400 dark:text-gray-500 mt-6">
              {LOGIN_TEXT.DONT_HAVE_AN_ACCOUNT}{" "}
              <span className="text-indigo-500 dark:text-indigo-400 cursor-pointer hover:underline font-medium">
                {LOGIN_TEXT.SIGNUP}
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
