import React, { useEffect, useState } from "react";

const Box = ({ createBoxStyle }) => {
  const [style, setStyle] = useState({});

  useEffect(() => {
    console.log("Box size up");
    setStyle(createBoxStyle);
  }, [createBoxStyle]);

  return <div style={style}></div>;
};

export default Box;
