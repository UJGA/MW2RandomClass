var primarysArray = [
  {
    name: "725",
  },
];

var secondarysArray = [
  {
    name: ".50 GS",
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

  // if (randomPerk2.name == 'Overkill') {
  //   var randomSecondary = primarysArray[Math.floor(Math.random() * primarysArray.length)];
  //   document.getElementById("secondary").innerHTML = randomSecondary.name + '<br>' + '<img  style="height:70px;"  src="' + randomSecondary.image + '">';
  //   document.getElementById("secondaryH3").innerHTML = "Secondary";

  //   if (randomPrimary.name == randomSecondary.name) {
  //     var randomSecondary = primarysArray[Math.floor(Math.random() * primarysArray.length)];
  //     document.getElementById("secondary").innerHTML = randomSecondary.name + '<br>' + '<img  style="height:70px;"  src="' + randomSecondary.image + '">';
  //     document.getElementById("secondaryH3").innerHTML = "Secondary";
  //   }
  // }

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
    case "M4A1":
      m4a1();
      break;
    case "Kilo 141":
      kilo141();
      break;
    case "FAL":
      fal();
      break;
    case "FR 5.56":
      fr556();
      break;
    case "Oden":
      oden();
      break;
    case "M13":
      m13();
      break;
    case "FN Scar 17":
      fnscar17();
      break;
    case "AK-47":
      ak47();
      break;
    case "RAM-7":
      ram7();
      break;
    case "Grau 5.561":
      grau();
      break;
    case "AUG":
      aug();
      break;
    case "P90":
      p90();
      break;
    case "MP5":
      mp5();
      break;
    case "Uzi":
      uzi();
      break;
    case "PP19 Bizon":
      pp19();
      break;
    case "MP7":
      mp7();
      break;
    case "Striker 45":
      striker45();
      break;
    case "Fennec":
      fennec();
      break;
    case "ISO":
      iso();
      break;
    case "Rytec AMR":
      rytec();
      break;
    case "SKS":
      sks();
      break;
    case "Bruen Mk9":
      bruen();
      break;
    case "VLK Rogue":
      vlk();
      break;
    case "AN-94":
      an94();
      break;
    case "CR-56 AMAX":
      cr56();
      break;
    case "Model 680":
      model680();
      break;
    case "R9-0 Shotgun":
      r90();
      break;
    case "725":
      s725();
      break;
    case "Origin 12 Shotgun":
      origin12();
      break;
    case "PKM":
      pkm();
      break;
    case "SA87":
      sa87();
      break;
    case "M91":
      m91();
      break;
    case "MG34":
      mg34();
      break;
    case "Holger-26":
      holger();
      break;
    case "EBR-14":
      ebr();
      break;
    case "MK2 Carbine":
      mk2();
      break;
    case "Kar98k":
      kar();
      break;
    case "Crossbow":
      crossbow();
      break;
    case "Dragunov":
      dragunov();
      break;
    case "HDR":
      hdr();
      break;
    case "AX-50":
      ax50();
      break;
    case "Riot SHield":
      riot();
      break;
  }
  // if (randomPrimary.name == "M4A1") {
  //   m4a1();
  // }

  // if (randomPrimary.name == "Kilo 141") {
  //   kilo141();
  // }

  // if (randomPrimary.name == "FAL") {
  //   fal();
  // }

  // if (randomPrimary.name == "FR 5.56") {
  //   fr556();
  // }

  // if (randomPrimary.name == "Oden") {
  //   oden();
  // }

  // if (randomPrimary.name == "M13") {
  //   m13();
  // }

  // if (randomPrimary.name == "FN Scar 17") {
  //   fnscar17();
  // }

  // if (randomPrimary.name == "AK-47") {
  //   ak47();
  // }
  // if (randomPrimary.name == "RAM-7") {
  //   ram7();
  // }
  // if (randomPrimary.name == "Grau 5.56") {
  //   grau();
  // }

  // if (randomPrimary.name == "AUG") {
  //   aug();
  // }

  // if (randomPrimary.name == "P90") {
  //   p90();
  // }

  // if (randomPrimary.name == "MP5") {
  //   mp5();
  // }

  // if (randomPrimary.name == "Uzi") {
  //   uzi();
  // }

  // if (randomPrimary.name == "PP19 Bizon") {
  //   pp19();
  // }

  // if (randomPrimary.name == "MP7") {
  //   mp7();
  // }

  // if (randomPrimary.name == "Striker 45") {
  //   striker45();
  // }

  // if (randomPrimary.name == "Fennec") {
  //   fennec();
  // }
  // if (randomPrimary.name == "ISO") {
  //   iso();
  // }
  // if (randomPrimary.name == "Rytec AMR") {
  //   rytec();
  // }
  // if (randomPrimary.name == "SKS") {
  //   sks();
  // }
  // if (randomPrimary.name == "Bruen Mk9") {
  //   bruen();
  // }
  // if (randomPrimary.name == "VLK Rogue") {
  //   vlk();
  // }
  // if (randomPrimary.name == "AN-94") {
  //   an94();
  // }
  // if (randomPrimary.name == "CR-56 AMAX") {
  //   cr56();
  // }

  // if (randomPrimary.name == "Model 680") {
  //   model680();
  // }

  // if (randomPrimary.name == "R9-0 Shotgun") {
  //   r90();
  // }

  // if (randomPrimary.name == "725") {
  //   s725();
  // }

  // if (randomPrimary.name == "Origin 12 Shotgun") {
  //   origin12();
  // }

  // if (randomPrimary.name == "PKM") {
  //   pkm();
  // }
  // if (randomPrimary.name == "SA87") {
  //   sa87();
  // }
  // if (randomPrimary.name == "M91") {
  //   m91();
  // }
  // if (randomPrimary.name == "MG34") {
  //   mg34();
  // }
  // if (randomPrimary.name == "Holger-26") {
  //   holger();
  // }

  // if (randomPrimary.name == "EBR-14") {
  //   ebr();
  // }
  // if (randomPrimary.name == "MK2 Carbine") {
  //   mk2();
  // }
  // if (randomPrimary.name == "Kar98k") {
  //   kar();
  // }
  // if (randomPrimary.name == "Crossbow") {
  //   crossbow();
  // }

  // if (randomPrimary.name == "Dragunov") {
  //   dragunov();
  // }
  // if (randomPrimary.name == "HDR") {
  //   hdr();
  // }
  // if (randomPrimary.name == "AX-50") {
  //   ax50();
  // }

  // if (randomPrimary.name == "Riot Shield") {
  //   riot();
  // }

  //-------------------------------------------------------- Secondaries
  switch (randomSecondary.name) {
    case ".50 GS":
      gs50();
      break;
    case "X16":
      x16();
      break;
    case "1911":
      s1911();
      break;
    case ".357":
      s357();
      break;
    case "M19":
      m19();
      break;
    case "Renetti":
      renetti();
      break;
  }
  //  if (randomSecondary.name == ".50 GS") {
  //   gs50();
  // }

  // if (randomSecondary.name == "X16") {
  //   x16();
  // }

  // if (randomSecondary.name == "1911") {
  //   s1911();
  // }

  // if (randomSecondary.name == ".357") {
  //   s357();
  // }

  // if (randomSecondary.name == "M19") {
  //   m19();
  // }

  // if (randomSecondary.name == "Renetti") {
  //   renetti();
  // }

  //--------------------------------------------------------------Overkill
  switch (randomSecondary.name) {
    case "M4A1":
      m4a1o();
      break;
    case "Kilo 141":
      kilo();
      break;
    case "FAL":
      falo();
      break;
    case "FR 5.56":
      fr556o();
      break;
    case "Oden":
      odeno();
      break;
    case "M13":
      m13o();
      break;
    case "FN Scar 17":
      fnscar17o();
      break;
    case "AK-47":
      ak47o();
      break;
    case "RAM-7":
      ram7o();
      break;
    case "Grau 5.561":
      grauo();
      break;
    case "AUG":
      augo();
      break;
    case "P90":
      p90o();
      break;
    case "MP5":
      mp5o();
      break;
    case "Uzi":
      uzio();
      break;
    case "PP19 Bizon":
      pp19o();
      break;
    case "MP7":
      mp7o();
      break;
    case "Striker 45":
      striker45o();
      break;
    case "Fennec":
      fenneco();
      break;
    case "ISO":
      isoo();
      break;
    case "Rytec AMR":
      ryteco();
      break;
    case "SKS":
      skso();
      break;
    case "Bruen Mk9":
      brueno();
      break;
    case "VLK Rogue":
      vlko();
      break;
    case "AN-94":
      an94o();
      break;
    case "CR-56 AMAX":
      cr56o();
      break;
    case "Model 680":
      model680o();
      break;
    case "R9-0 Shotgun":
      r90o();
      break;
    case "725":
      s725o();
      break;
    case "Origin 12 Shotgun":
      origin12o();
      break;
    case "PKM":
      pkmo();
      break;
    case "SA87":
      sa87o();
      break;
    case "M91":
      m91o();
      break;
    case "MG34":
      mg34o();
      break;
    case "Holger-26":
      holgero();
      break;
    case "EBR-14":
      ebro();
      break;
    case "MK2 Carbine":
      mk2o();
      break;
    case "Kar98k":
      karo();
      break;
    case "Crossbow":
      crossbowo();
      break;
    case "Dragunov":
      dragunovo();
      break;
    case "HDR":
      hdro();
      break;
    case "AX-50":
      ax50o();
      break;
    case "Riot SHield":
      rioto();
      break;
  }
  // if (randomSecondary.name == "M4A1") {
  //   m4a1o();
  // }

  // if (randomSecondary.name == "Kilo 141") {
  //   kilo141o();
  // }

  // if (randomSecondary.name == "FAL") {
  //   falo();
  // }

  // if (randomSecondary.name == "FR 5.56") {
  //   fr556o();
  // }

  // if (randomSecondary.name == "Oden") {
  //   odeno();
  // }

  // if (randomSecondary.name == "M13") {
  //   m13o();
  // }

  // if (randomSecondary.name == "FN Scar 17") {
  //   fnscar17o();
  // }

  // if (randomSecondary.name == "AK-47") {
  //   ak47o();
  // }
  // if (randomSecondary.name == "RAM-7") {
  //   ram7o();
  // }
  // if (randomSecondary.name == "Grau 5.56") {
  //   grauo();
  // }

  // if (randomSecondary.name == "AUG") {
  //   augo();
  // }

  // if (randomSecondary.name == "P90") {
  //   p90o();
  // }

  // if (randomSecondary.name == "MP5") {
  //   mp5o();
  // }

  // if (randomSecondary.name == "Uzi") {
  //   uzio();
  // }

  // if (randomSecondary.name == "PP19 Bizon") {
  //   pp19o();
  // }

  // if (randomSecondary.name == "MP7") {
  //   mp7o();
  // }

  // if (randomSecondary.name == "Striker 45") {
  //   striker45o();
  // }

  // if (randomSecondary.name == "Fennec") {
  //   fenneco();
  // }
  // if (randomSecondary.name == "ISO") {
  //   isoo();
  // }
  // if (randomSecondary.name == "Rytec AMR") {
  //   ryteco();
  // }
  // if (randomSecondary.name == "SKS") {
  //   skso();
  // }
  // if (randomSecondary.name == "Bruen Mk9") {
  //   brueno();
  // }
  // if (randomSecondary.name == "VLK Rogue") {
  //   vlko();
  // }
  // if (randomSecondary.name == "AN-94") {
  //   an94o();
  // }
  // if (randomSecondary.name == "CR-56 AMAX") {
  //   cr56o();
  // }

  // if (randomSecondary.name == "Model 680") {
  //   model680o();
  // }

  // if (randomSecondary.name == "R9-0 Shotgun") {
  //   r90o();
  // }

  // if (randomSecondary.name == "725") {
  //   s725o();
  // }

  // if (randomSecondary.name == "Origin 12 Shotgun") {
  //   origin12o();
  // }

  // if (randomSecondary.name == "PKM") {
  //   pkmo();
  // }
  // if (randomSecondary.name == "SA87") {
  //   sa87o();
  // }
  // if (randomSecondary.name == "M91") {
  //   m91o();
  // }
  // if (randomSecondary.name == "MG34") {
  //   mg34o();
  // }
  // if (randomSecondary.name == "Holger-26") {
  //   holgero();
  // }

  // if (randomSecondary.name == "EBR-14") {
  //   ebro();
  // }
  // if (randomSecondary.name == "MK2 Carbine") {
  //   mk2o();
  // }
  // if (randomSecondary.name == "Kar98k") {
  //   karo();
  // }
  // if (randomSecondary.name == "Crossbow") {
  //   crossbowo();
  // }

  // if (randomSecondary.name == "Dragunov") {
  //   dragunovo();
  // }
  // if (randomSecondary.name == "HDR") {
  //   hdro();
  // }
  // if (randomSecondary.name == "AX-50") {
  //   ax50o();
  // }

  // if (randomSecondary.name == "Riot Shield") {
  //   rioto();
  // }

  // if (randomSecondary.name == "Fennec") {
  //   fenneco();
  // }
  // if (randomSecondary.name == "ISO") {
  //   isoo();
  // }
  // if (randomSecondary.name == "Rytec AMR") {
  //   ryteco();
  // }
  // if (randomSecondary.name == "SKS") {
  //   skso();
  // }
  // if (randomSecondary.name == "Bruen Mk9") {
  //   brueno();
  // }
  // if (randomSecondary.name == "VLK Rogue") {
  //   vlko();
  // }
  // if (randomSecondary.name == "AN-94") {
  //   an94o();
  // }
  // if (randomSecondary.name == "CR-56 AMAX") {
  //   cr56o();
  // }

  //-------------------------------------------------------------------------

  document.getElementById("killstreaks").innerHTML = "Killstreaks";

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
