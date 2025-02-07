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
              'grid grid-cols-1 gap-2 w-fit mx-auto sm:grid-cols-2 md:grid-cols-1 whitespace-nowrap'
            }
            showText={true}
          />
        </div>
        <div className="w-full aspect-[2/1] md:aspect-auto md:max-h-full shadow-allGreen rounded-xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d729155.3016498878!2d-96.71024368703887!3d29.83021909874699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640b8b4488d8501%3A0xca0d02def365053b!2z0KXRjNGO0YHRgtC-0L0sINCi0LXRhdCw0YEsINCh0KjQkA!5e1!3m2!1sru!2sua!4v1737626537599!5m2!1sru!2sua"
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
