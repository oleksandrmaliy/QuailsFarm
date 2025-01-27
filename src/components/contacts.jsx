import { IconCover } from './iconCover.jsx';

import { TbBrandInstagramFilled } from 'react-icons/tb';
import { FaTiktok } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { FaFacebookF } from 'react-icons/fa6';
import { FaPhone } from 'react-icons/fa6';

export const Contacts = ({ texts, className }) => {
  return (
    <div className={className}>
      <IconCover link={'tel:+380555555555'} text={texts[0]}>
        <FaPhone className="size-8" />
      </IconCover>
      <IconCover link={'mailto:myquail@gmail.com'} text={texts[1]}>
        <SiGmail className="size-8" />
      </IconCover>
      <IconCover link={'https://www.facebook.com'} text={texts[2]}>
        <FaFacebookF className="size-9" />
      </IconCover>
      <IconCover link={'https://www.instagram.com'} text={texts[3]}>
        <TbBrandInstagramFilled className="size-10" />
      </IconCover>
      <IconCover link={'https://www.tiktok.com'} text={texts[4]}>
        <FaTiktok className="size-9" />
      </IconCover>
    </div>
  );
};
