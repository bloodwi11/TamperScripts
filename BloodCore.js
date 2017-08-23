// ==UserScript==
// @name         BloodCore
// @namespace    http://powerblocks.net/
// @version      0.1
// @description  CorePlugin For my plugins
// @author       bloodwi11
// @match        http://www.neopets.com/*
// @grant        none
// ==/UserScript==
function getName(nametd) {
    return nametd.text().replace($nametd.find(".medText").text(), "");
}
