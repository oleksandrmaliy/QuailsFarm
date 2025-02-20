import { SectionYellow } from './sectionYellow.jsx';
import { Title } from './title.jsx';
import { photoArray } from '../services/photoArray.jsx';

export const PhotoGallery = ({ sModal }) => {
  return (
    <SectionYellow>
      <Title>Знайомтеся ближче з нашою фермою</Title>
      <ul className="grid grid-cols-1 gap-5 text-xl sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {photoArray.map(({ image, largeImage, title, text }, index) => (
          <li
            key={index}
            onClick={() => sModal({ largeImage, title, text })}
            className="cursor-pointer rounded-xl hover:shadow-allGreen hover:scale-[1.01] border-2 border-primaryColor transition-transform 
            duration-300 ease-in-out overflow-hidden"
          >
            <img src={image} alt="Фото" className="w-full aspect-[4/3]" />
            <p className="text-center py-2 font-bold text-primaryColor bg-bgColor">
              {title}
            </p>
          </li>
        ))}
      </ul>
    </SectionYellow>
  );
};
