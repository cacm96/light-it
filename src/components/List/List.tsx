import { useQuery } from "react-query";
import { getPatientData } from "../../apis/api";
import { Patient } from "../../type/patientType";
import { PatientCard } from "../PatientCard/PatientCard";
import { usePatientStore } from "../store/patientList";

import "./List.css";
import { useEffect, useState } from "react";
import { AddPatientModal } from "../AddPatientModal/AddPatientModal";
export const List = () => {
  const { data: patientData, isFetching } = useQuery({
    queryKey: ["get-patient"],
    queryFn: getPatientData,
    staleTime: 0,
    cacheTime: 0,
  });
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const setPatientList = usePatientStore((action) => action.setPatientList);
  const patientList = usePatientStore((state) => state.patientList);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const showModal = () => {
    setModalVisible(true);
  };
  const hideModal = () => {
    setModalVisible(false);
  };
  const save = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    if (patientData) {
      setPatientList(patientData);
    }
  }, [patientData]);

  return (
    <div>
      {modalVisible && <AddPatientModal onCancel={hideModal} onSave={save} />}
      <div className="content">
        <h1>Light-it Patients!</h1>
      </div>

      {isFetching ? (
        <div>Loading...</div>
      ) : (
        <div>
          <button type="button" onClick={() => showModal()} className="add">
            Add patient +
          </button>
          <div className="card-container">
            {patientList.map((patient: Patient) => (
              <PatientCard
                key={patient.id}
                patient={patient}
                isExpanded={expandedId === patient.id}
                onToggleExpand={() => toggleExpand(patient.id)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
