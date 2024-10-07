import ReactDOM from "react-dom";
import { Toast } from "./Toast";
import type { ToastType, ToastOptions } from "../../type/toastType";

export class ToastManager {
  private containerRef: HTMLDivElement;
  private toasts: ToastType[] = [];

  constructor() {
    const body = document.getElementsByTagName("body")[0] as HTMLBodyElement;
    const toastContainer = document.createElement("div") as HTMLDivElement;
    toastContainer.id = "toast-container-main";
    body.insertAdjacentElement("beforeend", toastContainer);
    this.containerRef = toastContainer;
  }

  public show(options: ToastOptions): void {
    const toastId = Math.random().toString(36).substr(2, 9);
    const toast: ToastType = {
      id: toastId,
      ...options, // if id is passed within options, it will overwrite the auto-generated one
      destroy: () => this.destroy(options.id ?? toastId),
    };

    this.toasts = [toast, ...this.toasts];
    this.render();
  }

  public destroy(id: string): void {
    this.toasts = this.toasts.filter((toast: ToastType) => toast.id !== id);
    this.render();
  }

  private render(): void {
    const toastsList = this.toasts.map((toastProps: ToastType) => (
      <Toast key={toastProps.id} {...toastProps} />
    ));
    ReactDOM.render(toastsList, this.containerRef);
  }
}

export const toast = new ToastManager();
