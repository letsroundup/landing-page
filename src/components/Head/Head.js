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
const commentIE9 = '<!--[if lt IE 9]><script src="js/html5shiv.js"></script><script src="js/respond.min.js"></script><![endif]-->';

const DESCRIPTION = 'Know what the places you love are offering. Solidify plans with your friends.';
const SOCIAL_DESCRIPTION = 'Voo helps you and your friends to go to the places you love, for less.';
const NAME = 'Voo';

export default React.createClass({
  displayName: 'Head',

  propTypes: {
    title: React.PropTypes.string.isRequired,
  },

  getDefaultProps() {
    return { title: 'Try Voo' };
  },

  render() {
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
        <link href="font-awesome/css/font-awesome.min.css" rel="stylesheet"/>
        <link href="http://fonts.googleapis.com/css?family=Roboto:100,300,400" rel="stylesheet" type="text/css"/>
        <link href="css/bootstrap.min.css" rel="stylesheet"/>
        <link href="css/animate.min.css" rel="stylesheet"/>
        <link href="css/jssocials.css" rel="stylesheet" type="text/css"/>
        <link href="css/jssocials-theme-custom.css" rel="stylesheet" type="text/css"/>
        <link href="css/style.css" rel="stylesheet"/>
        <link href="/main.css" rel="stylesheet" type="text/css"/>

        {/* Scripts */}
        <script type="text/javascript" src="/analytics.js"/>
        <script src="js/modernizr.custom.min.js"/>
      </head>
    );
  },
});
