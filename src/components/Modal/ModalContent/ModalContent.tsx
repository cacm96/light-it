import { ReactNode } from "react";
import "./ModalContent.css";

type ModalContentProps = {
  children: ReactNode;
};

export const ModalContent = ({ children }: ModalContentProps) => {
  return <div className="modal-content">{children}</div>;
};
