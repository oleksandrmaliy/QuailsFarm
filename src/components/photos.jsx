import galleryPhotos from './galleryphotos.jsx';

export const Photos = ({ sModal }) => {
  const titles = `Знайомтеся ближче з нашою фермою`;
  // console.log(sModal);

  return (
    <>
      <div className="border-2 border-green-900 rounded-2xl mb-8 p-8">
        <h2 className="mb-8 text-3xl font-bold text-center">{titles}</h2>

        <ul className="grid grid-cols-3 gap-4 text-2xl">
          {galleryPhotos.map(({ image, largeImage, title, text }, index) => (
            <li
              key={index}
              onClick={() => sModal({ largeImage, title, text })}
              className="cursor-pointer border-2 border-green-900 shadow-md shadow-green-500 rounded-xl overflow-hidden"
            >
              <img src={image} alt="Фото" className="w-full h-auto" />
              <p className="text-center">{title}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
