import { Contacts } from './contacts.jsx';

export const Footer = () => {
  return (
    <footer className="flex p-4 bg-primaryColor text-center">
      <div className="w-fit mx-auto text-bgColor ">
        <Contacts
          texts={[]}
          className={'w-fit mx-auto flex flex-row gap-2 justify-center'}
        />

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
