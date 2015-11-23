import $ from 'jquery';

import headerSmallImg from 'images/header-small.png';
import headerImg from 'images/header.jpg';

function onResize() {
  const scrollbar = window.innerWidth - $(window).width();
  const width = $('body').width() + scrollbar;
  const headerImage = $('#header');
  const isSmall = headerImage.attr('src') === headerSmallImg;

  if (width >= 768 && isSmall) {
    headerImage.attr('src', headerImg);
  } else if (width < 768 && !isSmall) {
    headerImage.attr('src', headerSmallImg);
  }
}

function validateForm() {
  const phoneNumber = $('#phoneNumber').val().replace(/[^0-9a-z\+]/g, '');
  const numReg = new RegExp(/^(\+?[0-9]{0,15})$/);
  let isValid = numReg.test(phoneNumber);
  if (isValid) {
    $('#form-response').addClass('hidden');
    $('#phoneNumber').removeClass('error');
    if (phoneNumber[0] === '+' ? (phoneNumber.length >= 12) : (phoneNumber.length >= 10)) {
      $('.button').addClass('enabled');
    } else {
      isValid = false;
      $('.button').removeClass('enabled');
    }
  } else {
    setError('Phone number is not valid.');
    $('.button').removeClass('enabled');
  }

  return isValid;
}

function setError(error) {
  const response = $('#form-response');
  response.children('p').text(error);
  response.removeClass('success');
  response.removeClass('hidden');
  $('#phoneNumber').addClass('error');
}

function setSuccess(success) {
  const response = $('#form-response');
  response.children('p').text(success);
  response.addClass('success');
  response.removeClass('hidden');
  $('#phoneNumber').removeClass('error');
}

$(document).ready(() => {
  onResize();
  $(window).resize(() => onResize());
  $('#form').submit((event) => {
    event.preventDefault();
    const isValid = validateForm();
    if (!isValid) {
      return;
    }

    const url = 'https://api.letsroundup.com/waitingList';
    const phoneNumber = $('#phoneNumber').val();
    $('.button').removeClass('enabled');
    if (!__DEV__) {
      ll('tagEvent', 'Submitting Form');
    }
    $.ajax({
      url,
      method: 'POST',
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify({ phoneNumber }),
      success(data) {
        if (data && data.msg === 'Already added.') {
          setError('You\'re already on the waiting list.');
          $('.button').addClass('enabled');
        } else {
          setSuccess('Thanks! We\'ll text you when it\'s your turn.');
        }
      },
      error(data, status, error) {
        console.error(data);
        let text;
        try {
          text = JSON.parse(data.responseText);
          text = text && text.error;
        } catch (ex) {
          console.error(ex);
          text = 'Oops, an error occured, please try again later!';
        }
        setError(text);
        $('.button').addClass('enabled');
      },
    });
  });

  $('#phoneNumber').keyup(() => validateForm());
});
