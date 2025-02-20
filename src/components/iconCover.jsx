export const IconCover = ({ children, link, text }) => {
  return (
    <div className="flex max-w-fit">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 group hover:scale-[1.03] 
        transition-transform duration-300 ease-in-out"
      >
        <div
          className={`w-12 h-12 grid place-items-center bg-primaryColor text-bgColor rounded-xl
         group-hover:bg-secondaryColor group-active:bg-activeColor
         ${
           text
             ? 'group-hover:border-2 group-hover:border-bgColor group-hover:shadow-allGreen'
             : 'hover:shadow-allYellow'
         }`}
        >
          {children}
        </div>
        {text && (
          <p className="block font-bold px-1 group-active:text-activeColor">
            {text}
          </p>
        )}
      </a>
    </div>
  );
};
