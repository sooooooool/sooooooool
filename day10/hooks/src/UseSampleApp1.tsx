import React, { useState, useEffect } from "react";

function UseSampleApp1() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);
  const [d, setD] = useState(0);
  const [e, setE] = useState(0);
  const [f, setF] = useState(0);
  const [g, setG] = useState(0);
  const [h, setH] = useState(0);

  const [result1, SetResult1] = useState(0);
  const [result2, SetResult2] = useState(0);
  const [result3, SetResult3] = useState(0);
  const [result4, SetResult4] = useState(0);

  // useEffect(() => {
  //   SetResult1(a + b);
  // }, [a, b]);
  // useEffect(() => {
  //   SetResult2(a - b);
  // }, [c, d]);
  // useEffect(() => {
  //   SetResult3(a * b);
  // }, [e, f]);
  // useEffect(() => {
  //   SetResult4(a / b);
  // }, [g, h]);

  const handleInputAChange = (e: any) => {
    setA(e.target.value);
  };
  const handleInputBChange = (e: any) => {
    setB(Number(e.target.value));
  };
  const handleInputResultChange = (e: any) => {
    SetResult1(parseInt(a.toString()) + parseInt(b.toString()));
  };

  const handleInputCChange = (e: any) => {
    setC(e.target.value);
  };
  const handleInputDChange = (e: any) => {
    setD(Number(e.target.value));
  };
  const handleInputResult2Change = (e: any) => {
    SetResult2(parseInt(c.toString()) - parseInt(d.toString()));
  };

  const handleInputEChange = (e: any) => {
    setE(Number(e.target.value));
  };
  const handleInputFChange = (e: any) => {
    setF(Number(e.target.value));
  };
  const handleInputResult3Change = (event: any) => {
    SetResult3(parseInt(e.toString()) * parseInt(f.toString()));
  };

  const handleInputGChange = (e: any) => {
    setG(e.target.value);
  };
  const handleInputHChange = (e: any) => {
    setH(Number(e.target.value));
  };
  const handleInputResult4Change = (e: any) => {
    SetResult4(parseInt(g.toString()) / parseInt(h.toString()));
  };

  return (
    <div>
      <input type="text" onChange={handleInputAChange} value={a} />
      <input type="text" onChange={handleInputBChange} value={b} />
      <button onClick={handleInputResultChange}>+</button>
      <span>{result1}</span>
      <br />

      <input type="text" onChange={handleInputCChange} value={c} />
      <input type="text" onChange={handleInputDChange} value={d} />
      <button onClick={handleInputResult2Change}>-</button>
      <span>{result2}</span>
      <br />

      <input type="text" onChange={handleInputEChange} value={e} />
      <input type="text" onChange={handleInputFChange} value={f} />
      <button onClick={handleInputResult3Change}>*</button>
      <span>{result3}</span>
      <br />

      <input type="text" onChange={handleInputGChange} value={g} />
      <input type="text" onChange={handleInputHChange} value={h} />
      <button onClick={handleInputResult4Change}>/</button>
      <span>{result4}</span>
      <br />
    </div>
  );
}

export default UseSampleApp1;
