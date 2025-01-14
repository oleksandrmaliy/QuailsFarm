import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Header } from './pages/header.jsx';
import { Initial } from './pages/initial.jsx';
import { About } from './pages/about.jsx';
import { Gallery } from './pages/gallery.jsx';
import { Contacts } from './pages/contacts.jsx';
import { NotFoundPage } from './pages/notfoundpage.jsx';
import Modal from './components/modal.jsx';
import ScrollToTopButton from './components/upBotton.jsx';
import { Footer } from './pages/footer.jsx';

// import './output.css';

export const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [largeImage, setLargeImage] = useState(null);
  const [title, setTitle] = useState(null);
  const [text, setText] = useState(null);

  const showModal = ({ largeImage, title, text }) => {
    setModalOpen(true);
    setLargeImage(largeImage);
    setTitle(title);
    setText(text);
  };

  const closeModal = () => {
    setModalOpen(false);
    setLargeImage(null);
    setTitle(null);
    setText(null);
  };
  console.log(largeImage);
  console.log(title);
  console.log(text);
  return (
    <>
      <Header />
      <div className="w-4/5 mx-auto pt-8 font-roboto sm:w-[600px] md:w-[740px] lg:w-[1000px] xl:w-[1200px] ">
        <Routes>
          <Route path="/" element={<Initial />} />
          <Route path="about" element={<About />} />
          <Route path="gallery" element={<Gallery sModal={showModal} />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <ScrollToTopButton />
        {modalOpen && (
          <Modal cModal={closeModal}>
            <img
              src={largeImage}
              alt="Big view"
              className="w-full h-auto overflow-hidden"
            />
            <h3 className="pt-6 text-center text-2xl font-bold bg-white w-full">
              {title}
            </h3>
            <p className="p-4 bg-white w-full indent-30">{text}</p>
          </Modal>
        )}
      </div>
      <Footer />
    </>
  );
};
