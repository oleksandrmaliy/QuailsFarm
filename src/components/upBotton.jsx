import { useState, useEffect } from 'react';

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
          className="fixed bottom-4 right-4 p-2 bg-blue-300 bg-opacity-20 text-grey-300 rounded-full shadow-md hover:bg-blue-500"
        >
          ↑
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
