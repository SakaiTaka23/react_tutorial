import React from 'react';
import { social, links } from '../data';

const Sidebar = () => {
  return (
    <aside>
      <div>this is sidebar</div>
      <ul>
        {/* {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              {icon}
              {text}
              {url}
            </li>
          );
        })} */}
      </ul>
      <ul>
        {/* {social.map((link) => {
          const { id, url, icon } = link;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })} */}
      </ul>
    </aside>
  );
};

export default Sidebar;
