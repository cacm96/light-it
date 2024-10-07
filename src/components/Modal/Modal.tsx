import { ReactNode, SyntheticEvent, useEffect, useRef } from "react";
import "./Modal.css";

type ModalProps = {
  children: ReactNode;
  onOutsideClick?: () => void;
};

export const Modal = ({ children, onOutsideClick }: ModalProps) => {
  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    document.addEventListener("focusin", handleFocus);

    return () => {
      document.removeEventListener("focusin", handleFocus);
    };
  }, []);

  const handleFocus = () => {
    if (
      modalRef.current &&
      document.activeElement !== modalRef.current &&
      !modalRef.current.contains(document.activeElement)
    ) {
      modalRef.current.focus();
    }
  };

  const handleOutsideClick = (event: SyntheticEvent<HTMLDivElement>) => {
    if (
      typeof onOutsideClick === "function" &&
      (event.target as Element).className === "modal-container"
    ) {
      onOutsideClick();
    }
  };

  return (
    <div className="modal-container" onClick={handleOutsideClick}>
      <dialog className="modal" ref={modalRef} tabIndex={1}>
        {children}
      </dialog>
    </div>
  );
};
