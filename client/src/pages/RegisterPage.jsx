const RegisterPage = () => {
  return (
    <>
      <div className="flex h-[calc(100vh-6vh)] justify-center items-center bg-gray-900 text-white">
        <div className="w-1/2 p-6 mb-24 shadow-lg bg-gray-900 rounded-3xl">
          <h1 className="mb-3 text-3xl block text-center font-semibold">
            Register
          </h1>
          <hr className="opacity-80" />
          <div className="mt-4">
            <label htmlFor="username" className="block text-base mb-2">
              Name
            </label>
            <input
              type="text"
              id="username"
              className="border text-gray-600 w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 rounded-md"
              placeholder="Enter Name..."
            />
          </div>
          <div className="mt-4">
            <label htmlFor="username" className="block text-base mb-2">
              Email
            </label>
            <input
              type="email"
              id="username"
              className="border text-gray-600 w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 rounded-md"
              placeholder="Enter Email..."
            />
          </div>
          <div className="mt-3">
            <label htmlFor="password" className="block text-base mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="border text-gray-600 w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 rounded-md"
              placeholder="Enter Password..."
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
