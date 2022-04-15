import { Link } from "react-router-dom";

const NotExist = () => {
  return (
    <div className="text-center">
      <h1 className="mt-12 text-4xl text-indigo-800 font-extrabold mb-10">
        Your Cart is empty!
      </h1>
      <Link
        className="px-8 py-3 border border-solid border-gray-600 bg-indigo-600 rounded-lg text-white"
        to="/"
      >
        Back to main page
      </Link>
    </div>
  );
};

export default NotExist;
