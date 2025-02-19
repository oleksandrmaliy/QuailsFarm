export const Advertising = () => {
  return (
    <section className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-2">
      <div className="w-full p-4 bg-primaryColor rounded-xl overflow-hidden flex flex-col justify-between">
        <div className="text-bgColor mb-4">
          <p>Реклама від партнерів: </p>
          <b>
            Тут має бути ваша реклама!
            <br />
            Тут обов`язково має бути ваша реклама!
          </b>
        </div>
        <div className="w-full shadow-allYellow rounded-xl overflow-hidden hover:scale-[1.01] transition-transform duration-300 ease-in-out">
          <a
            href="#"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="block cursor-pointer rounded-2xl"
          >
            <img
              src="/blank.jpg"
              alt="Big View"
              className="w-full h-auto object-cover mt-auto"
            />
          </a>
        </div>
      </div>
      <div className="w-full p-4 bg-primaryColor rounded-xl overflow-hidden flex flex-col justify-between">
        <div className="text-bgColor mb-4">
          <p>Реклама від партнерів: </p>
          <b>
            Тут має бути ваша реклама!
            <br />
            Тут обов`язково має бути ваша реклама!
          </b>
        </div>
        <div className="w-full shadow-allYellow rounded-xl overflow-hidden hover:scale-[1.01] transition-transform duration-300 ease-in-out">
          <a
            href="#"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="block cursor-pointer rounded-2xl"
          >
            <img
              src="/blank.jpg"
              alt="Big View"
              className="w-full h-auto object-cover mt-auto"
            />
          </a>
        </div>
      </div>
    </section>
  );
};
