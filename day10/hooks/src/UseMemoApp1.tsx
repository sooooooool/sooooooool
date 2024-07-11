import React, { useMemo, useState } from "react";

function hardCalculate(hardNumber: number): any {
  console.log("어려운 계산!");
  for (let i = 0; i < 9999999; i++) {}
  return hardNumber + 10000;
}
function easyCalculate(esayNumber: number) {
  console.log("짱 쉬운 계산기");
  return esayNumber + 1;
}

function UseMemoApp1() {
  const [hardNumber, setHardNumber] = useState(1);
  const [esayNumber, setEasyNumber] = useState(1);

  const hardSum = useMemo(() => {
    return hardCalculate(hardNumber);
  }, [hardNumber]);

  const easySum = easyCalculate(esayNumber);

  return (
    <div>
      <h3>어려운 계산기</h3>
      <input
        type="number"
        value={hardNumber}
        onChange={(e) => {
          Number(e.target.value);
        }}
      />
      <span> + 10000 = {hardSum}</span>

      <h3>쉬운 계산기</h3>
      <input
        type="number"
        value={esayNumber}
        onChange={(e) => {
          setEasyNumber(Number(e.target.value));
        }}
      />
      <span> + 1 = {easySum}</span>
    </div>
  );
}

export default UseMemoApp1;
