export const Footer = () => {
  return (
    <footer className="flex items-center p-4">
      <div className="min-w-[1200px] flex flex-row items-center gap-6 p-6 mx-auto border-green-700 border-2 rounded-3xl">
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
    </footer>
  );
};
