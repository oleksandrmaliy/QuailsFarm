import { Container } from '../components/container';

export const Footer = () => {
  return (
    <footer className="flex items-center p-2 mb-4 bg-green-500">
      <Container>
        <div className="w-full max-w-[639px] mx-auto flex flex-row items-center gap-2 p-2 rounded-xl bg-yellow-100">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./igrd.svg" alt="SVG Image" width="48" height="48" />
          </a>
          <a
            href="https://www.tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./ttrd.svg" alt="SVG Image" width="48" height="48" />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./facebook.svg" alt="SVG Image" width="48" height="48" />
          </a>
          <h3 className="text-3xl ml-auto">Powered by MaliyCo</h3>
        </div>
      </Container>
    </footer>
  );
};
