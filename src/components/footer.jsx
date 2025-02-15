import { Contacts } from './contacts.jsx';
import { texts } from '../services/constants.jsx';

export const Footer = () => {
  return (
    <footer className="flex p-4 bg-primaryColor text-center">
      <div className="w-fit mx-auto text-bgColor ">
        <div className="flex flex-row gap-2">
          <Contacts
            texts={texts}
            className={'w-fit mx-auto flex flex-wrap gap-2 justify-center '}
            showText={false}
          />
        </div>

        <p className="font-caveat font-bold text-3xl">
          Ферма &ldquo;Шляхетна перепілка&rdquo;
        </p>

        <p className="text-base">
          &copy; {new Date().getFullYear()}. Усі права захищені.
        </p>

        <p>
          Розроблено <span className="font-marck text-xl">MaliyCo</span>.
        </p>
      </div>
    </footer>
  );
};
