import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  const buildLinkClass = ({ isActive }) => {
    return isActive
      ? 'w-[110px] h-[50px] flex items-center justify-center text-l text-blue-900 font-bold border-2 border-blue-900 rounded-lg'
      : 'w-[110px] h-[50px] flex items-center justify-center text-l text-grey-800 hover:text-blue-700 border-2 border-blue-900 rounded-lg';
  };

  return (
    <nav className="flex flex-row items-center gap-4 ml-auto">
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
