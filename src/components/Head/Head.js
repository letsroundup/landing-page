import React from 'react';

import favicon from 'images/favicon.png';

const KEYWORDS = [
  'roundup', 'social', 'planning', 'calendar',
  'dynamic', 'pricing', 'chat', 'group', 'app',
  'iphone', 'startup', 'together', 'deals', 'specials',
  'restaurant', 'bar', 'restaurants', 'bars', 'happy', 'hour',
].join(',');
const DESCRIPTION = 'UP Social lets you find deals at your favourite spots and easily solidify plans with your friends.';

export default React.createClass({
  displayName: 'Head',

  getDefaultProps() {
    return { title: 'RoundUp Social Inc.' };
  },

  render() {
    return (
      <head>
        <meta charSet="UTF-8"/>
        <title>{this.props.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="description" content={DESCRIPTION}/>
        <meta name="keywords" content={KEYWORDS}/>
        <link rel="stylesheet" type="text/css" href="/main.css"/>
        <link rel="shortcut icon" type="image/png" href={favicon}/>
        <script type="text/javascript" src="/analytics.js"/>
      </head>
    );
  },
});
