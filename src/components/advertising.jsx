import { useState } from 'react';

import AdsOne from './ads';
import AdsTwo from './ads';

export const Advertising = () => {
  const [adOne, setAdOne] = useState(true);
  const [adTwo, setAdTwo] = useState(true);

  const textOne = 'Це реклама номер один';
  const urlOne = '#';
  const imgOne = '../../src/assets/alimgone.jpg';

  const textTwo = 'Це реклама номер дра';
  const urlTwo = '#';
  const imgTwo = '../../src/assets/alimgtwo.jpg';

  return (
    <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {/* <div className="w-full p-4 bg-primaryColor rounded-xl overflow-hidden flex flex-col justify-between">
        <div className="text-bgColor mb-4">
          <p>Реклама від партнерів: </p>
          <b>
            Тут має бути ваша реклама!
            <br />
            Тут обов`язково має бути ваша реклама!
          </b>
        </div>
        <div className="w-full shadow-allYellow rounded-xl overflow-hidden hover:scale-[1.01] transition-transform duration-300 ease-in-out">
          <a
            href="#"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="block cursor-pointer rounded-2xl"
          >
            <img
              src="/blank.jpg"
              alt="Big View"
              className="w-full h-auto object-cover mt-auto"
            />
          </a>
        </div>
      </div> */}
      {adOne && (
        <AdsOne
          img={imgOne}
          url={urlOne}
          text={textOne}
          setAdState={setAdOne}
        />
      )}
      {adTwo && (
        <AdsTwo
          img={imgTwo}
          url={urlTwo}
          text={textTwo}
          setAdState={setAdTwo}
        />
      )}

      {/* <div className="w-full p-4 bg-primaryColor rounded-xl overflow-hidden flex flex-col justify-between">
        <div className="text-bgColor mb-4">
          <p>Реклама від партнерів: </p>
          <b>
            Тут має бути ваша реклама!
            <br />
            Тут обов`язково має бути ваша реклама!
          </b>
        </div>
        <div className="w-full shadow-allYellow rounded-xl overflow-hidden hover:scale-[1.01] transition-transform duration-300 ease-in-out">
          <a
            href="#"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="block cursor-pointer rounded-2xl"
          >
            <img
              src="/blank.jpg"
              alt="Big View"
              className="w-full h-auto object-cover mt-auto"
            />
          </a>
        </div>
      </div> */}
    </section>
  );
};
