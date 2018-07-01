function selectOption(op){
    var newEntry = document.getElementById("option" + op).value
    MoveToEntry(newEntry);
}
function MoveToEntry(newEntryid){
    setValues(newEntryid);
    if (history.pushState) {
        // IE10, Firefox, Chrome, etc.
        window.history.pushState(null, null, '#' + newEntryid);
    } else {
        // IE9, IE8, etc
        window.location.hash = '#!' + newEntryid;
    }
    document.getElementById("savefield").innerHTML = "Сохранить текущую страницу: https://phenomen.github.io/legacyofdragonholt/#" + newEntryid;
}
var currenthash;
$(window).on('hashchange', function() {
    var newEntryid = location.hash.slice(1).toString();
    if(currenthash != newEntryid){
        MoveToEntry(newEntryid);
    }
});
function setValues(newEntry){
    currenthash = newEntry;
    document.getElementById("story").innerHTML = response[newEntry].s;

    for (var i = 1; i < 7; i++) {   
    if("ov"+i in response[newEntry]){
    document.getElementById("option"+i).value = response[newEntry]["ov"+i];
    document.getElementById("option"+i).style.visibility = "visible";
    }else document.getElementById("option"+i).style.visibility = "hidden";
    //if("ot"+i in response[newEntry]) //Если есть путь, то есть и название пути?
    document.getElementById("option"+i).innerHTML = response[newEntry]["ot"+i];
    if("os"+i in response[newEntry]){
        if (response[newEntry]["os"+i] == "") { document.getElementById("option"+i).className = "btn btn-dark btn-lg btn-block"; }
        else { document.getElementById("option"+i).className = "btn btn-danger btn-lg btn-block"; }
        }else { document.getElementById("option"+i).className = "btn btn-dark btn-lg btn-block"; }

    }
}