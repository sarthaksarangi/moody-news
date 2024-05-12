import { useState } from "react";

const Readmore = ({ children }) => {
  const text = children;

  const [isReadmore, setIsReadmore] = useState(true);
  const toggleReadmore = () => {
    setIsReadmore(!isReadmore);
  };
  return (
    <div>
      <p className="text">
        {isReadmore ? text.slice(0, 100) : text}
        <span
          onClick={toggleReadmore}
          className="read-or-hide"
          style={{ color: "green" }}
        >
          {isReadmore ? "...read more." : " show less."}
        </span>
      </p>
    </div>
  );
};

export default Readmore;
