// import css from './notfoundpage.module.css';

export const NotFoundPage = () => {
  const notfound = 'Така сторінка не знайдена !';

  return (
    <>
      <h2 className="p-4 mb-4 font-bold text-red-800 text-3xl text-center items-center">
        {notfound}
      </h2>
    </>
  );
};
