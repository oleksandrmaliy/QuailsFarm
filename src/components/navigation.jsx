import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  const buildLinkClass = ({ isActive }) => {
    return isActive
      ? 'flex items-center justify-center text-l text-yellow-100 bg-green-400 font-bold border-2 border-green-500 rounded-lg'
      : 'flex items-center justify-center text-l text-green-500 hover:bg-green-100 border-2 border-green-500 rounded-lg';
  };

  return (
    <nav className="grid grid-col gap-2 ml-auto items-center">
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
