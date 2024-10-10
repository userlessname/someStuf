// ==UserScript==
// @name         Stop YouTube Mini Player
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Stops video when navigating away from the page
// @author       You
// @match        *://*.youtube.com/*
// @grant        none
// ==/UserScript==
// youtube.com##ytd-miniplayer

(function() {
  'use strict';

  const video = document.querySelector('video');
  const miniPlayer = document.querySelector('.ytp-miniplayer');

  const stopVideoAndCloseMiniPlayer = () => {
    if (video && !document.hidden) {
      video.pause();
      if (miniPlayer) {
        miniPlayer.style.display = 'none'; // Hides the mini player
      }
    }
  };

  window.addEventListener('yt-navigate-start', stopVideoAndCloseMiniPlayer);
  window.addEventListener('popstate', stopVideoAndCloseMiniPlayer); // Added listener for back button
})();
