import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { TiThMenu } from 'react-icons/ti';
import { IoMdClose } from 'react-icons/io';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const buildLinkClass = ({ isActive }) => {
    return isActive
      ? 'w-[85px] md:w-[85px] lg:w-[110px] xl:w-[130px] 2xl:w-[150px] aspect-[3/1] flex items-center justify-center text-lg md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-primaryColor bg-bgColor shadow-allYellow border-2 border-primaryColor font-bold rounded-lg whitespace-nowrap'
      : 'w-[85px] md:w-[85px] lg:w-[110px] xl:w-[130px] 2xl:w-[150px] aspect-[3/1] flex items-center justify-center text-lg md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-bgColor hover:bg-secondaryColor hover:text-bgColor hover:shadow-allYellow hover:scale-[1.03] rounded-lg whitespace-nowrap';
  };

  return (
    <>
      <nav className="relative w-fit ml-auto flex items-end justify-end font-caveat">
        <div className="hidden md:flex flex-row gap-4 ml-auto">
          <NavLink to="/" className={buildLinkClass}>
            Про ферму
          </NavLink>
          <NavLink to="/productions" className={buildLinkClass}>
            Продукція
          </NavLink>
          <NavLink to="/gallery" className={buildLinkClass}>
            Галерея
          </NavLink>
          <NavLink to="/contacts" className={buildLinkClass}>
            Контакти
          </NavLink>
        </div>

        <button className="md:hidden block" onClick={toggleMenu}>
          {isOpen ? (
            <IoMdClose className="size-6 text-yellow-200" />
          ) : (
            <TiThMenu className="size-6 text-yellow-200" />
          )}
        </button>

        {isOpen && (
          <div className="absolute -right-4 top-[72px] sm:top-[80px] p-4 flex md:hidden flex-col gap-2 bg-primaryColor rounded-xl">
            <NavLink to="/" onClick={toggleMenu} className={buildLinkClass}>
              Про ферму
            </NavLink>
            <NavLink
              to="/productions"
              onClick={toggleMenu}
              className={buildLinkClass}
            >
              Продукція
            </NavLink>
            <NavLink
              to="/gallery"
              onClick={toggleMenu}
              className={buildLinkClass}
            >
              Галерея
            </NavLink>
            <NavLink
              to="/contacts"
              onClick={toggleMenu}
              className={buildLinkClass}
            >
              Контакти
            </NavLink>
          </div>
        )}
      </nav>
    </>
  );
};
