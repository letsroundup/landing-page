import React from 'react';

import styles from './Landing.scss';

import logoImg from 'images/logo.svg';
import logoDarkImg from 'images/logoDark.svg';
import appleDownloadImg from 'images/downloads/apple.png';
import downloadMobImg from 'images/download-mob.png';
import featuresMobVideo from 'images/features-mob.mp4';
import homeScreenVideo from 'images/home-screen.mp4';
import chatIconImg from 'images/svg/chat.svg';
import placeIconImg from 'images/svg/place.svg';
import calendarIconImg from 'images/svg/calendar.svg';
import pinIconImg from 'images/svg/pin.svg';
import upvoteIconImg from 'images/svg/upvote.svg';
import atIconImg from 'images/svg/at.svg';
import happyIconImg from 'images/svg/happy.svg';
import homeSlateImg from 'images/home.slate.jpg';
import chatSlateImg from 'images/chat.slate.jpg';

const navs = [
  { id: '#intro', label: 'Home' },
  { id: '#overview', label: 'Overview' },
  { id: '#affordable', label: 'Affordable' },
  { id: '#collaborate', label: 'Collaborative' },
  { id: '#integrated', label: 'Integrated' },
  { id: '#download', label: 'Download' },
  { id: '#contact', label: 'Contact' },
];

const downloadButton = <a href="https://1pd8.app.link/app-store"><img src={appleDownloadImg} alt="Apple App Store" /></a>;

const Video = ({ src, alt, className, slate }) => (
  <video autoPlay loop muted className={className} alt={alt} poster={slate}>
    <source src={src} type="video/mp4" />
    Sorry, your browser doesn't support embedded videos,
    but don't worry, you can <a href={src}>download it</a>
    and watch it with your favorite video player!
  </video>
);

