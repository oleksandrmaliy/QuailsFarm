import { Helmet } from 'react-helmet-async';

import { Farm } from '../components/farm.jsx';

const About = () => {
  return (
    <>
      <Helmet>
        <title>
          Ферма сімейної справи - Вирощуємо Техаських білих перепелів
        </title>
        <meta
          name="description"
          content="Наше фермерське господарство спеціалізується на вирощуванні Техаських білих бройлерних перепелів. Натуральне м'ясо та яйця перепелів для вашого здоров'я."
        />
        <meta
          name="keywords"
          content="ферма сімейної справи, Техаський білий бройлер, перепели, м'ясо перепелів, перепелині яйця, фермерське господарство, натуральне м'ясо, здорове харчування"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Farm />
    </>
  );
};

export default About;
