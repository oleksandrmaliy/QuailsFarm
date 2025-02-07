import { Helmet } from 'react-helmet-async';

import { PhotoGallery } from '../components/photoGallery.jsx';

const Gallery = ({ sModal }) => {
  return (
    <>
      <Helmet>
        <title>
          Фотогалерея ферми - Перегляньте нашу діяльність та продукцію
        </title>
        <meta
          name="description"
          content="Подивіться фотогалерею нашої ферми та дізнайтесь більше про наші перепели, продукцію та фермерське життя."
        />
        <meta
          name="keywords"
          content="галерея ферми, фото фермерської діяльності, фермерське господарство, фотографії перепелів, сільське господарство, фермерські тварини"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <PhotoGallery sModal={sModal} />
    </>
  );
};

export default Gallery;
