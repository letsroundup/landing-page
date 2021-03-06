import React from 'react';

import { contactUs } from '../common';

import styles from '../Legal.scss';

export const title = 'Privacy Policy';

export const order = [
  'introduction', 'information_collection', 'cookies', 'use_of_information',
  'information_sharing', 'public_forums', 'child_safety', 'external_links',
  'third_party_data', 'security', 'storage_of_information', 'rights', 'contact',
];

export const sections = {
  introduction: {
    title: 'Introduction',
    content: [
      <p>
        This is the privacy and cookies policy for RoundUp Social, Inc., and our related service providers, including but not limited to Google, Localytics, Twilio, OpenTable, Groupon, Uber and Mogl, Imgur, Giphy (<b>we</b>, <b>us</b> and <b>our</b>) in connection with our mobile software application and related website (collectively, the “App”). For the purposes of the Data Protection Act 1998 and similar acts, we are the data controller.
      </p>,
      <p>
        We are committed to protecting your privacy on-line. We appreciate that you do not want the personal information you provide to us distributed indiscriminately and here we explain how we collect information, what we do with it and what controls you have.
      </p>,
      <p>
        By using the App on certain terminals such as an iPhone, iPad, iPod, Windows, Mac or Android, you consent to the collection and use of information in accordance with this privacy policy.
      </p>,
      <p>
        We reserve the right to change this privacy policy from time to time by changing it on the App and website. This privacy policy was last updated on <b>Saturday April 30th, 2016</b>.
      </p>,
    ],
  },
  information_collection: {
    title: 'Information we may collect from you',
    content: [
      <p>We may collect and process the following information about you:</p>,
      <ul className={styles.bulletedList}>
        <li>
          information (such as your name, email address, postal address, billing address, telephone number, payment information, occupation, how you heard of us) that you provide by using products on the App or completing forms, including if you register as a user of the App, upload or submit any material via the App, request any information, or enter into any competition or promotion we may sponsor;
        </li>
        <li>
          in connection with an account sign-in facility, your log-in and password details;
        </li>
        <li>
          details of any transactions made by you through the App;
        </li>
        <li>
          communications you send to us, for example to report a problem or to submit queries, concerns or comments regarding the App or its content; and
        </li>
        <li>
          information from surveys that we may, from time to time, run on the App for research purposes, if you choose to respond to, or participate in, them.
        </li>
        <li>
          Also, the purpose of our App is to make it easy for people to get together, meet, in places they love. As such, we request and have access to your calendar, your current or past locations, address books (contacts) and other personal information.

        </li>
      </ul>,
      <p>
        You are under no obligation to provide any such information. However, if you should choose to withhold requested information, we may not be able to provide you with all or some of the services.
      </p>,
      <p>
        We may, from time to time, run referral programs or similar initiatives, such as a "Tell a Friend" program, that invite you to provide us with the contact details of someone who is known to you who may find our products or services to be of interest. We will only use those contact details for the purpose of the relevant initiative (and never for general marketing purposes). By providing us with their details, you confirm that you have their permission to do so and must not provide us with the details of anyone from whom you do not have such permission. We reserve the right to identify you as the person who has made the referral in the message that is sent to them.
      </p>,
      <p>
        When you visit the App, we may automatically collect additional information about you, such as the type of internet browser you use, any website from which you have come to the App and your IP address (the unique address which identifies your computer on the internet) which is automatically recognized by our web server. You cannot be identified from this information and it is only used to assist us in providing an effective service on the App and to collect broad demographic information for aggregate use.
      </p>,
    ],
  },
  cookies: {
    title: 'Cookies',
    content: [
      <p>
        When you visit the App, our web server sends a cookie to your computer. Cookies are small pieces of information which are issued to your computer when you visit a website and which store and sometimes track information about your use of the App. A number of cookies we use last only for the duration of your web session and expire when you close your browser. Other cookies are used to remember you when you return to the App and will last for longer.
      </p>,
      <p>
        We use cookies to:
      </p>,
      <ul className={styles.bulletedList}>
        <li>
          remember that you have visited us before; this means we can identify the number of unique visitors we receive. This allows us to make sure we have enough capacity for the number of users that we get;
        </li>
        <li>
          customize elements of the promotional layout and/or content of the pages of the App;
        </li>
        <li>
          collect anonymous statistical information about how you use the App (including how long you spend on the App) and where you have come to the App from, so that we can improve the App and learn which parts of the App are most popular with visitors;
        </li>
        <li>
          gather information about the pages on the App that you visit; and
        </li>
        <li>
          remember your login session so you can move from one page to another within the App.
        </li>
      </ul>,
      <p>
        Some of the cookies used by the App are set by us, and some are set by third parties who are delivering services on our behalf, including but not limited to Google, Localytics, Twilio, OpenTable, Groupon, Uber and Mogl.
      </p>,
      <p>
        Most web browsers automatically accept cookies but, if you prefer, you can change your browser to prevent that or to notify you each time a cookie is set. You can also learn more about cookies by visiting <a href="http://www.allaboutcookies.org">www.allaboutcookies.org</a> which includes additional useful information on cookies and how to block cookies using different types of browser. Please note, however, that by blocking or deleting cookies used on the App, you may not be able to take full advantage of the App.
      </p>,
      <p>
        Our cookies
      </p>,
      <ul className={styles.titledList}>
        <li>
          <h2>Essential session management</h2>
          <ul className={styles.bulletedList}>
            <li>
              Creating a specific log-in session for a visitor to our App in order that the site remembers that a visitor is logged in and that their page requests are delivered in an effective, secure and consistent manner.
            </li>
            <li>
              Recognizing when a visitor to the App has visited before; this means we can identify the number of unique visitors we receive to the App and allows us to make sure we have enough capacity for the number of users that we get.
            </li>
            <li>
              Recognizing when a visitor to the App is a registered member.
            </li>
            <li>
              We may also log information from your computer including the existence of cookies, your IP address and information about your browser program in order to allow us to diagnose problems, administer and track your usage of our services.
            </li>
          </ul>
        </li>
        <li>
          <h2>Functionality</h2>
          <ul className={styles.bulletedList}>
            <li>
              Customizing elements of the promotional layout and/or content of the pages of the App for example by storing a country code and providing users with content relevant to their country.
            </li>
          </ul>
        </li>
        <li>
          <h2>Performance and measurement</h2>
          <ul className={styles.bulletedList}>
            <li>
              Collecting statistical information about how our visitors use the App so that we can improve the App and learn which parts are most popular to visitors.
            </li>
          </ul>
        </li>
      </ul>,
      <p>
        In addition to cookies, tracking Gifs may be set by us or third parties in respect of your use of the App. Tracking Gifs are small image files within the content of the App or the body of our newsletters so we or third parties can understand which parts of the App are visited and whether particular content is of interest.
      </p>,
    ],
  },
  use_of_information: {
    title: 'Uses made of your information',
    content: [
      <p>We will use the information you provide to:</p>,
      <ul className={styles.bulletedList}>
        <li>
          enable us to process your orders and to provide you with the services and information offered through the App and which you request;
        </li>
        <li>
          administer your account with us;
        </li>
        <li>
          verify and carry out financial transactions in relation to payments you make online;
        </li>
        <li>
          audit the downloading of data from the App;
        </li>
        <li>
          improve the layout and/or content of the pages of the App and customise them for users;
        </li>
        <li>
          identify visitors to the App;
        </li>
        <li>
          carry out research on our users' demographics and tracking of sales data;
        </li>
        <li>
          send you information we think you may find useful or which you have requested from us, including information about our products and services, provided you have indicated that you do not object to being contacted for these purposes.
        </li>
        <li>
          We will send analytics to our retail partners but such analytics will not contain any personally identifiable information about you without your consent.
        </li>
      </ul>,
      <p>
        You can tell us not to contact you with information regarding our products and services, either at the point such information is collected on the App (by checking or un-checking (as directed) the relevant box) or, where you do not wish us to continue to use your information in this way, by following the unsubscribe instructions on any communications sent to you. You can also exercise the right at any time by contacting us using the Contacting us details at the end of this privacy policy.
      </p>,
    ],
  },
  information_sharing: {
    title: 'Information sharing',
    content: [
      <p>
        We may disclose aggregate statistics about visitors to the App, customers and sales in order to describe our services to prospective partners, advertisers, sponsors and other reputable third parties and for other lawful purposes, but these statistics will include no personally identifiable information.
      </p>,
      <p>
        We may disclose your personal information to any of our affiliates, or to our agents or contractors who assist us in providing the services we offer through the App, processing transactions, fulfilling requests for information, receiving and sending communications, updating marketing lists, analyzing data, providing support services or in other tasks, from time to time. Our agents and contractors will only use your information to the extent necessary to perform their functions.
      </p>,
      <p>
        In the event that we undergo re-organization or are sold to a third party, you agree that any personal information we hold about you may be transferred to that re-organized entity or third party.
      </p>,
      <p>
        We may disclose your personal information if required to do so by law or if we believe that such action is necessary to prevent fraud or cyber crime or to protect the App or the rights, property or personal safety of any person.
      </p>,
    ],
  },
  public_forums: {
    title: 'Public forums',
    content: [
      <p>
        The App may, from time to time, make chat rooms, message boards, news groups and/or other public forums available to its users. Any information that is disclosed in these areas becomes public information and you should exercise caution when using these and never disclose your personal information.
      </p>,
    ],
  },
  child_safety: {
    title: 'Child safety',
    content: [
      <p>
        Protecting the safety of children when they use the Internet is very important to us. We recommend that children receive permission from their parent or guardian before gaining access to the App or sending personal information to us or anyone else online.
      </p>,
    ],
  },
  external_links: {
    title: 'External links',
    content: [
      <p>
        The App may, from time to time, contain links to external sites. We are not responsible for the privacy policies or the content of such sites.
      </p>,
    ],
  },
  third_party_data: {
    title: 'Third Party Data',
    content: [
      <p>
        RoundUp Social Inc. use or may in the future use{' '}
        (i) the Google Maps API(s) and and you are hereby, in addition, bound by the <a href="https://www.google.com/policies/privacy/">Google Privacy Policy</a>;{' '}
        (ii) Localytics and you are additionally bound by their <a href="https://www.localytics.com/privacy-policy/">Privacy Policy</a>;{' '}
        (iii) Twillio and you are additionally bound by their <a href="https://www.twilio.com/legal/privacy">Privacy Policy</a>;{' '}
        (iv) OpenTable and you are additionally bound by their <a href="http://www.opentable.com/info/privacypolicy.aspx">Privacy Policy</a>;{' '}
        (v) Groupon and you are additionally bound by their <a href="https://www.groupon.com/privacy">Privacy Policy</a>;{' '}
        (vi) Uber and you are additionally bound by their <a href="https://www.uber.com/legal/privacy/users/en/">Privacy Policy</a>;{' '}
        (vii) Mogl and you are additionally bound by their <a href="https://www.mogl.com/st/privacyPolicy.ajax">Privacy Policy</a>.
        (viii) Imgur and you are additionally bound by their <a href="https://imgur.com/privacy">Privacy Policy</a>.
        (viii) Giphy and you are additionally bound by their <a href="https://giphy.com/privacy">Privacy Policy</a>.
      </p>,
    ],
  },
  security: {
    title: 'Security',
    content: [
      <p>
        We place great importance on the security of all personally identifiable information associated with our users. We have security measures in place to attempt to protect against the loss, misuse and alteration of personal information under our control. For example, our security and privacy policies are periodically reviewed and enhanced as necessary and only authorized personnel have access to personal information. Whilst we cannot ensure or guarantee that loss, misuse or alteration of information will never occur, we use all reasonable efforts to prevent it.
      </p>,
      <p>
        You should bear in mind that submission of information over the internet is never entirely secure. We cannot guarantee the security of information you submit via the App whilst it is in transit over the internet and any such submission is at your own risk.
      </p>,
      <p>
        It is advisable to close your browser when you have finished your user session to help ensure others do not access your personal information if you use a shared computer or a computer in a public place.
      </p>,
    ],
  },
  storage_of_information: {
    title: 'Storage of your information',
    content: [
      <p>
        Information that you submit via the App is sent to and stored on secure servers operated by Google Cloud Services. This is necessary in order to process the information. Information submitted by you may be transferred by us to our other offices and/or to the third parties mentioned in the circumstances described above (see Information sharing), which may be situated outside the United States.
      </p>,
    ],
  },
  rights: {
    title: 'Your rights',
    content: [
      <p>
        You have a legal right under the Data Protection Act 1998 to a copy of all the personal information about you held by us. On request, we will provide you with a copy of this information subject to a fee not exceeding $20.00. You also have a right to correct any errors in that information. As mentioned above, you have a right to prevent the use of your personal information for direct marketing purposes.
      </p>,
    ],
  },
  contact: contactUs,
};
