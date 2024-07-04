import type { DragEvent } from "react";

export default function DragDrop() {
  const onDrangStart = (e: DragEvent<HTMLElement>) =>
    console.log("onDragStart", e.dataTransfer);
  const onDrangEnd = (e: DragEvent<HTMLElement>) =>
    console.log("onDragEnd", e.dataTransfer);

  const onDrangOver = (e: DragEvent) => e.preventDefault();
  const onDrop = (e: DragEvent) => {
    e.preventDefault();
    console.log("onDrop", e.dataTransfer);
  };

  return (
    <div>
      <p>DragDrop</p>
      <div draggable onDragStart={onDrangStart} onDragEnter={onDrangEnd}>
        <h1>Drag Me</h1>
      </div>
      <div onDrop={onDrop} onDragOver={onDrangOver}>
        <h1>Drop over Me</h1>
      </div>
    </div>
  );
}
