import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Content = () => {
  const { isDark, setisDark } = useContext(ThemeContext);
  return (
    <div
      className="Content"
      style={{
        backgroundColor: isDark ? "black" : "lightgray",
        color: isDark ? "white" : "black",
      }}
    >
      <p>좋은 하루 되세요!</p>
    </div>
  );
};

export default Content;
