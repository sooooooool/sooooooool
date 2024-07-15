import { useEffect } from "react";

export const useInterval = (callback: () => void, duration: number = 1000) => {
  useEffect(() => {
    //setInterval의 인자로 callback, duration을 세팅.
    //clearInterval을 return으로 호출.
    const id = setInterval(callback, duration);
    return () => clearInterval(id);
  }, [callback, duration]);
};
