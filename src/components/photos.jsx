export const Photos = () => {
  const photos = `Знайомтеся ближче з нашою фермою`;

  return (
    <>
      <div className="border-2 border-green-900 rounded-2xl mb-8 p-8">
        <h2 className="mb-8 text-3xl font-bold text-center">{photos}</h2>
        <div className="text-2xl">
          <ul className="grid grid-cols-2 gap-8">
            <li className="border-2 border-green-900 shadow-md shadow-green-500 rounded-xl overflow-hidden">
              <img
                src="./public/quail1.jpg"
                alt="Фото"
                className="w-full h-auto"
              />
              <p className="text-center">Перепелка</p>
            </li>
            <li className="border-2 border-green-900 shadow-md shadow-green-500 rounded-xl overflow-hidden">
              <img
                src="./public/quail2.jpg"
                alt="Фото"
                className="w-full h-auto"
              />
              <p className="text-center">Яєчки, да</p>
            </li>
            <li className="border-2 border-green-900 shadow-md shadow-green-500 rounded-xl overflow-hidden">
              <img
                src="./public/quail3.jpg"
                alt="Фото"
                className="w-full h-auto"
              />
              <p className="text-center">Перепелки смачні</p>
            </li>
            <li className="border-2 border-green-900 shadow-md shadow-green-500 rounded-xl overflow-hidden">
              <img
                src="./public/quail4.jpg"
                alt="Фото"
                className="w-full h-auto"
              />
              <p className="text-center">Перепел з яйцями</p>
            </li>
            <li className="border-2 border-green-900 shadow-md shadow-green-500 rounded-xl overflow-hidden">
              <img
                src="./public/quail5.jpg"
                alt="Фото"
                className="w-full h-auto"
              />
              <p className="text-center">Перепелка смачна</p>
            </li>
            <li className="border-2 border-green-900 shadow-md shadow-green-500 rounded-xl overflow-hidden">
              <img
                src="./public/quail6.jpg"
                alt="Фото"
                className="w-full h-auto"
              />
              <p className="text-center">Яєчки: а шо це, га?</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
