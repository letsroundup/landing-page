import React from 'react';

import favicon from 'images/favicon.png';
import appleTouchIcon from 'images/apple-touch-icon.png';
import logoImg from 'images/square512.png';

const KEYWORDS = [
  'planning', 'calendar', 'dynamic pricing', 'chat',
  'group', 'app', 'iphone', 'startup',
  'together', 'deals', 'specials', 'bar',
  'restaurant', 'restaurants', 'bars', 'happy hour',
  'happy hours', 'social', 'voo', 'rdvoo', 'rendez-voo',
  'rendez-vous', 'tryvoo', 'events', 'plans',
].join(',');

const commentIE = '<!--[if IE]><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"><![endif]-->';
const commentIE9 = '<!--[if lt IE 9]><script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js"></script><script src="https://cdnjs.cloudflare.com/ajax/libs/respond.js/1.4.2/respond.min.js"></script><![endif]-->';

const DESCRIPTION = 'Know what the places you love are offering. Solidify plans with your friends.';
const SOCIAL_DESCRIPTION = 'Voo helps you and your friends go to the places you love, for less.';
const NAME = 'Voo';

let analytics;
/* eslint-disable */
if (!__DEV__) {
  const GOOGLE_TOKEN = 'UA-76811752-1';
  analytics = `(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
window.ga('create', '${GOOGLE_TOKEN}', 'auto');`
} else {
  analytics = `window.ga = function ga() {
  var _console;
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return (_console = console).debug.apply(_console, ['ANALYTICS:'].concat(args));
};`
}
/* eslint-enable */

export default React.createClass({
  displayName: 'Head',

  propTypes: {
    title: React.PropTypes.string.isRequired,
    assetsByChunkName: React.PropTypes.object.isRequired,
  },

  getDefaultProps() {
    return { title: 'Try Voo' };
  },

  render() {
    let cssTag = null;
    const main = this.props.assetsByChunkName.main;
    if (Array.isArray(main) && main.length > 1) {
      cssTag = <link href={`/${main[1]}`} rel="stylesheet" type="text/css"/>;
    }
    return (
      <head>
        <meta charSet="UTF-8"/>
        <title>{this.props.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
        <meta name="description" content={DESCRIPTION}/>
        <meta name="keywords" content={KEYWORDS}/>
        <meta name="author" content="RoundUp Social, Inc."/>
        <meta name="react-comment-ie" dangerouslySetInnerHTML={{__html: commentIE}}/>
        <meta name="react-comment-ie9" dangerouslySetInnerHTML={{__html: commentIE9}}/>

        {/* Social Media metatags */}
        {/* Schema.org markup for Google+ */}
        <meta itemProp="name" content={NAME}/>
        <meta itemProp="description" content={SOCIAL_DESCRIPTION}/>
        <meta itemProp="image" content={logoImg}/>

        {/* Twitter Card data */}
        <meta name="twitter:card" content="app"/>
        <meta name="twitter:site" content="@RdVoo"/>
        <meta name="twitter:description" content={SOCIAL_DESCRIPTION}/>
        <meta name="twitter:app:name:iphone" content={NAME}/>
        <meta name="twitter:app:id:iphone" content="1035084963"/>
        <meta name="twitter:app:id:ipad" content=""/>
        <meta name="twitter:app:id:googleplay" content=""/>
        <meta name="twitter:title" content={NAME}/>
        <meta name="twitter:image" content={logoImg}/>


        {/* Open Graph data */}
        <meta property="og:title" content={NAME}/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="http://www.tryvoo.com"/>
        <meta property="og:image" content={logoImg}/>
        <meta property="og:description" content={SOCIAL_DESCRIPTION}/>
        <meta property="og:site_name" content={NAME}/>

        {/* Favicons And Touch Icons */}
        <link rel="shortcut icon" type="image/png" href={favicon}/>
        <link rel="apple-touch-icon" href={appleTouchIcon}/>

        {/* Stylesheets */}
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400" rel="stylesheet" type="text/css"/>
        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet"/>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.1/animate.css" rel="stylesheet"/>
        {cssTag}

        {/* Scripts */}
        <script dangerouslySetInnerHTML={{ __html: analytics }}/>
      </head>
    );
  },
});
