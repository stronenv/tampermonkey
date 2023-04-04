// ==UserScript==
// @name         Replace Front links with Zendesk search query
// @description  Will try to replace all front reefernces with a Zendesk search query.
// @version      0.1
// @author       stronenv
// @match        https://*.wordpress.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

var allLinks = document.getElementsByTagName('a');

for (var i = 0; i < allLinks.length; i++) {
    let thisLink = allLinks[i];
    let thisLinkUrl = thisLink.href.replace("https://href.li/?", "");

    if(thisLinkUrl.includes("https://app.frontapp.com")) {

        let url = new URL(thisLinkUrl)
        let pathname = url.pathname
        let front_search_q = pathname.replace("/open/", "")
        allLinks[i].setAttribute("href", "https://woothemes.zendesk.com/agent/search/1?copy&type=ticket&q=" + front_search_q);

    }

}