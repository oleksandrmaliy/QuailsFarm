import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Header } from './components/header.jsx';
import { Initial } from './pages/initial.jsx';
import { About } from './pages/about.jsx';
import { Gallery } from './pages/gallery.jsx';
import { Contacts } from './pages/contacts.jsx';
import { NotFoundPage } from './pages/notfoundpage.jsx';
import { Advertising } from './components/advertising.jsx';
import { Container } from './components/container.jsx';
import Modal from './components/modal.jsx';
import ScrollToTopButton from './components/upBotton.jsx';
import { Footer } from './components/footer.jsx';

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

  return (
    <>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Initial />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery sModal={showModal} />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
        <Advertising />
      </Container>
      <ScrollToTopButton />
      {modalOpen && (
        <Modal cModal={closeModal}>
          <img
            src={largeImage}
            alt="Big view"
            className="w-full h-auto overflow-hidden rounded-xl mb-4"
          />
          <h3 className="mb-4 text-center text-xl font-bold bg-white w-full rounded-xl">
            {title}
          </h3>
          <p className="p-4 bg-white w-full indent-30 rounded-xl">{text}</p>
        </Modal>
      )}
      <Footer />
    </>
  );
};
