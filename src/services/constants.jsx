import { TbBrandInstagramFilled } from 'react-icons/tb';
import { FaTiktok } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { FaFacebookF } from 'react-icons/fa6';
import { FaPhone } from 'react-icons/fa6';
import { BsGeoAltFill } from 'react-icons/bs';

export const texts = [
  {
    svg: <FaPhone />,
    text: 'Поза зоною',
    // link: 'tel:+380555555555',
    link: '#',
    classN: 'size-8',
  },
  {
    svg: <SiGmail />,
    text: 'Зачинена',
    // link: 'mailto:myquail@gmail.com',
    link: '#',
    classN: 'size-8',
  },
  {
    svg: <FaFacebookF />,
    text: 'Facebook',
    link: 'https://www.facebook.com',
    classN: 'size-9',
  },
  {
    svg: <TbBrandInstagramFilled />,
    text: 'Instagram',
    link: 'https://www.instagram.com',
    classN: 'size-10',
  },
  {
    svg: <FaTiktok />,
    text: 'Tiktok',
    link: 'https://www.tiktok.com',
    classN: 'size-9',
  },
  {
    svg: <BsGeoAltFill />,
    text: 'Позиція на мапі',
    link: 'https://maps.app.goo.gl/nXSa2XPNPPRjQ8J17',
    classN: 'size-9',
  },
];
