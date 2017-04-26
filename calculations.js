function giveCRStats (crIn) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        var response = JSON.parse(xhttp.responseText);
        var crThreshold = response.challengeThresholds;

        var cr = crThreshold[crIn].cr;
        var prof = crThreshold[crIn].prof;
        var ac = crThreshold[crIn].ac;
        var hplow = crThreshold[crIn].hplow;
        var hphigh = crThreshold[crIn].hphigh;
        var atk = crThreshold[crIn].atk;
        var dprlow = crThreshold[crIn].dprlow;
        var dprhigh = crThreshold[crIn].dprhigh;
        var sdc = crThreshold[crIn].sdc;

        document.getElementById('crOut').innerHTML = cr;
        document.getElementById('profOut').innerHTML = prof;
        document.getElementById('acOut').innerHTML = ac;
        document.getElementById('hpOut').innerHTML = hplow + ' - ' + hphigh;
        document.getElementById('atkOut').innerHTML = atk;
        document.getElementById('dprOut').innerHTML = dprlow + ' - ' + dprhigh;
        document.getElementById('sdcOut').innerHTML = sdc;

        }
    };
    xhttp.open("GET", "cr-info.json", true);
    xhttp.send();
}
