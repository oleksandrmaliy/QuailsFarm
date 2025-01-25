import { SectionYellow } from './sectionYellow.jsx';
import { Title } from './title.jsx';
import { IconCover } from './iconCover.jsx';

import { GrInstagram } from 'react-icons/gr';
import { FaTiktok } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { FaFacebookF } from 'react-icons/fa6';
import { FaPhone } from 'react-icons/fa6';

export const Address = () => {
  return (
    <>
      <SectionYellow>
        <Title>Контакти та розташування</Title>
        <div className="grid grid-cols-1 gap-2 mb-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          <IconCover link={'tel:+380555555555'} text={'Тел: 055-555-55-55'}>
            <FaPhone className="w-8 h-8" />
          </IconCover>
          <IconCover
            link={'mailto:myquail@gmail.com'}
            text={'myquail@gmail.com'}
          >
            <SiGmail className="w-8 h-8" />
          </IconCover>
          <IconCover link={'https://www.facebook.com'} text={'Ми у Facebook'}>
            <FaFacebookF className="w-9 h-9" />
          </IconCover>
          <IconCover link={'https://www.instagram.com'} text={'Ми в Instagram'}>
            <GrInstagram className="w-9 h-9" />
          </IconCover>
          <IconCover link={'https://www.tiktok.com'} text={'Ми в Tiktok'}>
            <FaTiktok className="w-9 h-9" />
          </IconCover>
        </div>
        <div className="w-fit mb-4 mx-auto text-center justify-center text-xl flex flex-row gap-2 flex-wrap">
          <p className="">Адреса розташування підприємства: </p>
          <p className="font-bold">
            США, Техаська обл., Техаський р-н, c.Техаське
          </p>
        </div>

        <div className="text-base">
          <div className="w-full aspect-[2/1] shadow-allGreen rounded-xl overflow-hidden">
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
    </>
  );
};
