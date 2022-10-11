var primarysArray = [
  {
    name: "KASTOV-74U",
  },
  {
    name: "M16",
  },
  {
    name: "M4",
  },
  {
    name: "TAQ-56",
  },
  {
    name: "FTAC RECON",
  },
  {
    name: "LACHMANN-762",
  },
  {
    name: "FENNEC 45",
  },
  {
    name: "FSS HURRICANE",
  },
  {
    name: "LACHMANN SUB",
  },
  {
    name: "556 ICARUS",
  },
  {
    name: "RAPP H",
  },
  {
    name: "EXPEDITE 12",
  },
  {
    name: "LM-S",
  },
  {
    name: "LOCKWOOD MK2",
  },
  {
    name: "SIGNAL 50",
  },

];

var secondarysArray = [
  {
    name: "BRUEN .45",
  },
  {
    name: "X12",
  },
  {
    name: "X13 AUTO",
  },
  {
    name: "JOKR",
  },
  {
    name: "PILA",
  },
  {
    name: "RPG-7",
  },
];

var perk1Array = [
  {
    name: "Cold Blooded",
  },
];

var perk2Array = [
  {
    name: "Ghost",
  },
];

var perk3Array = [
  {
    name: "Amped",
  },
];

var lethalsArray = [
  {
    name: "Claymore",
  },
];

var tacticalsArray = [
  {
    name: "Flash Grenade",
  },
];

var fieldUpgradesArray = [
  {
    name: "Dead Silence",
    image: "upgrade/DeadSilence.png",
  },
];

