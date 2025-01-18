import { useState, useEffect } from 'react';
import { BsArrowUpSquareFill } from 'react-icons/bs';

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  // Відстеження прокручування сторінки
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Очищення слухача подій під час демонтажу компонента
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Прокручування сторінки вгору
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 shadow-xl"
        >
          <BsArrowUpSquareFill className="w-12 h-12 text-blue-500 text-opacity-50 hover:scale-110 hover:text-blue-500 active:text-blue-900" />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
