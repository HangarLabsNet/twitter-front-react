import { Dialog } from "@headlessui/react";

interface Props {
  open: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

export default function Modal({ open, onClose, children }: Props) {
  return (
    <Dialog open={open} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full  max-w-3xl rounded bg-white">
          {children}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
