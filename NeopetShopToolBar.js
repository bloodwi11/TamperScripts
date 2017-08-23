// ==UserScript==
// @name         NeopetShopToolBar
// @namespace    http://powerblocks.net/
// @version      0.2
// @description  Making things easier!
// @author       bloodwi11
// @include      http://www.neopets.com/*
// @grant        none
// ==/UserScript==
// append column to the HTML table
$(document).ready(function() {
    var logo = document.createElement("div");
    logo.innerHTML =
    '<div id="draggable" class="ui-widget-content" style="position: fixed; z-index: 10000; top: 0px;">' +
    '<img class="ui-widget-content" src="http://images.neopets.com/images/shops/shoptoolbar_2004_01.gif" usemap="shopmap">' +
    '</div>' +
    '<map name="shopmap" id="shopmap">' +
    '<area alt="" title="Inventory" href="http://www.neopets.com/inventory.phtml" shape="poly" coords="27,46,51,44,51,69,28,69" />' +
    '<area alt="" title="Neopian Marketplace" href="http://www.neopets.com/market_map.phtml" shape="poly" coords="81,52,54,53,54,77,82,77" />' +
    '<area alt="" title="Neohome" href="http://www.neopets.com/neohome/" shape="poly" coords="84,49,85,77,128,76,118,46" />' +
    '<area alt="" title="Auctions" href="http://www.neopets.com/auctions.phtml" shape="poly" coords="121,46,151,45,157,77,130,78" />' +
    '<area alt="" title="New Features" href="http://www.neopets.com/nf.phtml" shape="poly" coords="160,76,183,76,183,43,152,43" />' +
    '<area alt="" title="Shop Wizard" href="http://www.neopets.com/market.phtml?type=wizard" shape="poly" coords="185,41,205,40,210,71,188,73" />' +
    '<area alt="" title="Explore" href="http://www.neopets.com/explore.phtml" shape="poly" coords="210,43,236,39,241,68,213,69" />' +
    '<area alt="" title="Market Plaza" href="http://www.neopets.com/market_plaza.phtml" shape="poly" coords="249,57,255,91,266,105,282,105,293,91,302,57" />' +
    '<area alt="" title="Market Bazaar" href="http://www.neopets.com/market_bazaar.phtml" shape="poly" coords="250,54,254,30,266,12,285,11,296,31,304,54" />' +
    '<area alt="" title="Soup Kitchen" href="http://www.neopets.com/soupkitchen.phtml" shape="poly" coords="307,36,308,58,331,62,333,37" />' +
    '<area alt="" title="Community" href="http://www.neopets.com/community/index.phtml" shape="poly" coords="332,31,334,53,358,56,357,36" />' +
    '<area alt="" title="Stock Market" href="http://www.neopets.com/stockmarket.phtml" shape="poly" coords="356,41,361,65,384,65,378,37" />' +
    '<area alt="" title="Bank" href="http://www.neopets.com/bank.phtml" shape="poly" coords="380,31,385,57,400,63,408,39,399,31" />' +
    '<area alt="" title="Trading Post" href="http://www.neopets.com/island/tradingpost.phtml" shape="poly" coords="408,37,434,38,439,62,423,68,404,65" />' +
    '<area alt="" title="Giving Tree" href="http://www.neopets.com/donations.phtml" shape="poly" coords="435,36,442,65,464,66,465,36" />' +
    '<area alt="" title="Deposit Box" href="http://www.neopets.com/safetydeposit.phtml" shape="poly" coords="467,41,469,65,499,70,501,45" />' +
    '<area alt="" title="Your Shop" href="http://www.neopets.com/market.phtml?type=your" shape="poly" coords="505,44,505,70,525,69,524,45" />' +
    '</map>';
    document.body.insertBefore(logo, document.body.firstChild);
    $("#draggable").draggable();
});
