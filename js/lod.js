function selectOption(op){
    var newEntry = document.getElementById("option" + op).value
    setValues(newEntry)
    document.getElementById("savefield").innerHTML = "Сохранить текущую страницу: http://phenomen.xyz/lod?entry=" + newEntry;
}

function setValues(newEntry){
	//Button values
    document.getElementById("story").innerHTML = response[newEntry].s;

    document.getElementById("option1").value = response[newEntry].ov1;
    document.getElementById("option2").value = response[newEntry].ov2;
    document.getElementById("option3").value = response[newEntry].ov3;
    document.getElementById("option4").value = response[newEntry].ov4;
    document.getElementById("option5").value = response[newEntry].ov5;
    document.getElementById("option6").value = response[newEntry].ov6;

    document.getElementById("option1").innerHTML = response[newEntry].ot1;
    document.getElementById("option2").innerHTML = response[newEntry].ot2;
    document.getElementById("option3").innerHTML = response[newEntry].ot3;
    document.getElementById("option4").innerHTML = response[newEntry].ot4;
    document.getElementById("option5").innerHTML = response[newEntry].ot5;
    document.getElementById("option6").innerHTML = response[newEntry].ot6;

    if (response[newEntry].os1 == "") { document.getElementById("option1").className = "btn btn-dark btn-lg btn-block"; }
    else { document.getElementById("option1").className = "btn btn-danger btn-lg btn-block"; }

    if (response[newEntry].os2 == "") { document.getElementById("option2").className = "btn btn-dark btn-lg btn-block"; }
    else { document.getElementById("option2").className = "btn btn-danger btn-lg btn-block"; }

    if (response[newEntry].os3 == "") { document.getElementById("option3").className = "btn btn-dark btn-lg btn-block"; }
    else { document.getElementById("option3").className = "btn btn-danger btn-lg btn-block"; }

    if (response[newEntry].os4 == "") { document.getElementById("option4").className = "btn btn-dark btn-lg btn-block"; }
    else { document.getElementById("option4").className = "btn btn-danger btn-lg btn-block"; }

    if (response[newEntry].os5 == "") { document.getElementById("option5").className = "btn btn-dark btn-lg btn-block"; }
    else { document.getElementById("option5").className = "btn btn-danger btn-lg btn-block"; }

    if (response[newEntry].os6 == "") { document.getElementById("option6").className = "btn btn-dark btn-lg btn-block"; }
    else { document.getElementById("option6").className = "btn btn-danger btn-lg btn-block"; }
	
	//Button visibility
    if (document.getElementById("option1").value == "") { document.getElementById("option1").style.visibility = "hidden"; }
    else {document.getElementById("option1").style.visibility = "visible";}

    if (document.getElementById("option2").value == "") { document.getElementById("option2").style.visibility = "hidden"; }
    else {document.getElementById("option2").style.visibility = "visible";}

    if (document.getElementById("option3").value == "") { document.getElementById("option3").style.visibility = "hidden"; }
    else {document.getElementById("option3").style.visibility = "visible";}

    if (document.getElementById("option4").value == "") { document.getElementById("option4").style.visibility = "hidden"; }
    else {document.getElementById("option4").style.visibility = "visible";}

    if (document.getElementById("option5").value == "") { document.getElementById("option5").style.visibility = "hidden"; }
    else {document.getElementById("option5").style.visibility = "visible";}

    if (document.getElementById("option6").value == "") { document.getElementById("option6").style.visibility = "hidden"; }
    else {document.getElementById("option6").style.visibility = "visible";}
}