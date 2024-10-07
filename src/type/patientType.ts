export type Patient = {
  createdAt: string;
  name: string;
  avatar: string;
  description: string;
  website: string;
  id: string;
};

export type AddPatient = {
  avatar: string;
  name: string;
  description: string;
  website: string;
};
