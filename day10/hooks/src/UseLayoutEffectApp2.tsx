import { useState, useEffect, useLayoutEffect, useRef } from "react";

function getNumber() {
  return [1, 2, 3, 4, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
}

function UseLayoutEffectApp2() {
  const [numbers, setNumbers] = useState([]);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const nums: number[] = getNumber();
    if (!nums) setNumbers(nums);
  }, []);

  // useLayoutEffect(() => {
  //   if(numbers.length === 0) {
  //     return ;
  //   }
  // }, [])
  return (
    <div ref={ref} style={{ height: "300px", border: "1px solid blue" }}></div>
  );
}

export default UseLayoutEffectApp2;
