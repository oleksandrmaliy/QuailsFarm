import { useState, useEffect } from 'react';

import { SectionYellow } from './sectionYellow';
import { Title } from './title.jsx';
import MoreButton from './moreButton.jsx';

import EggsTextOne from './eggsTextOne.jsx';
import EggsTextTwo from './eggsTextTwo.jsx';

export const Eggs = () => {
  const [effect, setEffect] = useState(false);
  const [eggsText, setEggsText] = useState(false);

  const identity = 'eggsButton';

  useEffect(() => {
    if (!effect) {
      return;
    }
    if (!eggsText) {
      document.getElementById(identity)?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }, [effect, eggsText]);

  const handleClick = () => {
    setEggsText(!eggsText);
    setEffect(true);
  };

  return (
    <SectionYellow>
      <Title>
        Перепелині яйця техаського бройлера: універсальність корисної якості
      </Title>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8">
        <div>
          <p className="indent-[30px]">
            <b>Перепелині яйця – джерело здоров’я</b>
          </p>
          <p className="indent-[30px]">
            На нашій фермі також активно займаються виробництвом перепелиних
            яєць. Вони відомі своїми корисними властивостями: високий вміст
            вітамінів, амінокислот і мікроелементів робить цей продукт
            незамінним для зміцнення імунітету та підтримки здоров’я.
          </p>
          {eggsText && <EggsTextOne />}
        </div>
        <div>
          {eggsText && <EggsTextTwo />}
          <p className="indent-30">
            <strong>
              Обираючи перепелині яйця нашого виробництва, ви отримуєте не лише
              корисний продукт, а й частинку любові та турботи, вкладених у
              кожен етап виробництва.
            </strong>
          </p>
          <p className="indent-30">
            <strong>
              Спробуйте перепелині яйця нашої ферми і переконайтеся у їхній
              якості вже сьогодні!
            </strong>
          </p>
        </div>
      </div>
      <div className="flex justify-center pt-4">
        <MoreButton data={eggsText} onClick={handleClick} id={identity} />
      </div>
    </SectionYellow>
  );
};
