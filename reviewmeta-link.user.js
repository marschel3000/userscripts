// ==UserScript==
// @name         Amazon reviewmeta button
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  adds reviewmeta for amazon
// @author       Marcel Kade <kade.marcel+userscript@gmail.com>
// @match        http://www.amazon.de/*
// @match        https://www.amazon.de/*
// @match        http://www.amazon.com/*
// @match        https://www.amazon.com/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';
    
    if (window.location.host && window.location.pathname)
        {
        // add link
        var reviewmeta_link = document.createElement('a');
        reviewmeta_link.id = 'reviewMetaLink';
        reviewmeta_link.text = '[ReviewMeta]';
        reviewmeta_link.target = '_blank';
        reviewmeta_link.style = 'margin-left:5px';
        reviewmeta_link.href = 'https://reviewmeta.com/search?q='+encodeURIComponent('https://'+window.location.host+window.location.pathname);
        document.getElementById('averageCustomerReviews_feature_div').appendChild(reviewmeta_link);
        }
})();