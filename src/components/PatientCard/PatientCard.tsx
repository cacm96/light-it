import type { Patient } from "../../type/patientType";
import { useEffect, useRef, useState } from "react";
import avatarDefaultImage from "../../assets/avatar.svg";
import "./PatientCard.css";

type PatientCardProps = {
  patient: Patient;
  isExpanded: boolean;
  onToggleExpand: () => void;
};

export const PatientCard = ({
  patient,
  isExpanded,
  onToggleExpand,
}: PatientCardProps) => {
  const [hasImageError, setHasImageError] = useState(false);

  const [maxHeight, setMaxHeight] = useState("300px");
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (descriptionRef.current) {
      const scrollHeight = descriptionRef.current.scrollHeight;
      setMaxHeight(isExpanded ? `${scrollHeight + 280}px` : "300px");
    }
  }, [isExpanded]);

  return (
    <div
      className={`card ${isExpanded ? "expanded" : "collapsed"}`}
      id={patient.id}
      style={{ maxHeight }}
    >
      <img
        src={hasImageError ? avatarDefaultImage : patient.avatar}
        className="avatar"
        alt={patient.name}
        onError={() => setHasImageError(true)}
      />
      <p className="name"> {patient.name}</p>
      <p className="web">{patient.website}</p>
      <p className="description" ref={descriptionRef}>
        {patient.description}
      </p>

      <button className="button" onClick={onToggleExpand}>
        {isExpanded ? "Show less" : "Show more"}
      </button>
    </div>
  );
};
