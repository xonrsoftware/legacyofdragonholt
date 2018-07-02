$(function () {
    document.getElementById('savefield').addEventListener('click', function () {
        var range = document.createRange();
        range.selectNodeContents(document.getElementsByClassName("selecttxt")[0]);
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
    });
});

function MoveToEntry(newEntryid) {
    setValues(newEntryid);
    // pushState gives double history for back button
    /*if (history.pushState) {
        // IE10, Firefox, Chrome, etc.
        window.history.pushState(null, null, '#' + newEntryid);
    } else {
        // IE9, IE8, etc
        window.location.hash = '#' + newEntryid;
    }*/
    if (newEntryid != "1") {
        window.location.hash = '#' + newEntryid;
        document.getElementById("savefield").innerHTML = 'Сохранить текущую страницу: <span class="selecttxt" contenteditable="true">https://phenomen.github.io/legacyofdragonholt/#' + newEntryid + '</span>';
    } else document.getElementById("savefield").innerHTML = "";
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
        window.location.hash = '#' + currenthash;
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
            document.getElementById("story").innerHTML += '<a class="movelink" href="#' + response[newEntry]["ov" + i] + '">➥ ' + response[newEntry]["ot" + i] + '.</a>';
        }

    }
}