import { FC, ReactElement, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

interface Props {
  children: ReactElement;
  selector: string;
}

const ClientPortal = ({ children, selector }: Props) => {
  const ref = useRef();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (document) {
      ref.current = document.querySelector(selector) as any;
      setMounted(true);
    }
  }, [selector]);

  return mounted && ref.current ? createPortal(children, ref.current) : null;
};

export default ClientPortal;
