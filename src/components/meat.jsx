import { useState, useEffect } from 'react';

import { SectionYellow } from './sectionYellow';
import { Title } from './title.jsx';

import MeatTextOne from './meatTextOne.jsx';
import MeatTextTwo from './meatTextTwo.jsx';
import MoreButton from './moreButton.jsx';

export const Meat = () => {
  const [effect, setEffect] = useState(false);
  const [meatText, setMeatText] = useState(false);

  const identity = 'meatButton';

  useEffect(() => {
    if (!effect) {
      return;
    }
    if (!meatText) {
      document.getElementById(identity)?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }, [effect, meatText]);

  const handleClick = () => {
    setMeatText(!meatText);
    setEffect(true);
  };

  return (
    <SectionYellow>
      <Title>
        М&apos;ясо техаського білого перепела: аромат соковитої ніжності
      </Title>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8">
        <div>
          <p className="indent-30">
            <b>М’ясо перепелів – смак і користь на вашому столі</b>
          </p>
          <p className="indent-30">
            Наша ферма пропонує якісне м’ясо перепелів, вирощених у натуральних
            умовах. Техаський білий бройлерний перепел відомий своїм великим
            розміром і ніжним м’&apos;ясом, багатим на білок, залізо та інші
            корисні речовини. Це ідеальний продукт для здорового харчування,
            який легко засвоюється та підходить навіть для дитячого раціону.
          </p>
          {meatText && <MeatTextOne />}
        </div>
        <div>
          {meatText && <MeatTextTwo />}
          <p className="indent-30">
            <strong>
              Обираючи м’ясо техаського білого перепела, ви насолоджуєтеся
              продуктом найвищої якості, вирощеним із турботою та
              відповідальністю.
            </strong>
          </p>
          <p className="indent-30">
            <strong>
              Замовляйте ніжне й поживне м’ясо нашої ферми та відкрийте для себе
              новий рівень смаку!
            </strong>
          </p>
        </div>
      </div>
      <div className="flex pt-4 justify-center">
        <MoreButton
          id={identity}
          data={meatText}
          setData={setMeatText}
          onClick={handleClick}
        />
      </div>
    </SectionYellow>
  );
};
