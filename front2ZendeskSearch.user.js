// ==UserScript==
// @name         Replace Front links with Zendesk search query
// @description  Will try to replace all front reefernces with a Zendesk search query.
// @version      0.5
// @author       stronenv
// @match        https://*.wordpress.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

// Grab all A tags
var allLinks = document.getElementsByTagName('a');

// Cycle through all A tags
for (var i = 0; i < allLinks.length; i++) {

    // Check if the href includes a frontapp.com link
    if(allLinks[i].href.includes("https://app.frontapp.com")) {

        // Look for Front IDs
        let matches = allLinks[i].href.match(/\/open\/([a-z]{3}_.{7})/m);

        // If we have Front IDs, update the href attribute
        if (typeof matches[1] != "undefined") {
            allLinks[i].setAttribute("href", "https://href.li/?https://woothemes.zendesk.com/agent/search/1?copy&type=ticket&q=" + matches[1]);
        }
    }
}
