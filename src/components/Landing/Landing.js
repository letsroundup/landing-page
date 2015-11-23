import React from 'react';

import styles from './Landing.scss';

import headerImg from 'images/header-small.png';
import cellphoneImg from 'images/cellphone@2x.png';
import handImg from 'images/hand.png';
import logoImg from 'images/logo.svg';

const DESCRIPTION = 'RoundUp lets you find deals at your favourite spots and easily solidify plans with your friends.';

export default class Landing extends React.Component {
  render() {
    return (
      <body>
        <div className={styles.headerContainer}>
          <div className={styles.textContainerHeader}>
            <div className={styles.textHeader}>
              This will be an expensive night*
            </div>
            <div className={styles.starHeader}>
              *If you don't use RoundUp
            </div>
          </div>
          <img id="header" className={styles.header} src={headerImg}/>
          <img className={styles.cellphone} src={cellphoneImg}/>
        </div>
        <div className={styles.container}>
          <div className={styles.empty}></div>
          <div className={styles.info}>
            <div className={styles.textContainer}>
              <div className={styles.text}>
                This will be an expensive night*
              </div>
              <div className={styles.star}>
                *If you don't use RoundUp
              </div>
            </div>
            <div className={styles.formContainer}>
              <p className={styles.roundupText}>{DESCRIPTION}</p>
              <form action="#" id="form" className={styles.form} method="post">
                <input type="tel" name="phone" id="phoneNumber" placeholder="Enter phone number" required/>
                <button className={styles.button} type="submit">Get early access</button>
              </form>
              <div id="form-response" className={`${styles.response} ${styles.hidden}`}>
                <p>Thanks! We'll text you when it's your turn.</p>
              </div>
            </div>
          </div>
          <p className={styles.roundupTextMobile}>{DESCRIPTION}</p>
          <div className={styles.handContainer}>
            <img className={styles.hand} src={handImg}/>
          </div>
          <div className={styles.logoContainer}>
            <img className={styles.logo} src={logoImg}/>
          </div>
        </div>
        <script type="text/javascript" src="/landing.js"/>
      </body>
    );
  }
};
