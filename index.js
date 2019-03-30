'use strict';
/* global $ */

function handleThumbnailClicksMouse() {
  $('.thumbnail').click(event => {
    const targetImg = $(event.target);
    const imgSrc = $(targetImg).attr('src');
    const imgAlt = $(targetImg).attr('alt');
    $('.large-img').attr('src',imgSrc);
    $('.large-img').attr('alt', imgAlt);
  });
}

function handleThumbnailClicksEnter() {
  $('.thumbnail').keyup(event => {
    if (event.which === 13) {
      const targetImg = $(event.target).find('img');
      const imgSrc = targetImg.attr('src');
      const imgAlt = targetImg.attr('alt');
      $('.large-img').attr('src',imgSrc);
      $('.large-img').attr('alt', imgAlt);
    }
  });
}

$(handleThumbnailClicksMouse);
$(handleThumbnailClicksEnter);