import { useRef, useState } from "react";

export default function Modal() {
  const [showModal, setShowModal] = useState(false);

  const dialogRef = useRef(null);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  function toggleDialog() {
    if(!dialogRef.current) {
      return;
    }
    dialogRef.current.hasAttribute("open")
      ? dialogRef.current.close()
      : dialogRef.current.showModal()
  }

  return (
    <>
      <button
        onClick={toggleDialog}
        className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
      >
        Open modal
      </button>

      <dialog ref={dialogRef}>
        <div className="p-4 flex gap-4 flex-col place-items-center">
          <p>Este es un modal</p>
          <button
            onClick={toggleDialog}
            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            Close
          </button>
        </div>
      </dialog>
    </>
  );
}
