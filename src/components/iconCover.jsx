export const IconCover = ({ children, link, text }) => {
  return (
    <div className="flex max-w-fit mb-2">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 group hover:scale-105 transition-transform duration-300 ease-in-out"
      >
        <div className="w-12 h-12 grid place-items-center bg-primaryColor text-bgColor rounded-xl group-hover:bg-secondaryColor group-active:bg-activeColor">
          {children}
        </div>
        <p className="block font-bold px-1 group-hover:text-secondaryColor group-active:text-activeColor">
          {text}
        </p>
      </a>
    </div>
  );
};
