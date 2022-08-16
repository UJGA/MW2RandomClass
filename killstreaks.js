//Killstreak Sections
// --------- 3
//Personal Radar
//Shield Turret
var ks3 = [
  {
    name: "Personal Radar",
  },
  {
    name: "Shield Turret",
  },
];

// --------- 4
//Counter UAV
//UAV
//Care Package
var ks4 = [
  {
    name: "Counter UAV",
  },
  {
    name: "UAV",
  },
  {
    name: "Care Package",
  },
];
// --------- 5
//Cluster Strike
//Cruise Missile
//Precision Airstrike
var ks5 = [
  {
    name: "Cluster Strike",
  },
  {
    name: "Cruise Missile",
  },
  {
    name: "Precision Airstrike",
  },
];
// --------- 7
//Infantry Assault Vehicle
//Sentry Gun
//Wheelson
var ks7 = [
  {
    name: "Infantry Assault Vehicle",
  },
  {
    name: "Sentry Gun",
  },
  {
    name: "Wheelson",
  },
];
// --------- 8
//Emergency Airdrop
//VTOL Jet
var ks8 = [
  {
    name: "Emergency Airdrop",
  },
  {
    name: "VTOL Jet",
  },
];

// --------- 10
//White Phosphorus
//Chopper Gunner
var ks10 = [
  {
    name: "White Phosphorus",
  },
  {
    name: "Chopper Gunner",
  },
];

// --------- 11
//Support Helo
var ks11 = [
  {
    name: "Support Helo",
  },
];

// --------- 12
//Gunship
//Advanced UAV
var ks12 = [
  {
    name: "Gunship",
  },
  {
    name: "Advanced UAV",
  },
];
// --------- 15
//Juggernaut
var ks15 = [
  {
    name: "Juggernaut",
  },
];

function randomKillstreaks() {
  var numKsSections = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  var totalSections = 9;
  var ran = 2;
  var ksArr = [];
  var count = 0;
  while (count != 3) {
    // for (var i = 0; i <= 2; i++) {
    var rand = numKsSections[Math.floor(Math.random() * totalSections)];
    ksArr.push(rand);
    for (var i = 0; i < numKsSections.length; i++) {
      if (numKsSections[i] === rand) {
        numKsSections.splice(i, 1);
      }
    }
    totalSections--;

    count++;
  }

  if (ksArr.includes(0)) {
    var ks3Ran = Math.floor(Math.random() * 2) + 0;

    var ks3Pick = ks3[ks3Ran];

    if (ks3Pick.name == "Personal Radar") {
      document.getElementById("ks1").innerHTML = ks3Pick.name + "<br>";
    }

    if (ks3Pick.name == "Shield Turret") {
      document.getElementById("ks2").innerHTML = ks3Pick.name + "<br>";
    }
  }

  if (ksArr.includes(1)) {
    //console.log("ks4");
    var ks4Ran = Math.floor(Math.random() * 3) + 0;

    var ks4Pick = ks4[ks4Ran];

    if (ks4Pick.name == "Counter UAV") {
      document.getElementById("ks3").innerHTML = ks4Pick.name + "<br>";
    }

    if (ks4Pick.name == "UAV") {
      document.getElementById("ks4").innerHTML = ks4Pick.name + "<br>";
    }

    if (ks4Pick.name == "Care Package") {
      document.getElementById("ks5").innerHTML = ks4Pick.name + "<br>";
    }
  }

  if (ksArr.includes(2)) {
    //console.log("ks5");
    var ks5Ran = Math.floor(Math.random() * 3) + 0;

    var ks5Pick = ks5[ks5Ran];

    if (ks5Pick.name == "Cluster Strike") {
      document.getElementById("ks6").innerHTML = ks5Pick.name + "<br>";
    }

    if (ks5Pick.name == "Cruise Missile") {
      document.getElementById("ks7").innerHTML = ks5Pick.name + "<br>";
    }

    if (ks5Pick.name == "Precision Airstrike") {
      document.getElementById("ks8").innerHTML = ks5Pick.name + "<br>";
    }
  }

  if (ksArr.includes(3)) {
    //console.log("ks7");
    var ks7Ran = Math.floor(Math.random() * 3) + 0;

    var ks7Pick = ks7[ks7Ran];

    if (ks7Pick.name == "Infantry Assault Vehicle") {
      document.getElementById("ks9").innerHTML = ks7Pick.name + "<br>";
    }

    if (ks7Pick.name == "Sentry Gun") {
      document.getElementById("ks10").innerHTML = ks7Pick.name + "<br>";
    }

    if (ks7Pick.name == "Wheelson") {
      document.getElementById("ks11").innerHTML = ks7Pick.name + "<br>";
    }
  }

  if (ksArr.includes(4)) {
    //console.log("ks8");
    var ks8Ran = Math.floor(Math.random() * 2) + 0;

    var ks8Pick = ks8[ks8Ran];

    if (ks8Pick.name == "Emergency Airdrop") {
      document.getElementById("ks12").innerHTML = ks8Pick.name + "<br>";
    }

    if (ks8Pick.name == "VTOL Jet") {
      document.getElementById("ks13").innerHTML = ks8Pick.name + "<br>";
    }
  }

  if (ksArr.includes(5)) {
    //console.log("ks10");
    var ks10Ran = Math.floor(Math.random() * 2) + 0;

    var ks10Pick = ks10[ks10Ran];

    if (ks10Pick.name == "White Phosphorus") {
      document.getElementById("ks14").innerHTML = ks10Pick.name + "<br>";
    }

    if (ks10Pick.name == "Chopper Gunner") {
      document.getElementById("ks15").innerHTML = ks10Pick.name + "<br>";
    }
  }

  if (ksArr.includes(6)) {
    //console.log("ks11");
    var ks11Ran = Math.floor(Math.random() * 1) + 0;

    var ks11Pick = ks11[ks11Ran];

    if (ks11Pick.name == "Support Helo") {
      document.getElementById("ks16").innerHTML = ks11Pick.name + "<br>";
    }
  }

  if (ksArr.includes(7)) {
    //console.log("ks12");
    var ks12Ran = Math.floor(Math.random() * 2) + 0;

    var ks12Pick = ks12[ks12Ran];

    if (ks12Pick.name == "Gunship") {
      document.getElementById("ks17").innerHTML = ks12Pick.name + "<br>";
    }
    if (ks12Pick.name == "Advanced UAV") {
      document.getElementById("ks18").innerHTML = ks12Pick.name + "<br>";
    }
  }

  if (ksArr.includes(8)) {
    //console.log("ks15");
    var ks15Ran = Math.floor(Math.random() * 1) + 0;

    var ks15Pick = ks15[ks15Ran];

    if (ks15Pick.name == "Juggernaut") {
      document.getElementById("ks19").innerHTML = ks15Pick.name + "<br>";
    }
  }
}
