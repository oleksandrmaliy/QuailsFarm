import { Contacts } from './contacts.jsx';
import { IconCover } from './iconCover.jsx';
import { BsGeoAltFill } from 'react-icons/bs';

export const Footer = () => {
  return (
    <footer className="flex p-4 bg-primaryColor text-center">
      <div className="w-fit mx-auto text-bgColor ">
        <div className="flex flex-row gap-2">
          <Contacts
            texts={[]}
            className={'w-fit mx-auto flex flex-row gap-2 justify-center'}
          />
          <IconCover
            link={'https://maps.app.goo.gl/nXSa2XPNPPRjQ8J17'}
            text={''}
          >
            <BsGeoAltFill className="w-9 h-9" />
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
