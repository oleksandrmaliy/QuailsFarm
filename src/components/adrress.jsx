import { IconCover } from './iconCover.jsx';

import { GrInstagram } from 'react-icons/gr';
import { FaTiktok } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { FaFacebookF } from 'react-icons/fa6';
import { FaPhone } from 'react-icons/fa6';

// import { IoMdMail } from 'react-icons/io';
// import { FaPhoneVolume } from 'react-icons/fa';

export const Address = () => {
  const address = `Контакти та розташування`;

  return (
    <>
      <section className="text-gray-900 bg-bgColor rounded-xl my-4 pt-4">
        <h2 className="mb-4 text-xl font-bold text-center">{address}</h2>
        <div className="grid grid-cols-1 mb-4">
          <IconCover link={'tel:380501231518'} text={'+380 (50) 123-15-18'}>
            <FaPhone className="w-8 h-8" />
          </IconCover>
          <IconCover
            link={'mailto:perepilka@gmail.com'}
            text={'perepilka@gmail.com'}
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
          {/* <IconCover link={'tel:380501231518'} text={'+380 (50) 123-15-18'}>
          <FaPhoneVolume className="w-9 h-9" />
        </IconCover> */}
          {/* <IconCover
          link={'mailto:perepilka@gmail.com'}
          text={'perepilka@gmail.com'}
        >
          <IoMdMail className="w-9 h-9" />
        </IconCover> */}
        </div>

        <div className="text-base">
          <div className="w-full h-[500px] shadow-custom-green rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d42304.11054642485!2d29.8193458!3d48.4947595!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40cdece76808efe9%3A0x26551f1c950376ae!2z0KjQu9GP0YXQvtCy0LAsINCS0ZbQvdC90LjRhtGM0LrQsCDQvtCx0LvQsNGB0YLRjCwgMjQ0MzI!5e0!3m2!1suk!2sua!4v1736453115275!5m2!1suk!2sua"
              className="w-full h-full"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};
