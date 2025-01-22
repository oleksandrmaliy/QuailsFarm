import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { IoIosCloseCircleOutline } from 'react-icons/io';

const modalRoot = document.getElementById('modal-root');
const documentHTML = document.getElementsByTagName('HTML')[0];

const Modal = ({ children, cModal }) => {
  useEffect(() => {
    document.addEventListener('keydown', closeModal);
    documentHTML.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', closeModal);
      documentHTML.style.overflow = null;
    };
  });

  const closeModal = ({ target, currentTarget, code }) => {
    if (target === currentTarget || code === 'Escape') {
      cModal();
    }
  };

  return createPortal(
    <div
      onClick={closeModal}
      className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-[1200]"
    >
      <div className="relative z-[1300] w-2/3 max-h-[calc(100vh-48px)] rounded-xl overflow-hidden overflow-y-auto">
        {children}
        <button onClick={cModal} type="button">
          <IoIosCloseCircleOutline
            className="absolute z-[1400] top-[5px] right-[5px] w-[20px] h-[20px] rounded-full
          bg-white bg-opacity-30 hover:bg-opacity-100 text-grey-800 cursor-pointer"
          />
        </button>
      </div>
    </div>,
    modalRoot,
  );
};

export default Modal;
