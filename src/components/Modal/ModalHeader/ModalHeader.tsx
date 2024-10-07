import { ReactNode } from "react";
import "./ModalHeader.css";

type ModalHeaderProps = {
  title: ReactNode;
  description?: string;
};

export const ModalHeader = ({ title, description }: ModalHeaderProps) => {
  return (
    <header className="modal-header">
      {typeof title === "string" ? (
        <h3 className="modal-title">{title}</h3>
      ) : (
        title
      )}
      {description && <p className="modal-description">{description}</p>}
    </header>
  );
};
