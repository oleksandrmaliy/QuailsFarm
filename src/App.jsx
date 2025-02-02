import { useState, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

// import About from './pages/about.jsx';
// import Productions from './pages/productions.jsx';
// import Gallery from './pages/gallery.jsx';
// import Contacts from './pages/contacts.jsx';
import { NotFoundPage } from './pages/notfoundpage.jsx';
import { Header } from './components/header.jsx';
import { Footer } from './components/footer.jsx';
import { Advertising } from './components/advertising.jsx';
import { Container } from './components/container.jsx';
import { Modal } from './components/modal.jsx';
import { ScrollToTopButton } from './components/upBotton.jsx';

const About = lazy(() => import('./pages/about.jsx'));
const Productions = lazy(() => import('./pages/productions.jsx'));
const Gallery = lazy(() => import('./pages/gallery.jsx'));
const Contacts = lazy(() => import('./pages/contacts.jsx'));

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
        <Suspense
          fallback={
            <div className="mt-10 mb-10">
              <p className="font-bold text-blue-500 text-4xl text-center">
                Завантаження...
              </p>
              <div className="flex justify-center items-center h-20">
                <div className="w-10 h-10 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
              </div>
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/productions" element={<Productions />} />
            <Route path="/gallery" element={<Gallery sModal={showModal} />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
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
