import { IoMdCloseCircleOutline } from 'react-icons/io';

const AdBlock = ({ text, img, url, setAdState }) => {
  return (
    <>
      <div className="relative w-full p-4 mb-4 bg-primaryColor rounded-xl overflow-hidden flex flex-col justify-between">
        <button
          className="absolute top-2 right-2 rounded-xl"
          onClick={() => {
            setAdState(false);
          }}
        >
          <IoMdCloseCircleOutline className="text-bgColor size-8" />
        </button>
        <div className="text-bgColor mb-4">
          <p>Реклама від партнерів: </p>
          <b>{text}</b>
        </div>
        <div className="w-full border-2 border-primaryColor rounded-xl overflow-hidden hover:scale-[1.01] hover:shadow-allYellow transition-transform duration-300 ease-in-out">
          <a
            href={url}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="block cursor-pointer rounded-2xl"
          >
            <img
              src={img}
              alt="Big View"
              className="w-full h-auto object-cover mt-auto"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default AdBlock;
