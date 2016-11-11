/* global WOW __API_URL__ jQuery */
const $document = jQuery(document);
$document.ready($ => {
  const wow = new WOW({ mobile: false });
  wow.init();

  const $window = $(window);
  // jQuery for page scrolling feature - requires jQuery Easing plugin
  $('.page-scroll').on('click', function pageScrollClick(event) {
    const $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top,
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });

  // collapsed menu close on click
  $document.on('click', '.navbar-collapse.in', function navbarClick(e) {
    if ($(e.target).is('a')) {
      $(this).collapse('hide');
    }
  });

  // Android animation
  $document.on('click', '#android', function androidClick(e) {
    if ($(e.target).is('a')) {
      $(this).collapse('hide');
      $('#android').hide();
      $('.waitinglistForm').fadeIn(1000);
    }
  });

  // add white background to nav with scrolling
  const stickyNav = $('.sticky-navigation');
  function checkStickyNav() {
    if ($window.scrollTop() > 50) {
      stickyNav.addClass('NavBg');
    } else {
      stickyNav.removeClass('NavBg');
    }
  }
  checkStickyNav();
  $window.scroll(checkStickyNav);

  let scrollspyTimeout;
  const nav = $('#scrollspy-nav');
  nav.on('activate.bs.scrollspy', ev => {
    const href = nav.find('.active a').attr('href');
    if (scrollspyTimeout) {
      clearTimeout(scrollspyTimeout);
      scrollspyTimeout = null;
    }
    scrollspyTimeout = setTimeout(() => {
      const newHref = nav.find('.active a').attr('href');
      scrollspyTimeout = null;
      if (href === newHref) {
        window.ga('send', 'pageview', href);
      }
    }, 300);
  });
  // Menu clicks
  $document.on('click', '.navbar-nav', e => {
    window.ga('send', 'event', 'navigation', $(e.target).attr('href'));
  });

  // Tag download top button
  $document.on('click', '#download-top', e => {
    window.ga('send', 'event', 'click', 'download', 'top');
  });

  // Tag download bottom button
  $document.on('click', '#download-bottom', e => {
    window.ga('send', 'event', 'click', 'download', 'bottom');
  });

  // Tag Android User button
  $document.on('click', '#android', e => {
    window.ga('send', 'event', 'click', 'android-user');
  });

  const androidLinks = {
    twitter: 'https://1pd8.app.link/wLgpeU6nXs',
    facebook: 'https://1pd8.app.link/ew3FgU6nXs',
    googleplus: 'https://1pd8.app.link/DPS6fU6nXs',
    pinterest: 'https://1pd8.app.link/kXF7dU6nXs',
    email: 'https://1pd8.app.link/TW5PdU6nXs',
  };

  const shareSectionLinks = {
    twitter: 'https://1pd8.app.link/G7us6T6nXs',
    facebook: 'https://1pd8.app.link/Jwh99T6nXs',
    googleplus: 'https://1pd8.app.link/76tydU6nXs',
    pinterest: 'https://1pd8.app.link/T5uS7T6nXs',
    email: 'https://1pd8.app.link/G3R6fU6nXs',
  };

  function makeShares(links) {
    const types = [
      'twitter',
      'facebook',
      'googleplus',
      'pinterest',
      'email',
    ];

    // override texts texts & other stuff
    const config = {
      twitter: {
        via: 'rdvoo',
        hashtags: 'rdvoo',
      },
    };
    const defaultText = 'I just subscribed to this new app! We should use it next time we plan something!';
    const socials = {
      url: 'https://1pd8.app.link/cXtb501wVs',
      text: defaultText,
      showLabel: false,
      showCount: false && 'inside',
      shares: types.map(t => $.extend({ share: t, url: links[t] }, config[t])),
    };
    return socials;
  }

  $('#shareIconsCountInside').jsSocials(makeShares(shareSectionLinks));
  $('#shareIconsAndroid').jsSocials(makeShares(androidLinks));

  // Parsing sharing function
  function getSocialSharedLink(className) {
    if (className.indexOf('facebook') > -1) {
      return 'Facebook';
    } else if (className.indexOf('email') > -1) {
      return 'Email';
    } else if (className.indexOf('pinterest') > -1) {
      return 'Pinterest';
    } else if (className.indexOf('googleplus') > -1) {
      return 'Google';
    } else if (className.indexOf('twitter') > -1) {
      return 'Twitter';
    }
    return null;
  }

  const makeSharedClick = (id, type, links) => {
    const onClick = e => {
      const $target = $(e.target);
      const parents = $target.parents('.jssocials-share');
      const social = parents && parents[0] && getSocialSharedLink(parents[0].className);
      if (social) {
        window.ga('send', 'social', social, type, links[social.toLowerCase()]);
      }
    };
    $document.on('click', id, onClick);
  };
  makeSharedClick('#shareIconsAndroid', 'share-android', androidLinks);
  makeSharedClick('#shareIconsCountInside', 'share', shareSectionLinks);
});