function random_item() {
  document.getElementById("primaryAtt1").innerHTML = "";
  document.getElementById("primaryAtt2").innerHTML = "";
  document.getElementById("primaryAtt3").innerHTML = "";
  document.getElementById("primaryAtt4").innerHTML = "";
  document.getElementById("primaryAtt5").innerHTML = "";
  document.getElementById("primaryAtt6").innerHTML = "";
  document.getElementById("primaryAtt7").innerHTML = "";
  document.getElementById("primaryAtt8").innerHTML = "";
  document.getElementById("primaryAtt9").innerHTML = "";

  document.getElementById("secondaryAtt1").innerHTML = "";
  document.getElementById("secondaryAtt2").innerHTML = "";
  document.getElementById("secondaryAtt3").innerHTML = "";
  document.getElementById("secondaryAtt4").innerHTML = "";
  document.getElementById("secondaryAtt5").innerHTML = "";
  document.getElementById("secondaryAtt6").innerHTML = "";
  document.getElementById("secondaryAtt7").innerHTML = "";
  document.getElementById("secondaryAtt8").innerHTML = "";
  document.getElementById("secondaryAtt9").innerHTML = "";

  var element = document.getElementById("classContent");
  element.classList.add("classContent");

  //Primary
  var randomPrimaryNumber =
    Math.floor(Math.random() * primarysArray.length) + 0;
  var randomPrimary = primarysArray[randomPrimaryNumber];
  //console.log("The Random primary number is-------------------------" + randomPrimaryNumber);
  // console.log("The name is -----------------------------------------" + randomPrimary.name);
  //console.log("The image is -----------------------------------------" + randomPrimary.image);
  document.getElementById("primary").innerHTML = randomPrimary.name;
  document.getElementById("primaryH3").innerHTML = "Primary";
  document.getElementById("primaryAttH3").innerHTML = "Primary Attachments";
  // document.getElementById("primaryAttH2").innerHTML = "None";

  //Secondary
  var randomSecondary =
    secondarysArray[Math.floor(Math.random() * secondarysArray.length)];
  document.getElementById("secondary").innerHTML = randomSecondary.name;
  document.getElementById("secondaryH3").innerHTML = "Secondary";

  //Perk 1
  var randomPerk1 = perk1Array[Math.floor(Math.random() * perk1Array.length)];
  document.getElementById("perk1").innerHTML = randomPerk1.name;
  document.getElementById("perk1H3").innerHTML = "Perk 1";

  //Perk 2
  var randomPerk2 = perk2Array[Math.floor(Math.random() * perk2Array.length)];
  document.getElementById("perk2").innerHTML = randomPerk2.name;
  document.getElementById("perk2H3").innerHTML = "Perk 2";

  // const randomSecondary = null;

  if (randomPerk2.name === "Overkill") {
    while (
      randomSecondary === null ||
      randomSecondary.name === randomPrimary.name
    ) {
      // TODO Set 'randomSecondary' to a random primary weapon
      var randomSecondary =
        primarysArray[Math.floor(Math.random() * primarysArray.length)];
      document.getElementById("secondary").innerHTML = randomSecondary.name;
      document.getElementById("secondaryH3").innerHTML = "Secondary";
    }

    var randomSecondary =
      primarysArray[Math.floor(Math.random() * primarysArray.length)];
    document.getElementById("secondary").innerHTML = randomSecondary.name;
    document.getElementById("secondaryH3").innerHTML = "Secondary";
  }


  //Perk 3
  var randomPerk3 = perk3Array[Math.floor(Math.random() * perk3Array.length)];
  document.getElementById("perk3").innerHTML = randomPerk3.name;
  document.getElementById("perk3H3").innerHTML = "Perk 3";

  //Lethal
  var randomLethal =
    lethalsArray[Math.floor(Math.random() * lethalsArray.length)];
  document.getElementById("lethal").innerHTML = randomLethal.name;
  document.getElementById("lethalH3").innerHTML = "Lethal";

  //Tactical
  var randomTactical =
    tacticalsArray[Math.floor(Math.random() * tacticalsArray.length)];
  document.getElementById("tactical").innerHTML = randomTactical.name;
  document.getElementById("tacticalH3").innerHTML = "Tactical";

  //Field Upgrade
  var randomUpgrade =
    fieldUpgradesArray[Math.floor(Math.random() * fieldUpgradesArray.length)];
  document.getElementById("upgrade").innerHTML = randomUpgrade.name;
  document.getElementById("upgradeH3").innerHTML = "Field Upgrade";

  //Moves Button and Revmoves top text

  document.getElementById("myTitle").innerHTML = "";
  document.getElementById("goAgain").innerHTML =
    '<button id="mybtn" class="btn btn-primary" onclick="random_item();">Generate Again</button><br><br>';
  document.getElementById("playButton").innerHTML = "";

  // document.getElementById("primary").innerHTML = "";
  document.getElementById("primaryAtt1").innerHTML = "";
  document.getElementById("primaryAtt2").innerHTML = "";
  document.getElementById("primaryAtt3").innerHTML = "";
  document.getElementById("primaryAtt4").innerHTML = "";
  document.getElementById("primaryAtt5").innerHTML = "";
  document.getElementById("primaryAtt6").innerHTML = "";
  document.getElementById("primaryAtt7").innerHTML = "";
  document.getElementById("primaryAtt8").innerHTML = "";
  document.getElementById("primaryAtt9").innerHTML = "";

  // document.getElementById("secondary").innerHTML = "";
  document.getElementById("secondaryAtt1").innerHTML = "";
  document.getElementById("secondaryAtt2").innerHTML = "";
  document.getElementById("secondaryAtt3").innerHTML = "";
  document.getElementById("secondaryAtt4").innerHTML = "";
  document.getElementById("secondaryAtt5").innerHTML = "";
  document.getElementById("secondaryAtt6").innerHTML = "";
  document.getElementById("secondaryAtt7").innerHTML = "";
  document.getElementById("secondaryAtt8").innerHTML = "";
  document.getElementById("secondaryAtt9").innerHTML = "";

  document.getElementById("secondaryAttH3").innerHTML = "Secondary Attachments";
  // document.getElementById("secondaryAttH2").innerHTML = "Coming";

  // Call to weapon functions
  switch (randomPrimary.name) {
    case "KASTOV-74U":
      kastov74u();
      break;
    case "LACHMANN-556":
      lachmann556();
      break;
      case "M16":
      m16();
      break;
      case "M4":
      m4();
      break;
      case "TAQ-56":
      taq56();
      break;
      case "FTAC RECON":
      ftacrecon();
      break;
      case "LACHMANN-762":
      lachman762();
      break;
      case "FENNEC 45":
      fennec45();
      break;
      case "FSS HURRICANE":
      fsshurricane();
      break;
      case "LACHMANN SUB":
      lachmannsub();
      break;
      case "556 ICARUS":
      icarus556();
      break;
      case "RAPP H":
      rapph();
      break;
      case "SAKIN MG38":
      sakinmg38();
      break;
      case "EXPEDITE 12":
      expedite12();
      break;
      case "LM-S":
      lms();
      break;
      case "LOCKWOOD MK2":
      lockwoodmk2();
      break;
      case "SIGNAL 50":
      signal50();
      break;
  }
  
 

  //-------------------------------------------------------- Secondaries
  switch (randomSecondary.name) {
    case "BRUEN .45":
      bruen45();
      break;
    case "X12":
      x12();
      break;
      case "X13 AUTO":
      x13auto();
      break;
      case "JOKR":
      jokr();
      break;
      case "PILA":
      pila();
      break;
      case "RPG-7":
      rpg7();
      break;
  }

  //--------------------------------------------------------------Overkill
  switch (randomSecondary.name) {
    case "M4A1":
      m4a1o();
      break;
    case "Kilo 141":
      kilo();
      break;
  }
 
  //-------------------------------------------------------------------------

  document.getElementById("killstreaks").innerHTML = "Killstreaks";
  console.log("Hit the above line");

  document.getElementById("ks1").innerHTML = "";
  document.getElementById("ks2").innerHTML = "";
  document.getElementById("ks3").innerHTML = "";
  document.getElementById("ks4").innerHTML = "";
  document.getElementById("ks5").innerHTML = "";
  document.getElementById("ks6").innerHTML = "";
  document.getElementById("ks7").innerHTML = "";
  document.getElementById("ks8").innerHTML = "";
  document.getElementById("ks9").innerHTML = "";
  document.getElementById("ks10").innerHTML = "";
  document.getElementById("ks11").innerHTML = "";
  document.getElementById("ks12").innerHTML = "";
  document.getElementById("ks13").innerHTML = "";
  document.getElementById("ks14").innerHTML = "";
  document.getElementById("ks15").innerHTML = "";
  document.getElementById("ks16").innerHTML = "";
  document.getElementById("ks17").innerHTML = "";
  document.getElementById("ks18").innerHTML = "";
  document.getElementById("ks19").innerHTML = "";

  randomKillstreaks();
}
