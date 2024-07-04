import type { ChangeEvent } from "react";

export default function OnChange() {
  const OnChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    e.preventDefault();
    console.log("onChangeValue", e.target.value);
  };

  const onChangeChecked = (e: ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    console.log("onChangeChecked", e.target.value);
  };

  const onChangeFiles = (e: ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    console.log("onChangeFiles", e.target.value);
  };

  return (
    <div>
      <p>OnChange</p>
      <div>
        <input
          type="text"
          onChange={OnChangeValue}
          placeholder="enter some texts"
          defaultValue="Hello"
        />
        <input type="checkbox" onChange={onChangeChecked} defaultChecked />
        <input
          type="file"
          onChange={onChangeFiles}
          multiple
          accept="images/*"
        />
      </div>
    </div>
  );
}
