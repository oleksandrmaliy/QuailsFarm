export const Address = () => {
  const address = `Наші контакти та розташування`;

  return (
    <>
      <div className="border-2 border-green-900 rounded-2xl mb-8 p-8">
        <h2 className="mb-8 text-3xl font-bold text-center">{address}</h2>
        <div className="text-2xl">
          <a
            href="tel:380962295225"
            className="flex flex-row gap-x-2 items-center mb-4"
          >
            <img src="./telsq.svg" alt="SVG Image" width="48" height="48" />
            096-229-52-25
          </a>
          <a
            href="mailto:lytvynenko.a.a@gmail.com"
            className="flex flex-row gap-x-2 items-center mb-4"
          >
            <img src="./email.svg" alt="SVG Image" width="48" height="48" />{' '}
            lytvynenko.a.a@gmail.com
          </a>
          <div className="flex flex-row gap-x-4 mb-8">
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
              <img
                src="./facebook.svg"
                alt="SVG Image"
                width="48"
                height="48"
              />
            </a>
          </div>

          <div className="w-full h-[500px] p-4 border-2 border-green-900 shadow-md shadow-green-500 rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d42304.11054642485!2d29.8193458!3d48.4947595!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40cdece76808efe9%3A0x26551f1c950376ae!2z0KjQu9GP0YXQvtCy0LAsINCS0ZbQvdC90LjRhtGM0LrQsCDQvtCx0LvQsNGB0YLRjCwgMjQ0MzI!5e0!3m2!1suk!2sua!4v1736453115275!5m2!1suk!2sua"
              className="w-full h-full"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};
