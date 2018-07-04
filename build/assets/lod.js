$(function () {
    document.getElementById('savefield').addEventListener('click', function () {
        var range = document.createRange();
        range.selectNodeContents(document.getElementsByClassName("selecttxt")[0]);
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
    });
});
var baseurl;
function MoveToEntry(newEntryid) {
    try {
        setValues(newEntryid);
        if (newEntryid != "1") {
            window.location.hash = '#' + newEntryid;
            document.getElementById("savefield").innerHTML = 'Сохранить текущую страницу: <span class="selecttxt" contenteditable="true">'+baseurl+'#' + newEntryid + '</span>';
        } else document.getElementById("savefield").innerHTML = "";
    } catch (e) {
        console.log("Error:" + e);
    }
}
var currenthash;
$(window).on('hashchange', function () {
    if (location.hash != "") {
        var newEntryid = location.hash.slice(1);
        if (currenthash != newEntryid) {
            MoveToEntry(newEntryid);
        }
    } else MoveToEntry("1");
});

function setValues(newEntry) {
    if (response[newEntry] == undefined) {
        throw "No Data";
    }
    currenthash = newEntry;
    document.getElementById("story").innerHTML = response[newEntry].s;
    for (var i = 1; i < 7; i++) {
        if ("ov" + i in response[newEntry]) {
            document.getElementById("story").innerHTML += "<br>";
            if ("od" + i in response[newEntry]) {
                if ("os" + i in response[newEntry]) {
                    if (response[newEntry]["os" + i] == "") {
                        document.getElementById("story").innerHTML += '<br><div class="movetext">' + response[newEntry]["od" + i] + '</div>';
                    } else {
                        document.getElementById("story").innerHTML += '<br><div class="movetext bkrnd-red">' + response[newEntry]["od" + i] + '</div>';
                    }
                } else {
                    document.getElementById("story").innerHTML += '<br><div class="movetext">' + response[newEntry]["od" + i] + '</div>';
                }
            }
            if ("op" + i in response[newEntry]) {
                document.getElementById("story").innerHTML += '<div class="movetext">' + response[newEntry]["op" + i] + '</div>';
            }
            document.getElementById("story").innerHTML += '<a class="movelink" href="#' + response[newEntry]["ov" + i] + '" onclick="MoveToEntry(\'' + response[newEntry]["ov" + i] + '\');return false;">➥ ' + response[newEntry]["ot" + i] + '.</a>';
        }

    }
}