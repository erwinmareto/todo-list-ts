'use client'

import Modal from "..";

const ConfirmModal = ({close, handleDelete, name} : {close: () => void, handleDelete: () => void, name: string}) => {
  return (
    <Modal close={close} title="Confirm">
      <h3 className="text-xl mb-5">{`Do you want to delete "${name}"`}</h3>
      <div className="flex justify-between">
        <button onClick={handleDelete} className="bg-red-500 px-3 py-2 rounded-lg transition-all hover:bg-red-300">Yes</button>
        <button className="bg-blue-500 px-3 py-2 rounded-lg transition-all hover:bg-blue-300">No</button>
      </div>
    </Modal>
  );
};

export default ConfirmModal;
