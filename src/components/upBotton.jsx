import { useState, useEffect } from 'react';
import { FaChevronCircleUp } from 'react-icons/fa';

export const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          <FaChevronCircleUp className="w-12 h-12 text-green-500 bg-transparent text-opacity-50 hover:scale-105 hover:text-green-700 active:text-green-900" />
        </button>
      )}
    </>
  );
};
