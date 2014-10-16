$(function() {
  var httpRequest;
  var optionNumber;
  var adv;
  document.getElementById("option1").onclick = function() { document.getElementById("cPick").innerHTML = "";adv = false;optionNumber = 1;makeRequest(''); };
  document.getElementById("option2").onclick = function() { document.getElementById("cPick").innerHTML = "";adv = false;optionNumber = 2;makeRequest('simplePick.html'); };
  document.getElementById("option3").onclick = function() { document.getElementById("cPick").innerHTML = "";adv = false;optionNumber = 3;makeRequest('simplePick.html'); };
  document.getElementById("option4").onclick = function() { document.getElementById("cPick").innerHTML = "";adv = false;optionNumber = 4;makeRequest('simplePick.html'); };
  document.getElementById("option5").onclick = function() { document.getElementById("cPick").innerHTML = "";adv = false;optionNumber = 5;makeRequest('simplePick.html'); };
  //alert("kurvaaa");

  document.getElementById("advoption1").onclick = function() { document.getElementById("advcPick").innerHTML = "";adv = true;optionNumber = 1;makeRequest(''); };
  document.getElementById("advoption2").onclick = function() { document.getElementById("advcPick").innerHTML = "";adv = true;optionNumber = 2;makeRequest('simplePick.html'); };
  document.getElementById("advoption3").onclick = function() { document.getElementById("advcPick").innerHTML = "";adv = true;optionNumber = 3;makeRequest('simplePick.html'); };
  document.getElementById("advoption4").onclick = function() { document.getElementById("advcPick").innerHTML = "";adv = true;optionNumber = 4;makeRequest('simplePick.html'); };
  document.getElementById("advoption5").onclick = function() { document.getElementById("advcPick").innerHTML = "";adv = true;optionNumber = 5;makeRequest('simplePick.html'); };
  function makeRequest(url) {
    //alert("kurvaaa");
    if (window.XMLHttpRequest) { // Mozilla, Safari, ...
      httpRequest = new XMLHttpRequest();
    } else if (window.ActiveXObject) { // IE
      try {
        httpRequest = new ActiveXObject("Msxml2.XMLHTTP");
      }
      catch (e) {
        try {
          httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
        }
        catch (e) {}
      }
    }

    if (!httpRequest) {
      alert('Giving up :( Cannot create an XMLHTTP instance');
      return false;
    }
    httpRequest.onreadystatechange = alertContents;
    httpRequest.open('GET','main.php?getStatus='+document.getElementById("option"+optionNumber+"Val").value, url);
    httpRequest.send();
  }

  function alertContents() {
    //alert("kurvaaa");
    if (httpRequest.readyState === 4) {
      if (httpRequest.status === 200) {
        if(adv){
          document.getElementById("advcPick").innerHTML = httpRequest.responseText;
          adv=false;
        }
        else{
          document.getElementById("cPick").innerHTML = httpRequest.responseText;
          //alert("kurvaaa"+httpRequest.responseText);
        }
      } else {
        alert('There was a problem with the request. '+httpRequest.status);
      }
    }
  }
})();
