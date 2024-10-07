import { Modal } from "../Modal/Modal";
import { ModalContent } from "../Modal/ModalContent/ModalContent";
import { ModalFooter } from "../Modal/ModalFooter/ModalFooter";
import { ModalHeader } from "../Modal/ModalHeader/ModalHeader";
import { useForm } from "react-hook-form";
import { InputText } from "../InputText/InputText";
import type { AddPatient } from "../../type/patientType";
import { toast } from "../Toast/ToastManager";
import { usePatientStore } from "../store/patientList";

type AddPatientModalProps = {
  onCancel: () => void;
  onSave: () => void;
};

const defaultValues = {
  avatar: "",
  name: "",
  website: "",
  description: "",
};
export const AddPatientModal = ({ onCancel, onSave }: AddPatientModalProps) => {
  const { handleSubmit, control } = useForm<AddPatient>({
    mode: "onChange",
    defaultValues: defaultValues,
  });

  const setPatientList = usePatientStore((action) => action.setPatientList);
  const patientList = usePatientStore((state) => state.patientList);

  const onSubmit = (data: AddPatient) => {
    const lastPatientId = patientList[patientList.length - 1].id;
    const newPatientId = String(Number(lastPatientId) + 1);

    const newPatient = {
      id: newPatientId,
      createdAt: String(new Date()),
      avatar: data.avatar,
      name: data.name,
      website: data.website,
      description: data.description,
    };
    setPatientList([...patientList, newPatient]);

    toast.show({
      title: "Success!",
      content: "Patient added successfully.",
      duration: 10000,
    });
    onSave();
  };

  return (
    <Modal onOutsideClick={onCancel}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ModalHeader title="Add patient" />
        <ModalContent>
          <InputText
            name="avatar"
            label="Avatar"
            control={control}
            placeholder="Enter an avatar url"
          />
          <InputText
            name="name"
            label="Name"
            control={control}
            placeholder="Enter your full name"
          />

          <InputText
            name="website"
            label="Website"
            control={control}
            placeholder="Enter a website"
          />

          <InputText
            name="description"
            label="Description"
            control={control}
            placeholder="Enter a description of the patient"
          />
        </ModalContent>
        <ModalFooter>
          <button type="button" className="outline" onClick={onCancel}>
            Cancel
          </button>
          <button type="submit">Ok</button>
        </ModalFooter>
      </form>
    </Modal>
  );
};
