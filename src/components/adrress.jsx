import { SectionYellow } from './sectionYellow.jsx';
import { Title } from './title.jsx';

import { Contacts } from './contacts.jsx';
import { texts } from '../services/constants.jsx';

export const Address = () => {
  return (
    <SectionYellow>
      <Title>Контакти та розташування</Title>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="grid grid-col-1 w-fit mx-auto gap-2 md:min-w-60 md:flex md:flex-col">
          <Contacts
            texts={texts}
            className={
              'grid grid-cols-1 gap-4 w-fit mx-auto sm:grid-cols-2 md:grid-cols-1 whitespace-nowrap'
            }
            showText={true}
          />
        </div>
        <div className="w-full aspect-[2/1] md:aspect-auto md:max-h-full shadow-allGreen rounded-xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1396840.941729919!2d-96.05909488181491!3d29.64187935371128!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640b8b4488d8501%3A0xca0d02def365053b!2z0KXigJnRjtGB0YLQvtC9LCDQotC10YXQsNGBLCDQodC_0L7Qu9GD0YfQtdC90ZYg0KjRgtCw0YLQuCDQkNC80LXRgNC40LrQuA!5e1!3m2!1suk!2sua!4v1739651608610!5m2!1suk!2sua"
            className="w-full h-full"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </SectionYellow>
  );
};
