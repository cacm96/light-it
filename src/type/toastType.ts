export type ToastType = {
  id: string;
  destroy: () => void;
  title: string;
  content: string;
  duration?: number;
};

export type ToastOptions = {
  id?: string;
  title: string;
  content: string;
  duration?: number;
};
