
function selectOption(op) {
  var newEntry = document.getElementById("option" + op).value
  MoveToEntry(newEntry);
}

function MoveToEntry(newEntryid) {
  setValues(newEntryid);
  if (newEntryid != "1") {
    window.location.hash = '#' + newEntryid;
    document.getElementById("savefield").innerHTML = '<input id="save" class="form-control" type="text" value="https://phenomen.github.io/legacyofdragonholt/#' + newEntryid + '" onClick="this.setSelectionRange(0, this.value.length)" readonly>';
  } else document.getElementById("savefield").innerHTML = "";
}
var currenthash;
$(window).on('hashchange', function() {
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
    //Set button visibility
    if ("ov" + i in response[newEntry]) {
      document.getElementById("option" + i).value = response[newEntry]["ov" + i];
      document.getElementById("option" + i).style.visibility = "visible";
    } else document.getElementById("option" + i).style.visibility = "hidden";

    //Set button text
    if ("od" + i in response[newEntry]) {
      document.getElementById("option" + i).innerHTML = response[newEntry]["od" + i];
    } else { document.getElementById("option" + i).innerHTML = response[newEntry]["ot" + i]; }

    //Set effect text
    //An action with effect
    if (("op" + i in response[newEntry]) && ("od" + i in response[newEntry])) {
      document.getElementById("effect" + i).innerHTML = "<em>" + response[newEntry]["op" + i] + "<br>➥ " + response[newEntry]["ot" + i] + "</em>";
    }
    //An action without effect
    else if (!("op" + i in response[newEntry]) && ("od" + i in response[newEntry])) {
      document.getElementById("effect" + i).innerHTML = "<em>➥ " + response[newEntry]["ot" + i] + "</em>";
    }
    //Not action with effect
    else if (("ot" + i in response[newEntry]) && ("op" + i in response[newEntry])) {
      document.getElementById("effect" + i).innerHTML = "<em>➥ " + response[newEntry]["op" + i] + "</em>";
    }
    //Not action without effect
    else {
      document.getElementById("effect" + i).innerHTML = "";
    }

    //Set button style
    if ("os" + i in response[newEntry]) {
      if (response[newEntry]["os" + i] == "") {
        document.getElementById("option" + i).className = "btn btn-dark btn-lg btn-block";
      } else { document.getElementById("option" + i).className = "btn btn-danger btn-lg btn-block"; }
    } else { document.getElementById("option" + i).className = "btn btn-dark btn-lg btn-block"; }
  }
}
