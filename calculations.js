
$(function(){

 var response;
 
 $.get("cr-info.json", function(data, status){
        var dataResponse = data.challengeThresholds;
        makeGlobal(dataResponse);
    });

$("#select").change(setStats(1));

});

function makeGlobal(data) { 
      this.response = data;
      //console.log(this.response);
}

function setStats(crIn) {
    var cr = this.response[crIn].cr;
    var prof = this.response[crIn].prof;
    var ac = this.response[crIn].ac;
    var hplow = this.response[crIn].hplow;
    var hphigh = this.response[crIn].hphigh;
    var atk = this.response[crIn].atk;
    var dprlow = this.response[crIn].dprlow;
    var dprhigh = this.response[crIn].dprhigh;
    var sdc = this.response[crIn].sdc;
    var xp = this.response[crIn].xp;

    document.getElementById('crOut').innerHTML = cr;
    document.getElementById('profOut').innerHTML = prof;
    document.getElementById('acOut').innerHTML = ac;
    document.getElementById('hpOut').innerHTML = hplow + ' - ' + hphigh;
    document.getElementById('atkOut').innerHTML = atk;
    document.getElementById('dprOut').innerHTML = dprlow + ' - ' + dprhigh;
    document.getElementById('sdcOut').innerHTML = sdc;
    document.getElementById('xpOut').innerHTML = xp;

    console.log("Data ready");
}