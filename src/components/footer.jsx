import { IconCover } from './iconCover.jsx';

import { GrInstagram } from 'react-icons/gr';
import { FaTiktok } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { FaFacebookF } from 'react-icons/fa6';
import { FaPhone } from 'react-icons/fa6';

export const Footer = () => {
  return (
    <footer className="flex p-4 bg-primaryColor text-center">
      <div className="w-fit mx-auto text-bgColor ">
        <div className="w-fit mx-auto flex flex-row gap-2 justify-center">
          <IconCover link={'tel:+380555555555'} text={''}>
            <FaPhone className="w-8 h-8" />
          </IconCover>
          <IconCover link={'mailto:хьюстон-техас@gmail.com'} text={''}>
            <SiGmail className="w-8 h-8" />
          </IconCover>
          <IconCover link={'https://www.facebook.com'} text={''}>
            <FaFacebookF className="w-9 h-9" />
          </IconCover>
          <IconCover link={'https://www.instagram.com'} text={''}>
            <GrInstagram className="w-9 h-9" />
          </IconCover>
          <IconCover link={'https://www.tiktok.com'} text={''}>
            <FaTiktok className="w-9 h-9" />
          </IconCover>
        </div>

        <p className="font-caveat font-bold text-3xl">
          Ферма &ldquo;Шляхетна перепелка&rdquo;
        </p>
        <p className="text-base">
          &copy; {new Date().getFullYear()}. Усі права захищені.
        </p>
        <p>Розроблено MaliyCo.</p>
      </div>
    </footer>
  );
};
