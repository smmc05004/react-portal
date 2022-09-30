import { useState } from "react";
import ClientPortal from "./ClientPortal";

const Modal = () => {
  const [open, setOpen] = useState(false);

  const toggleModal = () => {
    setOpen(!open);
  };

  return (
    <div>
      <button onClick={toggleModal}>open modal</button>

      {open && (
        <ClientPortal selector="#modal">
          <div>포탈</div>
        </ClientPortal>
      )}
    </div>
  );
};

export default Modal;
