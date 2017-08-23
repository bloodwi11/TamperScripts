// ==UserScript==
// @name         InvTweaks
// @namespace    http://powerblocks.net
// @version      0.1
// @description  Better Inventory!
// @author       bloodwi11
// @include      http://www.neopets.com/inventory.phtml
// @grant        none
// ==/UserScript==
var imageWidth, imageHeight = 25;

var list = '<table style="border-style: solid; border-width: 1px; background: white; border-color: ECEBEB; border-radius: 3px; border-spacing: 0px; text-align: left;">';
if(document.URL.indexOf("inventory") != -1) {
    list += '<tr><td colspan="3" style="text-align: center;">Inventory: <b>' + $("img[src*='/items/']").length + '/50</b></td></tr>';
    $("img[src*='/items/']").each(function(k,v) {
        $nametd = $(v).parent().parent();
        image = v.src;
        itemname = getName($nametd);
        rarity = getRarity($nametd);
        if (k % 2 === 0) {
            list += '<tr style="background-color: #F0F0F0;">' + itemBuilder(image, itemname, rarity, v) + '</tr>';
        } else {
            list += '<tr style="background-color: #FFFFFF;">' + itemBuilder(image, itemname, rarity, v) + '</tr>';
        }
    });
    list += '</table>';
}

$(document).ready(function() {
    var inv= document.createElement("div");
    inv.innerHTML =
    '<div id="draggable" class="ui-widget-content" style="position: fixed; z-index: 10000; right: 0px; top: 0px">' +
    list +
    '</div>';
    document.body.insertBefore(inv, document.body.firstChild);
    $("#draggable").draggable();
});

function getName(nametd) {
    return nametd.text().replace($nametd.find(".medText").text(), "");
}

function getRarity(nametd) {
    return nametd.find(".medText").text();
}

function itemBuilder(image, name, rarity, v) {
    link = '<a href="' + $(v).parent().attr("href") + '" onclick="' + $(v).parent().attr("onclick") + '" title="' + v.title + '">';
    return  '<td>' + link + '<img border="1" style="border-color: #F4A549; background-color: #FFFFFF; width: ' + imageWidth + 'px; height: ' + imageHeight+ 'px;" src="' + image + '"/></a></td><td>'+ link + name + '</a></td><td style="color: ' +  $(v).parent().parent().find(".medText").children().css("color") + ';">' + rarity + '</td>';
}
