import { SectionYellow } from './sectionYellow';
import { Title } from './title.jsx';
import galleryPhotos from './galleryphotos.jsx';

export const Photos = ({ sModal }) => {
  return (
    <SectionYellow>
      <Title>Знайомтеся ближче з нашою фермою</Title>
      <ul className="grid grid-cols-1 gap-8 text-xl p-4 2xl:grid-cols-4">
        {galleryPhotos.map(({ image, largeImage, title, text }, index) => (
          <li
            key={index}
            onClick={() => sModal({ largeImage, title, text })}
            className="cursor-pointer shadow-allGreen rounded-xl hover:scale-[1.01] transition-transform 
            duration-300 ease-in-out overflow-hidden"
          >
            <img src={image} alt="Фото" className="w-full h-auto" />
            <p className="text-center">{title}</p>
          </li>
        ))}
      </ul>
    </SectionYellow>
  );
};