export default class Landing extends React.Component {
  render() {
    return (
      <body id="page-top" data-spy="scroll" data-target="#scrollspy-nav">
        <div className="preloader">
          <div className={styles.status}>
              <img src={logoImg} alt="loading..."/>
          </div>
        </div>

        <header>
          <nav id="scrollspy-nav" className="navbar navbar-custom navbar-top navbar-fixed-top sticky-navigation" >
            <div className="container">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse">
                  <i className="fa fa-bars"></i>
                </button>
                <a className="navbar-brand nav-logo page-scroll" href="#page-top">
                  <img src={logoImg} alt="VOO"/>
                </a>
              </div>
              <div className="collapse navbar-collapse navbar-right navbar-main-collapse">
                <ul className="nav navbar-nav">
                  {navs.map(nav => <li key={nav.id}><a className="page-scroll" href={nav.id}>{nav.label}</a></li>)}
                </ul>
              </div>
            </div>
          </nav>
        </header>

        <section id="intro" className={styles.home}>
          <div className="container">
            <div className="row relative">
              <Video
                src={homeScreenVideo}
                alt="Video showing the home screen, following a place, inviting friends"
                className={`${styles.introMobile} img-responsive`}
                slate={homeSlateImg}
              />
              <div className="col-md-6 col-md-offset-6">
                <h1>The <span className="bold">places </span>you follow.<br/> The <span className="bold">people </span>you care about.</h1>

                <p className="space40">
                  <a href="#">Download Voo</a> to get on the waitlist for our private release
                </p>
                <div className="downloads space10" id="download-top">
                  {downloadButton}
                </div>
                <p className="space40 homeAndroid" id="android">
                  <a>
                    Android user?
                  </a>
                </p>
                <div className="waitinglistForm">
                  <p className="space40">Be part of the Android waitlist:</p>
                  <form id="waitlisted" className="subscription-form form-inline" >
                    <input type="email" name="email" id="subscriber-email" placeholder="Your Email" className="form-control input-box"/>
                    <button type="submit" id="subscribe-button" className="btn-new">Add</button>
                    <h4 className="subscription-success"></h4>
                    <h4 className="subscription-error"></h4>
                    <div id="androidShare" className="androidShare">
                      <h4 className="textBlue">Share the app to your friends!</h4>
                      <div id="shareIconsAndroid" className={`shareIcons ${styles.shareIconsAndroid}`}></div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="overview" className="section overview">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="titleSection overview-title">
                  <h2>Centralize your <span className="bold">planning </span></h2>
                  <div className="coloredLine"></div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4" >
                <i className="bigIcon"><img src={chatIconImg} alt=""/></i>
                <h4 className="bold">Chat</h4>
                <p>Seamless group and individual chats</p>
              </div>

              <div className="col-md-4" >
                <i className="bigIcon"><img src={placeIconImg} alt=""/></i>
                <h4 className="bold">Your Places</h4>
                <p>Follow your favorite places</p>
              </div>

              <div className="col-md-4" >
                <i className="bigIcon"><img src={calendarIconImg} alt=""/></i>
                <h4 className="bold">Calendar</h4>
                <p>All your calendars, Up to date</p>
              </div>
            </div>
          </div>
        </section>

        <section id="affordable" className="section places">
          <div className="container">
            <div className="row relative">
              <div className="phones">
                <div className={`${styles.leftMobFront} img-responsive`}></div>
                <div className={`${styles.leftMobBack} img-responsive wow fadeInUp`} data-wow-duration="1s" data-wow-offset="50" data-wow-delay="0s"></div>
              </div>
              <div className="col-md-6 col-md-offset-6">
                <br/>
                <br/>
                <h2>Your favorite<span className="bold"> places</span>.<br/>Now <span className="bold">affordable.</span></h2>
                <p className="space40">
                  Follow the places you and your friends love going to. Plan a <b>rendez-Voo</b> and if there’s spare capacity, they’ll lower the price and get you there for less.
                </p>
                <br/>
              </div>
            </div>
          </div>
        </section>

        <section id="collaborate" className="section chat">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="titleSection">
                  <h2>Easily <span className="bold">Collaborate</span> with your Friends</h2>
                  <div className="coloredLine"></div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4 leftFeatures">
                <div className="text-right space100">
                  <i className="bigIcon"><img src={pinIconImg} alt=""/></i>
                  <h4 className="bold">Intelligent Group Recommendations</h4>
                  <p>
                    Our recommendation engine understands you and will show the right places for you.
                  </p>
                </div>

                <div className="text-right">
                  <i className="bigIcon"><img src={upvoteIconImg} alt=""/></i>
                  <h4 className="bold">Suggest and Vote Places</h4>
                  <p>
                    Propose ideas to the group and vote for your favorite one
                  </p>
                </div>

              </div>

              <div className="col-md-4 chatVideo">
                <Video
                  src={featuresMobVideo}
                  className="img-responsive"
                  alt="Video showing the Chat"
                  slate={chatSlateImg}
                />
              </div>

              <div className="col-md-4 rightFeatures">
                <div className="text-left space100">
                  <i className="bigIcon"><img src={atIconImg} alt=""/></i>
                  <h4 className="bold">Tag People and Places</h4>
                  <p>
                    Intuitively tag people and places relevant to the conversation <span className="italic">(soon)</span>
                  </p>
                </div>

                <div className="text-left">
                  <i className="bigIcon"><img src={happyIconImg} alt=""/></i>
                  <h4 className="bold">Have Fun while Planning</h4>
                  <p>
                    Send giphys, pictures, and other secret<br/>&ldquo;slash&rdquo; commands!
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section id="integrated" className="section integrations" >
          <div className="container">
            <div className="row relative">
              <div className="phones">
                <div className={`${styles.rightMobFront} img-responsive`}></div>
                <div className={`${styles.rightMobBack} img-responsive wow fadeInUp`} data-wow-duration="1s" data-wow-offset="50" data-wow-delay="0s"></div>
              </div>
              <div className="col-md-6">
                <br/>
                <h2>Use your favorite <span className="bold">Apps</span>*</h2>

                <ul className="clearlist rightList">
                  <li>
                    <i className="fa fa-check"></i>
                    <span>   Ride there with Uber</span>
                  </li>

                  <li>
                    <i className="fa fa-check"></i>
                    <span> Get a Groupon</span>
                  </li>

                  <li>
                    <i className="fa fa-check"></i>
                    <span>  Sync with your calendar</span>
                  </li>
                  <li>
                    <i className="fa fa-check"></i>
                    <span> Book with OpenTable</span>
                  </li>
                </ul>
              </div>
            </div>
            <br/>
            <br/>
          </div>
        </section>

        <section id="share" className="section share">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2><span className="bold">Share Voo</span></h2>
                <div id="shareIconsCountInside" className="shareIcons"></div>
              </div>
            </div>
          </div>
        </section>

        <section id="download" className={`section ${styles.downloadSection}`}>
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <img className="img-responsive" src={downloadMobImg} alt="download" />
              </div>
              <div className="col-md-7">
                <h2 className="downloadtxt">Get on our Private Release</h2>
                <div className="downloads" id="download-bottom">
                  {downloadButton}
                  {/* <a href="#"><img src="images/downloads/android.png" alt="android"/></a> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="titleSection">
                  <h2>Get In Touch <span className="bold">Say Hello!</span></h2>
                  <div className="coloredLine"></div>
                </div>
              </div>
            </div>
            <div className="row">
              <form id="contactForm" className="contactForm">
                <div className="col-md-6 col-md-offset-3">
                  <input id="name" type="text" className="form-control" name="name" placeholder="Your Name"/>
                  <input id="email" type="email" className="form-control" name="email" placeholder="Your Email"/>
                  <textarea className="form-control" id="message" rows="5" placeholder="Message"></textarea>

                  <div className="col-md-12">
                    <h4 className="success">
                      <i className="fa fa-check"></i> Your message has been sent successfully.
                    </h4>
                    <h4 className="error">
                      <i className="fa fa-warning"></i> E-mail must be valid and message must be longer than 1 character.
                    </h4>
                  </div>

                  <button className="btn-new" type="submit" id="submit" name="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </section>

        <footer>
          <div className="container">
            <div className="col-md-12">
              <a href="#page-top" className="page-scroll"><img src={logoDarkImg} alt="VOO"/></a>
              <div className="space50"></div>
              <ul className="clearlist socialList">
                <li><a href="https://www.facebook.com/RdVoo/"><i className="fa fa-facebook"></i><span className="hidden-xs">Facebook</span></a></li>
                <li><a href="https://twitter.com/RdVoo"><i className="fa fa-twitter"></i><span className="hidden-xs">Twitter</span></a></li>
                <li><a href="https://www.linkedin.com/company/10620342"><i className="fa fa-linkedin"></i><span className="hidden-xs">LinkedIn</span></a></li>
                <li><a href="https://medium.com/rendez-voo"><i className="fa fa-medium"></i><span className="hidden-xs">Medium</span></a></li>
                {/* <li><a href="https://github.com/letsroundup"><i className="fa fa-github"></i><span className="hidden-xs">github</span></a></li> */}
              </ul>
              <hr/>
              <p>By using our services, you agree to the <a className="textBlue" href="/tos">Terms&nbsp;of&nbsp;Service</a> and <a className="textBlue" href="/privacy">Privacy&nbsp;Policy</a></p>
              <p>&copy; RoundUp&nbsp;Social,&nbsp;Inc. all rights reserved - 2016</p>
              <div className="star-text">*The above names and logos are trademarked by the respective companies and are not the property of RoundUp&nbsp;Social,&nbsp;Inc. <br/>As such, they remain subject to the intellectual property rights and protections afforded thereto, respectively.</div>
            </div>
          </div>
        </footer>
        <script src="js/jquery-1.11.3.min.js"/>
        <script src="js/bootstrap.min.js"/>
        <script src="js/jquery.easing.min.js"/>
        <script src="js/jquery.appear.js"/>
        <script src="js/jquery.inview.js"/>
        <script src="js/wow.min.js"/>
        <script src="js/pace.min.js" />
        <script src="js/jssocials.min.js"/>
        <script src="js/script.js"/>
      </body>
    );
  }
}
