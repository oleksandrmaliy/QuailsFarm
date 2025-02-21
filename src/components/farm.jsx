import { SectionYellow } from './sectionYellow';
import { Title } from './title';
import quailFarm from '../assets/images/quailfarm.jpg';

export const Farm = () => {
  return (
    <>
      <SectionYellow>
        <Title>Ферма сімейної справи</Title>
        <img
          src={quailFarm}
          alt="Quail Farm"
          className="w-full h-auto mb-4 rounded-xl overflow-hidden"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8">
          <div>
            <p className="indent-30">
              Протягом 15 років наша сім&apos;я з любов&apos;ю і відданістю
              займалася вирощуванням перепелів, набуваючи безцінного досвіду в
              цій справі. Ми створили успішний бізнес, який забезпечував людей
              якісною, корисною продукцією.
            </p>
            <p className="indent-30">
              Однак із початком російської агресії ми були змушені покинути
              рідний дім і нашу справу, залишивши все, що будували роками, щоб
              шукати безпечне місце для нових починань. Наша подорож привела нас
              на підконтрольну Україні територію, де ми вирішили не здаватися і
              почати все з нуля.
            </p>
            <p className="indent-30">
              Весна 2024 року стала знаковою не тільки для нас, а й для всього
              села Техаське у Техаській області. Саме тут ми відкрили сучасну
              ферму з вирощування Техаського білого бройлерного перепела –
              породи, що славиться своїм соковитим м&apos;ясом, високою
              продуктивністю і чудовими смаковими якостями.
            </p>
            <p className="indent-30">
              Наша ферма обладнана за останніми технологічними стандартами, що
              дозволяє нам забезпечувати найвищу якість продукції та комфортні
              умови для наших перепелів. Ми використовуємо тільки натуральні
              корми та дбаємо про добробут птахів, що робить наше м&apos;ясо не
              тільки смачним, а й корисним.
            </p>
            <p className="indent-30">
              Ми віримо, що наша історія – це приклад того, як наполегливість,
              віра в краще і любов до своєї справи можуть допомогти подолати
              будь-які труднощі. Завдяки підтримці громади та нашій відданості
              ми змогли відновити бізнес і знову дарувати людям якісну
              продукцію.
            </p>
          </div>
          <div>
            <p className="indent-30  mb-4">
              Запрошуємо вас стати частиною нашої історії успіху – скуштуйте
              м&apos;ясо Техаського білого бройлерного перепела та відчуйте
              різницю, яку створює справжня турбота і досвід, накопичений
              роками. Разом ми будуємо нове майбутнє, зберігаючи традиції та
              впроваджуючи інновації для ще кращого результату.
            </p>
            <p className="indent-[30px]">
              <b>Чому обирають нас?</b>
            </p>
            <ul className="indent-[30px] mb-4">
              <li>
                <b>Натуральний корм:</b> Усе готується виключно засобами ферми.
              </li>
              <li>
                <b>Висока якість продукції:</b> Ми дотримуємося всіх стандартів,
                щоб задовольнити найвибагливіших клієнтів.
              </li>
              <li>
                <b>Свіжість і доступність:</b> Завжди свіжа продукція за
                вигідними цінами.
              </li>
            </ul>
            <p className="indent-[30px]">
              <b>Зручні умови для наших клієнтів:</b>
            </p>
            <ul className="indent-[30px] mb-4">
              <li>
                <b>Самовивіз:</b> Ви можете особисто завітати на ферму та обрати
                продукцію.
              </li>
              <li>
                <b>Доставка Новою поштою:</b> Швидка доставка в будь-який регіон
                України.
              </li>
              <li>
                <b>Індивідуальна доставка:</b> Можливість домовитися про
                доставку прямо до вашого дому.
              </li>
            </ul>
            <p className="indent-30">
              <strong>
                Замовляйте смачне перепелине м’ясо та корисні яйця з нашої ферми
                – це найкращий вибір для вашого здоров’я та гастрономічного
                задоволення.
              </strong>
            </p>
            <p className="indent-30">
              <b>
                Телефонуйте прямо зараз – ми з нетерпінням чекаємо на ваші
                замовлення!
              </b>
            </p>
          </div>
        </div>
      </SectionYellow>
      {/* <SectionYellow>
        <div className="grid grid-cols-1">
          <div>
            <p className="indent-[30px]">
              <b>Чому обирають нас?</b>
            </p>
            <ul className="indent-[30px] mb-4">
              <li>
                <b>Натуральний корм:</b> Усе готується виключно засобами ферми.
              </li>
              <li>
                <b>Висока якість продукції:</b> Ми дотримуємося всіх стандартів,
                щоб задовольнити найвибагливіших клієнтів.
              </li>
              <li>
                <b>Свіжість і доступність:</b> Завжди свіжа продукція за
                вигідними цінами.
              </li>
            </ul>
            <p className="indent-[30px]">
              <b>Зручні умови для наших клієнтів:</b>
            </p>
            <ul className="indent-[30px] mb-4">
              <li>
                <b>Самовивіз:</b> Ви можете особисто завітати на ферму та обрати
                продукцію.
              </li>
              <li>
                <b>Доставка Новою поштою:</b> Швидка доставка в будь-який регіон
                України.
              </li>
              <li>
                <b>Індивідуальна доставка:</b> Можливість домовитися про
                доставку прямо до вашого дому.
              </li>
            </ul>
          </div>
        </div>
        <div className="md:text-center">
          <p className="indent-30 md:indent-0">
            <strong>
              Замовляйте смачне перепелине м’ясо та корисні яйця з нашої ферми –
              це найкращий вибір для вашого здоров’я та гастрономічного
              задоволення.
            </strong>
          </p>
          <p className="indent-30 md:indent-0">
            <b>
              Телефонуйте прямо зараз – ми з нетерпінням чекаємо на ваші
              замовлення!
            </b>
          </p>
        </div>
      </SectionYellow> */}
    </>
  );
};
