import { useEffect } from 'react';
import { createPortal } from 'react-dom';

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
  }, []);

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
        <button
          onClick={cModal}
          className="absolute z-[1400] top-[5px] right-[5px] inline-block w-[20px] h-[20px] border-2 border-black bg-white bg-[url('../../src/assets/cross-close-svgrepo-com.svg')] bg-center bg-no-repeat bg-[length:50%] opacity-30 rounded-full transition-opacity duration-250 ease-[cubic-bezier(0.4, 0, 0.2, 1)] cursor-pointer focus:outline-none hover:opacity-100"
          type="button"
        ></button>
      </div>
    </div>,
    modalRoot,
  );
};

export default Modal;
