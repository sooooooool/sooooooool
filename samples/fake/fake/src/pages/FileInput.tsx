import type { ChangeEvent } from "react";

export default function FileInput() {
  const onChangeFiles = (e: ChangeEvent<HTMLInputElement>) => {
    const files: FileList | null = e.target.files;
    if (files) {
      for (let i = 0; i < files.length; i++) {
        const file: File | null = files.item(i);
        console.log(`file[${i}]`, file);
      } //for (let i는 초기값; 조건식; 증감식)
    }
  };

  return (
    <div>
      <p>FileInput</p>
      <input type="file" onChange={onChangeFiles} multiple accept="image/*" />
    </div>
  );
}
