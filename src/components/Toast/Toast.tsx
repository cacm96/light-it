import { useEffect } from "react";
import type { ToastType } from "../../type/toastType";
import "./Toast.css";

export const Toast: React.FC<ToastType> = (props) => {
  const { destroy, content, title, duration = 0 } = props;

  useEffect(() => {
    if (!duration) return;

    const timer = setTimeout(() => {
      destroy();
    }, duration);

    return () => clearTimeout(timer);
  }, [destroy, duration]);

  return (
    <div>
      <div className={"toast-header"}>
        <div>{title} </div>
        <button onClick={destroy}>X</button>
      </div>
      <div className={"toast-body"}>{content}</div>
    </div>
  );
};
