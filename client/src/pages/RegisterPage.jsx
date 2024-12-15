import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const RegisterPage = () => {
  const inputClass =
    "border text-gray-600 w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 rounded-md";
  const { registerInfo, setRegisterInfo } = useContext(AuthContext);
  return (
    <>
      <div className="flex h-[calc(100vh-6vh)] justify-center items-center bg-gray-900 text-white">
        <div className="w-1/2 p-6 mb-24 shadow-lg bg-gray-900 rounded-3xl">
          <h1 className="mb-3 text-3xl block text-center font-semibold">
            Register
          </h1>
          <hr className="opacity-80" />
          <div className="mt-4">
            <label htmlFor="name" className="block text-base mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className={inputClass}
              placeholder="Enter Name..."
              onChange={(e) => {
                setRegisterInfo({ ...registerInfo, name: e.target.value });
              }}
            />
          </div>
          <div className="mt-4">
            <label htmlFor="email" className="block text-base mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className={inputClass}
              placeholder="Enter Email..."
              onChange={(e) => {
                setRegisterInfo({ ...registerInfo, email: e.target.value });
              }}
            />
          </div>
          <div className="mt-3">
            <label htmlFor="password" className="block text-base mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className={inputClass}
              placeholder="Enter Password..."
              onChange={(e) => {
                setRegisterInfo({ ...registerInfo, password: e.target.value });
              }}
            />
          </div>
          <button className="mt-6 border-2 border-blue-600 bg-blue-600 text-white py-1 w-full hover:bg-blue-900 hover:border-blue-900 rounded-md">
            Register
          </button>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
