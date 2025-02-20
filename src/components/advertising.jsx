import { useState } from 'react';
import adimgone from '../assets/images/adimgone.jpg';
import adimgtwo from '../assets/images/adimgtwo.jpg';

import AdOne from './ads';
import AdTwo from './ads';

export const Advertising = () => {
  const [adOne, setAdOne] = useState(true);
  const [adTwo, setAdTwo] = useState(true);

  const textOne = 'Це реклама номер один';
  const urlOne = '#';

  const textTwo = 'Це реклама номер дра';
  const urlTwo = '#';

  return (
    <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {adOne && (
        <AdOne
          img={adimgone}
          url={urlOne}
          text={textOne}
          setAdState={setAdOne}
        />
      )}
      {adTwo && (
        <AdTwo
          img={adimgtwo}
          url={urlTwo}
          text={textTwo}
          setAdState={setAdTwo}
        />
      )}
    </section>
  );
};
