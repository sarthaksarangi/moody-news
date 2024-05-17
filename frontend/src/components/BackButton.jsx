import { Link } from "react-router-dom";
import App from "../App";

const BackButton = ({ name }) => {
  return (
    <div>
      <button
        type="button"
        class="text-white bg-button hover:bg-button2 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-8 py-2.5 text-center me-2 mt-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        <Link to="/">{name}</Link>
      </button>
    </div>
  );
};

export default BackButton;
