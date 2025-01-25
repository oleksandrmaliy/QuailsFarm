import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  const buildLinkClass = ({ isActive }) => {
    return isActive
      ? 'w-[65px] sm:w-[80px] md:w-[85px] lg:w-[110px] xl:w-[130px] 2xl:w-[150px] aspect-[3/1] flex items-center justify-center text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-primaryColor bg-bgColor font-bold rounded-lg whitespace-nowrap'
      : 'w-[65px] sm:w-[80px] md:w-[85px] lg:w-[110px] xl:w-[130px] 2xl:w-[150px] aspect-[3/1] flex items-center justify-center text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-bgColor hover:bg-green-300 hover:text-primaryColor rounded-lg whitespace-nowrap';
  };

  return (
    <nav className="flex flex-row gap-2 ml-auto items-end font-caveat">
      <NavLink to="/" className={buildLinkClass}>
        Про ферму
      </NavLink>
      <NavLink to="/about" className={buildLinkClass}>
        Продукція
      </NavLink>
      <NavLink to="/gallery" className={buildLinkClass}>
        Галерея
      </NavLink>
      <NavLink to="/contacts" className={buildLinkClass}>
        Контакти
      </NavLink>
    </nav>
  );
};
