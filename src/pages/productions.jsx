import { Helmet } from 'react-helmet-async';

import { Meat } from '../components/meat.jsx';
import { Eggs } from '../components/eggs.jsx';

const Productions = () => {
  return (
    <>
      <Helmet>
        <title>
          Продукція ферми - М&apos;ясо перепелів та яйця Техаського білого
          бройлера
        </title>
        <meta
          name="description"
          content="Придбати якісне м'ясо перепелів та яйця Техаського білого бройлера прямо з нашої ферми. Здорове харчування для вашої родини!"
        />
        <meta
          name="keywords"
          content="м'ясо перепелів, перепелині яйця, фермерська продукція, Техаський білий бройлер, натуральне м'ясо, здорове харчування, фермерське господарство"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Meat />
      <Eggs />
    </>
  );
};

export default Productions;
