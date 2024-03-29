import React from "react";

export interface ModalProps {
  close: () => void;
  title: string;
  children: React.ReactNode;
}
// TODO: change props to destructure
const Modal = (props: ModalProps) => {
  return (
    <section>
      <div className="fixed z-50 inset-0 p-2 overflow-auto backdrop-blur-sm">
        <div className="flex justify-center items-center min-h-screen">
          <article className="w-full max-w-lg bg-dark-500 bg-opacity-80 shadow-2xl p-10 rounded-lg">
            <div className="flex justify-between mb-5">
              <h1 className="text-3xl">{props.title}</h1>
              <button onClick={props.close}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            {props.children}
          </article>
        </div>
      </div>
    </section>
  );
};

export default Modal;
