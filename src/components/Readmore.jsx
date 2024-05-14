import { useState } from "react";

const Readmore = ({ children }) => {
  const text = children;

  const [isReadmore, setIsReadmore] = useState(false);
  const toggleReadmore = () => {
    setIsReadmore(!isReadmore);
  };
  return (
    <div>
      <p className="text">
        {isReadmore ? text : text.slice(0, 100)}
        <span
          onClick={toggleReadmore}
          className=" cursor-pointer"
          style={{ color: "green" }}
        >
          {isReadmore ? " show less." : "...read more."}
        </span>
      </p>
    </div>
  );
};

export default Readmore;
