import { Routes, Route, NavLink } from 'react-router-dom';
// import clsx from 'clsx';
import { Initial } from './pages/Initial/initial.jsx';
import { About } from './pages/About/about.jsx';
import { Gallery } from './pages/Gallery/gallery.jsx';
import { Contacts } from './pages/Contacts/contacts.jsx';
import { NotFoundPage } from './pages/NotFound/notfoundpage.jsx';
// import { Initial } from './pages/Initial/initial.jsx';

const buildLinkClass = ({ isActive }) => {
  return isActive
    ? 'text-blue-500 font-bold'
    : 'text-grey-700 hover:text-blue-500';
};

export const App = () => {
  return (
    <div className="w-4/5 mx-auto px-8 font-roboto bg-red-500 sm:w-[600px] sm:bg-green-500  md:w-[740px] md:bg-blue-500 lg:w-[1000px] lg:bg-yellow-500 xl:w-[1200px] xl:bg-purple-500">
      <nav className="mb-10 p-8">
        <h1 className="text-4xl font-bold">Шляхетна Перепілка</h1>
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
      <Routes>
        <Route path="/" element={<Initial />} />
        <Route path="about" element={<About />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};
