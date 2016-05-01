import React from 'react';

import Section from './Section';
import Link from './Link';

import styles from './Legal.scss';

import logoImg from 'images/logo.svg';

export default class Legal extends React.Component {
  static propTypes = {
    title: React.PropTypes.string.isRequired,
    order: React.PropTypes.arrayOf(React.PropTypes.string),
    sections: React.PropTypes.objectOf(
      React.PropTypes.shape({
        title: React.PropTypes.string.isRequired,
        content: React.PropTypes.arrayOf(
          React.PropTypes.node
        ).isRequired,
      })
    )
  };

  render() {
    return (
      <body>
        <div className={styles.container}>
          <header className={styles.header}>
            <a href="/">
              <img className={styles.logo} src={logoImg}/>
            </a>
          </header>
          <h1>{this.props.title}</h1>
          <nav>
            <ul className={styles.list}>
              {this.props.order.map((k) => (
                <Link key={k} id={k}>{this.props.sections[k].title}</Link>
              ))}
            </ul>
          </nav>
          <content>
            {this.props.order.map((k) => (
              <Section key={k} id={k} title={this.props.sections[k].title}>
                {this.props.sections[k].content}
              </Section>
            ))}
          </content>
        </div>
        <script type="text/javascript" src="/legal.js"/>
      </body>
    );
  }
}


