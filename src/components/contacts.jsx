import React from 'react';
import { IconCover } from './iconCover.jsx';

export const Contacts = ({ texts, className, showText }) => {
  return (
    <ul className={className}>
      {texts.map(({ svg, text, link, classN }, index) => (
        <li key={index}>
          <IconCover link={link} text={showText ? text : null}>
            {React.cloneElement(svg, { className: classN })}
          </IconCover>
        </li>
      ))}
    </ul>
  );
};
