function giveCRStats (cr) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        var response = JSON.parse(xhttp.responseText);
        var crThreshold = response.challengeThresholds;

        var output = '<h1>' + 'Stats for Challenge Rating with ' + crThreshold[cr].cr + '</h1>'
                        + '<ul>'
                        + '<li>' + '<h5>' + 'Challenge Rating: ' + '</h5>' + crThreshold[cr].cr + '</li>'
                        + '<li>' + '<h5>' + 'Proficiency: ' + '</h5>' + crThreshold[cr].prof + '</li>'
                        + '<li>' + '<h5>' + 'Armor Class: ' + '</h5>' + crThreshold[cr].ac + '</li>'
                        + '<li>' + '<h5>' + 'Hit Points Maximum: ' + '</h5>' + crThreshold[cr].hplow + '</li>'
                        + '<li>' + '<h5>' + 'Hit Points Minimum: ' + '</h5>' + crThreshold[cr].hphigh + '</li>'
                        + '<li>' + '<h5>' + 'Attack Bonus: ' + '</h5>' + crThreshold[cr].atk + '</li>'
                        + '<li>' + '<h5>' + 'Damage per round (max): ' + '</h5>' + crThreshold[cr].dprlow + '</li>'
                        + '<li>' + '<h5>' + 'Damage per round (min): ' + '</h5>' + crThreshold[cr].dprhigh + '</li>'
                        + '<li>' + '<h5>' + 'Save Difficulty Check: ' + '</h5>' + crThreshold[cr].sdc + '</li>'
                        + '</ul>' + '<br>';
        document.getElementById('crDisplay').innerHTML = output;
        }
    };
    xhttp.open("GET", "cr-info.json", true);
    xhttp.send();
}