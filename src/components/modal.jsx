import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { IoIosCloseCircleOutline } from 'react-icons/io';

const modalRoot = document.getElementById('modal-root');
const documentHTML = document.getElementsByTagName('HTML')[0];

export const Modal = ({ children, cModal }) => {
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
      className="fixed inset-0 flex justify-center items-center bg-primaryColor bg-opacity-50 z-[1200]"
    >
      <div className="modal-content relative z-[1300] max-w-[90vw] max-h-[90vh] aspect-[4/3] rounded-xl overflow-y-auto">
        {children}
        <button onClick={cModal} type="button">
          <IoIosCloseCircleOutline
            className="absolute z-[1400] top-2 right-2 size-8 rounded-full
          bg-white text-primaryColor bg-opacity-30 hover:bg-opacity-100 cursor-pointer"
          />
        </button>
      </div>
    </div>,
    modalRoot,
  );
};

// export default Modal;
