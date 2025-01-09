import { Routes, Route } from 'react-router-dom';

import { Header } from './pages/header.jsx';
import { Initial } from './pages/initial.jsx';
import { About } from './pages/about.jsx';
import { Gallery } from './pages/gallery.jsx';
import { Contacts } from './pages/contacts.jsx';
import { NotFoundPage } from './pages/notfoundpage.jsx';
import { Footer } from './pages/footer.jsx';

export const App = () => {
  return (
    <>
      <Header />
      <div className="w-4/5 mx-auto pt-8 font-roboto sm:w-[600px] md:w-[740px] lg:w-[1000px] xl:w-[1200px] ">
        <Routes>
          <Route path="/" element={<Initial />} />
          <Route path="about" element={<About />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};
