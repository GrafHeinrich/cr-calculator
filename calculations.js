function clickFunction () {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        var response = JSON.parse(xhttp.responseText);
        var crThreshold = response.challengeThresholds;

        var output = '';
        for(var i = 0; i < crThreshold.length; i++) {
            output += '<ul>'+ '<li>' + crThreshold[i].cr+'</li>'+
                        '<li>' + crThreshold[i].prof+'</li>'+
                        '<li>' + crThreshold[i].ac+'</li>'+
                        '<li>' + crThreshold[i].hplow+'</li>'+
                        '<li>' + crThreshold[i].hphigh+'</li>'+
                        '<li>' + crThreshold[i].atk+'</li>'+
                        '<li>' + crThreshold[i].dprlow+'</li>'+
                        '<li>' + crThreshold[i].dprhigh+'</li>'+
                        '<li>' + crThreshold[i].sdc+'</li>'+ '</ul>' +
                        '</hr>';
        }
        document.getElementById('crDisplay').innerHTML = output;
        }
    };
    xhttp.open("GET", "cr-info.json", true);
    xhttp.send();
}