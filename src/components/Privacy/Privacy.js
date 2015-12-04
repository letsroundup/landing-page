import React from 'react';

import Section from './Section';
import Link from './Link';

import styles from './Privacy.scss';

import logoImg from 'images/logo.svg';


const ORDER = [
  'introduction', 'information_collection', 'cookies', 'use_of_information',
  'information_sharing', 'public_forums', 'child_safety', 'external_links',
  'third_party_data', 'security', 'storage_of_information', 'rights', 'contact',
];

import sections from './sectionsContent';

export default class Privacy extends React.Component {
  render() {
    return (
      <body>
        <div className={styles.container}>
          <header className={styles.header}>
            <a href="/">
              <img className={styles.logo} src={logoImg}/>
            </a>
          </header>
          <nav>
            <ul className={styles.list}>
              {ORDER.map((k) => (
                <Link key={k} id={k}>{sections[k].title}</Link>
              ))}
            </ul>
          </nav>
          <content>
            {ORDER.map((k) => (
              <Section key={k} id={k} title={sections[k].title}>
                {sections[k].content}
              </Section>
            ))}
          </content>
        </div>
        <script type="text/javascript" src="/privacy.js"/>
      </body>
    );
  }
}
