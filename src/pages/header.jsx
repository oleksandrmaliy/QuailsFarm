import { Navigation } from '../components/navigation.jsx';

export const Header = () => {
  return (
    <header className="flex items-center p-4">
      <div className="min-w-[1200px] flex flex-row items-center gap-6 p-6 mx-auto border-green-700 border-2 rounded-3xl">
        <img src="./quail.svg" alt="SVG Image" width="100" height="100" />

        <h1 className="text-5xl font-bold">Шляхетна перепілка</h1>

        <Navigation />
      </div>
    </header>
  );
};
