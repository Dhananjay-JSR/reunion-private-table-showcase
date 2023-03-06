import React from "react";
import { MutableRefObject, useRef, useState } from "react";
import ReactDOM from "react-dom";

export function Portal({
  children,
  BackDropvisible,
  setBackDropVisible
}: {
  children: (state:boolean,setState:React.Dispatch<React.SetStateAction<boolean>>)=>React.ReactNode;
  BackDropvisible: boolean;
  setBackDropVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [closing, setClosing] = useState(false);
  const ModalRef = useRef() as MutableRefObject<HTMLDivElement>;
  React.useEffect(() => {
    if (BackDropvisible == true) {
      document.body.style.overflowY = "hidden";
    }
    function handleClickOutside(event: MouseEvent) {
      if (
        event.target instanceof HTMLElement &&
        ModalRef.current &&
        !ModalRef.current.contains(event.target)
      ) {
        setClosing(true);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (BackDropvisible) document.body.style.overflowY = "auto";
    };
  }, [BackDropvisible]);




  return (
    <>
      {(BackDropvisible) &&
        ReactDOM.createPortal(
          <>
            <div
              onAnimationEnd={(e) => {
                if (e.animationName == "fadeOut") {
                  setBackDropVisible(false);
                  setClosing(false);
                }
              }}
              className={`block bg-white  z-40 fixed ${
                closing ? ` animate-fadeOut ` : ` animate-fadeIn `
              }h-screen w-full top-0 left-0`}
            >
              <div ref={ModalRef}>{children(closing,setClosing)}</div>
            </div>
          </>,
          document.getElementById("modal")!
        )}
    </>
  );
}
