// import css from './notfoundpage.module.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const NotFoundPage = () => {
  const notfound = 'Сторінку не знайдено. Повертаємо на головну...';

  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/', { replace: true });
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <>
      <h2 className="p-4 mb-4 font-bold text-red-800 text-3xl text-center items-center">
        {notfound}
      </h2>
    </>
  );
};

// export const NotFound = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       navigate('/', { replace: true });
//     }, 3000);

//     return () => clearTimeout(timer);
//   }, [navigate]);

//   return <h1>Сторінку не знайдено. Повертаємо на головну...</h1>;
// };
