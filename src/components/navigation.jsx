import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  const buildLinkClass = ({ isActive }) => {
    return isActive
      ? 'flex items-center justify-center text-lg text-primaryColor bg-yellow-200 font-caveat font-bold rounded-lg whitespace-nowrap p-1'
      : 'flex items-center justify-center text-lg text-yellow-200 hover:bg-green-300 hover:text-primaryColor font-caveat rounded-lg whitespace-nowrap p-1';
  };

  return (
    <nav className="grid grid-cols-4 gap-1 ml-auto items-center">
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
