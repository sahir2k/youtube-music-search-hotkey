// ==UserScript==
// @name         YouTube Music Search Shortcut
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Add Cmd+K shortcut to focus on the search bar in YouTube Music
// @match        https://music.youtube.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.addEventListener('keydown', function(e) {
        if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
            e.preventDefault(); // Prevent the default behavior

            // Find the search input element
            const searchInput = document.querySelector('ytmusic-search-box input#input.style-scope.ytmusic-search-box');

            // If the search input is found, focus on it
            if (searchInput) {
                searchInput.focus();
            } else {
                console.log('Search input not found');
            }
        }
    });
})();
