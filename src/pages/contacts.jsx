import { Helmet } from 'react-helmet-async';

import { Address } from '../components/adrress.jsx';

const Contacts = () => {
  return (
    <>
      <Helmet>
        <title>Контакти та розташування ферми - Зв&apos;яжіться з нами</title>
        <meta
          name="description"
          content="Знайдіть всю необхідну інформацію для зв'язку з нашою фермою. Контакти, адреса та карта для відвідування."
        />
        <meta
          name="keywords"
          content="контакти ферми, адреса ферми, карта ферми, замовлення, консультації, фермерські продукти, місцезнаходження ферми"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Address />
    </>
  );
};

export default Contacts;
