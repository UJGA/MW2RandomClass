var ks3 = [
  {
    name: "Personal Radar",
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
    // numKsSections.splice(rand, 1);
    totalSections--;
    //console.log("The KS Rand is " + " " + rand);
    //console.log("The KS Num array is " + " " + numKsSections);
    count++;
  }

  if (ksArr.includes(0)) {
    //console.log("ks3");

    var ks3Ran = Math.floor(Math.random() * 2) + 0;

    var ks3Pick = ks3[ks3Ran];

    if (ks3Pick.name == "Personal Radar") {
      document.getElementById("ks1").innerHTML = ks3Pick.name;
    }
  }
}