function isValidEmail(emailAddress) {
  const pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
  return pattern.test(emailAddress);
}

// Contact Form
$document.on('submit', '#contactForm', function onContactSubmit(e) {
  e.preventDefault();
  const name = jQuery('#name').val();
  const email = jQuery('#email').val();
  const message = jQuery('#message').val();
  const url = __API_URL__ + '/feedback';

  if (isValidEmail(email) && (message.length > 1) && (name.length > 1)) {
    window.ga('send', 'event', 'click', 'send-feedback');
    jQuery.ajax({
      type: 'POST',
      contentType: 'application/json; charset=utf-8',
      url: url,
      data: JSON.stringify({
        name: name,
        email: email,
        message: message,
      }),
      success: function onSuccess() {
        jQuery('.success').fadeIn(1000);
        jQuery('.error').hide();
      },
    });
  } else {
    jQuery('.error').fadeIn(1000);
    jQuery('.success').hide();
  }
  return false;
});

// Waitinglist Form
$document.on('submit', '#waitlisted', function onWaitlistSubmit(e) {
  const minPosition = 150;
  e.preventDefault();
  const email = jQuery('#subscriber-email').val();

  function showSuccessMessage(message) {
    jQuery('.subscription-success').html('<i class="icon_close_alt2"></i><br/>' + message).fadeIn(1000);
    jQuery('#androidShare').fadeIn(1000);
    jQuery('.subscription-error').hide();
  }

  function showErrorMessage(message) {
    jQuery('.subscription-error').html('<i class="icon_close_alt2"></i><br/>' + message).fadeIn(1000);
    jQuery('#androidShare').hide();
    jQuery('.subscription-success').hide();
  }

  if (isValidEmail(email)) {
    window.ga('send', 'event', 'click', 'waitlist');
    const message = 'Thanks! We\'ll email you when the Android app is available.';
    showSuccessMessage(message);
  } else {
    showErrorMessage('The email is not valid.');
  }
  return false;
});

// Text me the app Form
$document.on('submit', '#text-app', function onTextMeTheAppSubmit(e) {
  e.preventDefault();
  const phoneNumber = jQuery('#download-phoneNumber').val();
  const url = __API_URL__ + '/textapp';

  function onSuccess(message) {
    jQuery('.download-success').html('<i class="icon_close_alt2"></i><br/>' + message).fadeIn(1000);
    jQuery('.download-error').hide();
  }

  function onError(message) {
    jQuery('.download-error').html('<i class="icon_close_alt2"></i><br/>' + message).fadeIn(1000);
    jQuery('.download-success').hide();
  }

  if (phoneNumber) {
    window.ga('send', 'event', 'click', 'download', 'text');
    jQuery.ajax({
      type: 'POST',
      contentType: 'application/json; charset=utf-8',
      url: url,
      data: JSON.stringify({
        phoneNumber: phoneNumber,
      }),
      success: (res) => {
        const message = 'Done. You should receive the link in the next minute.';
        onSuccess(message);
      },
      error: (res) => {
        if (res && res.responseJSON.error.indexOf('prop phoneNumber parse failed') > -1) {
          onError('The phone number is not valid.');
        } else {
          onError('Something went wrong. Try again later.');
        }
      },
    });
  } else {
    onError('The phone number is not valid.');
  }
  return false;
});
