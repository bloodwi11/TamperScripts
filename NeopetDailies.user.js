// ==UserScript==
// @name         NeopetDailies
// @namespace    http://powerblocks.net/
// @version      0.1
// @description  Making things easier!
// @author       bloodwi11
// @include      http://www.neopets.com/*
// @grant        none
// ==/UserScript==
// append column to the HTML table


$(document).ready(function() {
    var links = ["http://www.neopets.com/soupkitchen.phtml",
                 "http://www.neopets.com/jelly/jelly.phtml",
                 "http://www.neopets.com/prehistoric/omelette.phtml",
                 "http://www.neopets.com/bank.phtml",
                 "http://www.neopets.com/donations.phtml",
                 "http://www.neopets.com/thriftshoppe/index.phtml",
                 "http://www.neopets.com/medieval/rubbishdump.phtml",
                 "http://www.neopets.com/altador/council.phtml",
                 "http://www.neopets.com/market.phtml?type=till",
                 "http://www.neopets.com/shop_of_offers.phtml?slorg_payout=yes",
                 "http://www.neopets.com/trudys_surprise.phtml",
                 "http://www.neopets.com/freebies/index.phtml",
                 "http://www.neopets.com/moviecentral/index.phtml",
                 "http://www.neopets.com/magma/quarry.phtml",
                 "http://www.neopets.com/halloween/applebobbing.phtml",
                 "http://www.neopets.com/pirates/anchormanagement.phtml",
                 "http://www.neopets.com/shenkuu/neggcave/",
                 "http://www.neopets.com/prehistoric/battleground/",
                 "http://www.neopets.com/halloween/gravedanger/index.phtml",
                 "http://www.neopets.com/worlds/kiko/kpop/"];
    var labels = ["Soup Kitchen",
                  "Giant Jelly",
                  "Giant Omelette",
                  "Bank Interest",
                  "Money Tree",
                  "Thrift Shop",
                  "Rubbish Dumb",
                  "Altador Prizes",
                  "Shop Till",
                  "Slorg Rewards",
                  "Trudy\'s Surprise",
                  "Monthly Freebies",
                  "Movie Central",
                  "Obsidian Quarry",
                  "Apple Bobbing",
                  "Anchor Management",
                  "Negg Cave",
                  "Battleground Obelisk",
                  "Grave Danger",
                  "Kiko Pop"];
    var table = "";
    var logo = document.createElement("div");
    for (i = 0; i < links.length; i++) {
        table = table + '<tr><td><a href="' + links[i] + '">' + labels[i] + '</a></td></tr>';
    }
    logo.innerHTML =
    '<div id="draggable" class="ui-widget-content" style="position: fixed; z-index: 10000; right: 0px; top: 0px">' +
    '<table class="dailies" width="150" style="border-style: solid; border-width: 2px; background: white; border-color: C9C9C9;">' +
    '<th>Dailies</th>' +
    table +
    '</table>' +
    '</div>';
    document.body.insertBefore(logo, document.body.firstChild);
    $("#draggable").draggable();
});