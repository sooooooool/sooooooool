import React, { FC, useState, useEffect } from "react";

interface GreetingProps {
  name?: string;
}

const Greeting: FC<GreetingProps> = ({ name }: GreetingProps) => {
  const [message, setMessage] = useState(""); //message: 변수 값, setMessage: 변경 변수 값 / 함수 안에 쓸 수 있는 변수 값을 정의 useState / ("")변수의 초기값
  useEffect(() => {
    if (name) {
      setMessage(`Hello From, ${name}`);
    }
  }, [name]);
  if (!name) {
    return <div>no name given</div>;
  }
  return <div>{message}</div>;
};
export default Greeting;
