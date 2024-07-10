import React from "react";

interface GreetingProps {
  enteredName: string;
  message: string;
  greetingDispather: React.Dispatch<{ type: string; payload: string }>;
}

export default function Greeting(props: GreetingProps) {
  console.log("rendering Greeting!");

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.greetingDispather({
      type: "enteredName",
      payload: e.target.value,
    });

    props.greetingDispather({
      type: "message",
      payload: e.target.value,
    });
  };

  return (
    <div>
      <input value={props.enteredName} onChange={onChangeName}></input>
      <div> {props.message} </div>
    </div>
  );
}
