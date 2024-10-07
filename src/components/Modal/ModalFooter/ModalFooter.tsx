import { ReactNode } from "react";
import "./ModalFooter.css";

type ModalFooterProps = {
  children: ReactNode;
};

export const ModalFooter = ({ children }: ModalFooterProps) => {
  return <footer className="modal-footer">{children}</footer>;
};
