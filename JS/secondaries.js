document.getElementById("secondary").innerHTML = "";

function bruen45() {
    var numAttachments = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    var totalCount = 9;
    var ran = Math.floor(Math.random() * 5) + 0;
    var attArr = [];
    for (var i = 0; i <= ran; i++) {
        var rand = numAttachments[Math.floor(Math.random() * totalCount)];
        attArr.push(rand);
        numAttachments.splice(rand, 1);
        totalCount--;
    }
    //console.log(attArr);
    // console.log("Inside the secondary js");
    var underbarrel = false;

    //Muzzles

    var muzzles = [{
            name: 'Flash Guard',
            image: 'attachments/secondaries/flashguard.png'
        },
        {
            name: 'Muzzle Brake',
            image: 'attachments/secondaries/muzzlebrake.png'
        },
        {
            name: 'Monolithic Suppressor',
            image: 'attachments/secondaries/monolithicsuppressor.png'
        },
        {
            name: 'Oil Can Suppressor',
            image: 'attachments/secondaries/oilcansuppressor.png'
        },
        {
            name: 'Compensator',
            image: 'attachments/secondaries/compensator.png'
        },
        {
            name: 'Lightweight Suppressor',
            image: 'attachments/secondaries/lightweightsuppressor.png'
        },
        {
            name: 'Tactical Suppressor',
            image: 'attachments/secondaries/tacticalsuppressor.png'
        }
    ];


    var muzzle = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt1").innerHTML = "";

    if (attArr.includes(0)) {
        muzzle = true;
        //console.log("Muzzle is true");
    }

    if (muzzle != false) {
        var ranMuzzle = Math.floor(Math.random() * muzzles.length) + 0;

        var muzzlePick = muzzles[ranMuzzle];
        //console.log(muzzlePick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt1").innerHTML = '<b>' + "Muzzle -  " + '</b>' + muzzlePick.name;
    }

    //Barrel

    var barrels = [{
            name: 'Singuard Arms Featherweight',
            image: 'attachments/secondaries/siguardarmsfeatherweight.png'
        },
        {
            name: 'Vanguard Elite',
            image: 'attachments/secondaries/vanguardelite.png'
        },
        {
            name: 'Singuard Arms Advantage',
            image: 'attachments/secondaries/siguardarmsadvantage.png'
        }
    ];


    var barrel = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt2").innerHTML = "";

    if (attArr.includes(1)) {
        barrel = true;
        //console.log("Barrel is true");
    }

    if (barrel != false) {
        var ranBarrel = Math.floor(Math.random() * barrels.length) + 0;

        var barrelPick = barrels[ranBarrel];
        //console.log(barrelPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt2").innerHTML = '<b>' + "Barrel -  " + '</b>' + barrelPick.name;
    }




    //Laser

    var lasers = [{
            name: '1mW Laser',
            image: 'attachments/lasers/1mw.png'
        },
        {
            name: '5mW Laser',
            image: 'attachments/lasers/5mw.png'
        },
        {
            name: 'Tac Laser',
            image: 'attachments/lasers/tac.png'
        }
    ];


    var laser = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt3").innerHTML = "";

    if (attArr.includes(2)) {
        laser = true;
        //console.log("laser is true");
    }

    if (laser != false) {
        var ranLaser = Math.floor(Math.random() * lasers.length) + 0;

        var laserPick = lasers[ranLaser];
        //console.log(laserPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt3").innerHTML = '<b>' + "Laser -  " + '</b>' + laserPick.name;
    }



    //Optic

    var optics = [
        {
            name: 'Cronen LP945 Mini Reflex',
            image: 'attachments/secondaries/cronenlp945.png'
        },
        {
            name: 'Solozero Optics Mini Reflex',
            image: 'attachments/secondaries/solozeromini.png'
        },
        {
            name: 'G.I. Mini Reflex',
            image: 'attachments/secondaries/gimini.png'
        }
    ];


    var optic = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt4").innerHTML = "";

    if (attArr.includes(3)) {
        optic = true;
        //console.log("optic is true");
    }

    if (optic != false) {
        var ranOptic = Math.floor(Math.random() * optics.length) + 0;

        var opticPick = optics[ranOptic];
        //console.log(opticPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt4").innerHTML = '<b>' + "Optic -  " + '</b>' + opticPick.name;
    }



    //Trigger Action

    var triggers = [{
            name: 'Lightweight Trigger',
            image: 'attachments/secondaries/lightweighttrigger.png'
        },
        {
            name: 'Heavy Duty Trigger',
            image: 'attachments/secondaries/heavydutytrigger.png'
        },
        {
            name: 'Match Grade Trigger',
            image: 'attachments/secondaries/matchgradetrigger.png'
        }
    ];


    var trigger = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt5").innerHTML = "";

    if (attArr.includes(4)) {
        trigger = true;
        //console.log("stock is true");
    }

    if (trigger != false) {
        var ranTrigger = Math.floor(Math.random() * triggers.length) + 0;

        var triggerPick = triggers[ranTrigger];
        //console.log(stockPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt5").innerHTML = '<b>' + "Trigger -  " + '</b>' + triggerPick.name;
    }



    //Ammunation

    var ammunations = [{
            name: '17 Round Mags',
            image: 'attachments/secondaries/17.png'
        },
        {
            name: '26 Round Mags',
            image: 'attachments/secondaries/26.png'
        }
    ];


    var ammunation = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt7").innerHTML = "";

    if (attArr.includes(6)) {
        ammunation = true;
        //console.log("ammunation is true");
    }

    if (ammunation != false) {
        var ranAmmunation = Math.floor(Math.random() * ammunations.length) + 0;

        var ammunationPick = ammunations[ranAmmunation];
        //console.log(ammunationPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt7").innerHTML = '<b>' + "Ammunation -  " + '</b>' + ammunationPick.name;
    }




    //RearGrip

    var reargrips = [{
            name: 'Granulated Grip Tape',
            image: 'attachments/secondaries/granulated.png'
        },
        {
            name: 'Rubberized Grip Tape',
            image: 'attachments/secondaries/rubberized.png'
        },
        {
            name: 'Stippled Grip Tape',
            image: 'attachments/secondaries/stippled.png'
        },
        {
            name: 'X16 Stock',
            image: 'attachments/secondaries/x16.png'
        }
    ];


    var reargrip = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt8").innerHTML = "";

    if (attArr.includes(7)) {
        reargrip = true;
        //console.log("rear grip is true");
    }

    if (reargrip != false) {
        var ranRearGrip = Math.floor(Math.random() * reargrips.length) + 0;

        var rearGripPick = reargrips[ranRearGrip];
        //console.log(rearGripPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt8").innerHTML = '<b>' + "Rear Grip -  " + '</b>' + rearGripPick.name;
    }


    //Perks

    var perks = [
        {
            name: 'FMJ',
            image: 'attachments/perks/fmj.png'
        },
        {
            name: 'Sleight of Hand',
            image: 'attachments/perks/sleight.png'
        },
        {
            name: 'Frangible - Wounding',
            image: 'attachments/perks/wounding.png'
        },
        {
            name: 'Heavy Hitter',
            image: 'attachments/perks/heavyhitter.png'
        },
        {
            name: 'Fully Loaded',
            image: 'attachments/perks/fullyloaded.png'
        },
        {
            name: 'Recon',
            image: 'attachments/perks/recon.png'
        },
        {
            name: 'Mo Money',
            image: 'attachments/perks/money.png'
        },
        {
            name: 'Fast Melee',
            image: 'attachments/perks/fastmelee.png'
        },
        {
            name: 'Frangible - Disabling',
            image: 'attachments/perks/disabling.png'
        },
        {
            name: 'Akimbo',
            image: 'attachments/perks/akimbo.png'
        }
    ];


    var perk = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt9").innerHTML = "";

    if (attArr.includes(8)) {
        perk = true;
        //console.log("perk is true");
    }

    if (perk != false) {
        var ranPerk = Math.floor(Math.random() * perks.length) + 0;

        var perkPick = perks[ranPerk];
        //console.log(perkPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt9").innerHTML = '<b>' + "Perk -  " + '</b>' + perkPick.name;
    }

}



function x12() {
    var numAttachments = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    var totalCount = 9;
    var ran = Math.floor(Math.random() * 5) + 0;
    var attArr = [];
    for (var i = 0; i <= ran; i++) {
        var rand = numAttachments[Math.floor(Math.random() * totalCount)];
        attArr.push(rand);
        numAttachments.splice(rand, 1);
        totalCount--;
    }
    //console.log(attArr);
    // console.log("Inside the secondary js");
    var underbarrel = false;

    //Muzzles

    var muzzles = [{
            name: 'Flash Guard',
            image: 'attachments/secondaries/flashguard.png'
        },
        {
            name: 'Muzzle Brake',
            image: 'attachments/secondaries/muzzlebrake.png'
        },
        {
            name: 'Monolithic Suppressor',
            image: 'attachments/secondaries/monolithicsuppressor.png'
        },
        {
            name: 'Oil Can Suppressor',
            image: 'attachments/secondaries/oilcansuppressor.png'
        },
        {
            name: 'Compensator',
            image: 'attachments/secondaries/compensator.png'
        },
        {
            name: 'Lightweight Suppressor',
            image: 'attachments/secondaries/lightweightsuppressor.png'
        },
        {
            name: 'Tactical Suppressor',
            image: 'attachments/secondaries/tacticalsuppressor.png'
        }
    ];


    var muzzle = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt1").innerHTML = "";

    if (attArr.includes(0)) {
        muzzle = true;
        //console.log("Muzzle is true");
    }

    if (muzzle != false) {
        var ranMuzzle = Math.floor(Math.random() * muzzles.length) + 0;

        var muzzlePick = muzzles[ranMuzzle];
        //console.log(muzzlePick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt1").innerHTML = '<b>' + "Muzzle -  " + '</b>' + muzzlePick.name;
    }

    //Barrel

    var barrels = [{
            name: 'Singuard Arms Featherweight',
            image: 'attachments/secondaries/siguardarmsfeatherweight.png'
        },
        {
            name: 'Vanguard Elite',
            image: 'attachments/secondaries/vanguardelite.png'
        },
        {
            name: 'Singuard Arms Advantage',
            image: 'attachments/secondaries/siguardarmsadvantage.png'
        }
    ];


    var barrel = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt2").innerHTML = "";

    if (attArr.includes(1)) {
        barrel = true;
        //console.log("Barrel is true");
    }

    if (barrel != false) {
        var ranBarrel = Math.floor(Math.random() * barrels.length) + 0;

        var barrelPick = barrels[ranBarrel];
        //console.log(barrelPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt2").innerHTML = '<b>' + "Barrel -  " + '</b>' + barrelPick.name;
    }




    //Laser

    var lasers = [{
            name: '1mW Laser',
            image: 'attachments/lasers/1mw.png'
        },
        {
            name: '5mW Laser',
            image: 'attachments/lasers/5mw.png'
        },
        {
            name: 'Tac Laser',
            image: 'attachments/lasers/tac.png'
        }
    ];


    var laser = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt3").innerHTML = "";

    if (attArr.includes(2)) {
        laser = true;
        //console.log("laser is true");
    }

    if (laser != false) {
        var ranLaser = Math.floor(Math.random() * lasers.length) + 0;

        var laserPick = lasers[ranLaser];
        //console.log(laserPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt3").innerHTML = '<b>' + "Laser -  " + '</b>' + laserPick.name;
    }



    //Optic

    var optics = [
        {
            name: 'Cronen LP945 Mini Reflex',
            image: 'attachments/secondaries/cronenlp945.png'
        },
        {
            name: 'Solozero Optics Mini Reflex',
            image: 'attachments/secondaries/solozeromini.png'
        },
        {
            name: 'G.I. Mini Reflex',
            image: 'attachments/secondaries/gimini.png'
        }
    ];


    var optic = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt4").innerHTML = "";

    if (attArr.includes(3)) {
        optic = true;
        //console.log("optic is true");
    }

    if (optic != false) {
        var ranOptic = Math.floor(Math.random() * optics.length) + 0;

        var opticPick = optics[ranOptic];
        //console.log(opticPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt4").innerHTML = '<b>' + "Optic -  " + '</b>' + opticPick.name;
    }



    //Trigger Action

    var triggers = [{
            name: 'Lightweight Trigger',
            image: 'attachments/secondaries/lightweighttrigger.png'
        },
        {
            name: 'Heavy Duty Trigger',
            image: 'attachments/secondaries/heavydutytrigger.png'
        },
        {
            name: 'Match Grade Trigger',
            image: 'attachments/secondaries/matchgradetrigger.png'
        }
    ];


    var trigger = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt5").innerHTML = "";

    if (attArr.includes(4)) {
        trigger = true;
        //console.log("stock is true");
    }

    if (trigger != false) {
        var ranTrigger = Math.floor(Math.random() * triggers.length) + 0;

        var triggerPick = triggers[ranTrigger];
        //console.log(stockPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt5").innerHTML = '<b>' + "Trigger -  " + '</b>' + triggerPick.name;
    }



    //Ammunation

    var ammunations = [{
            name: '17 Round Mags',
            image: 'attachments/secondaries/17.png'
        },
        {
            name: '26 Round Mags',
            image: 'attachments/secondaries/26.png'
        }
    ];


    var ammunation = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt7").innerHTML = "";

    if (attArr.includes(6)) {
        ammunation = true;
        //console.log("ammunation is true");
    }

    if (ammunation != false) {
        var ranAmmunation = Math.floor(Math.random() * ammunations.length) + 0;

        var ammunationPick = ammunations[ranAmmunation];
        //console.log(ammunationPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt7").innerHTML = '<b>' + "Ammunation -  " + '</b>' + ammunationPick.name;
    }




    //RearGrip

    var reargrips = [{
            name: 'Granulated Grip Tape',
            image: 'attachments/secondaries/granulated.png'
        },
        {
            name: 'Rubberized Grip Tape',
            image: 'attachments/secondaries/rubberized.png'
        },
        {
            name: 'Stippled Grip Tape',
            image: 'attachments/secondaries/stippled.png'
        },
        {
            name: 'X16 Stock',
            image: 'attachments/secondaries/x16.png'
        }
    ];


    var reargrip = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt8").innerHTML = "";

    if (attArr.includes(7)) {
        reargrip = true;
        //console.log("rear grip is true");
    }

    if (reargrip != false) {
        var ranRearGrip = Math.floor(Math.random() * reargrips.length) + 0;

        var rearGripPick = reargrips[ranRearGrip];
        //console.log(rearGripPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt8").innerHTML = '<b>' + "Rear Grip -  " + '</b>' + rearGripPick.name;
    }


    //Perks

    var perks = [
        {
            name: 'FMJ',
            image: 'attachments/perks/fmj.png'
        },
        {
            name: 'Sleight of Hand',
            image: 'attachments/perks/sleight.png'
        },
        {
            name: 'Frangible - Wounding',
            image: 'attachments/perks/wounding.png'
        },
        {
            name: 'Heavy Hitter',
            image: 'attachments/perks/heavyhitter.png'
        },
        {
            name: 'Fully Loaded',
            image: 'attachments/perks/fullyloaded.png'
        },
        {
            name: 'Recon',
            image: 'attachments/perks/recon.png'
        },
        {
            name: 'Mo Money',
            image: 'attachments/perks/money.png'
        },
        {
            name: 'Fast Melee',
            image: 'attachments/perks/fastmelee.png'
        },
        {
            name: 'Frangible - Disabling',
            image: 'attachments/perks/disabling.png'
        },
        {
            name: 'Akimbo',
            image: 'attachments/perks/akimbo.png'
        }
    ];


    var perk = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt9").innerHTML = "";

    if (attArr.includes(8)) {
        perk = true;
        //console.log("perk is true");
    }

    if (perk != false) {
        var ranPerk = Math.floor(Math.random() * perks.length) + 0;

        var perkPick = perks[ranPerk];
        //console.log(perkPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt9").innerHTML = '<b>' + "Perk -  " + '</b>' + perkPick.name;
    }

}




function x13auto() {
    var numAttachments = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    var totalCount = 9;
    var ran = Math.floor(Math.random() * 5) + 0;
    var attArr = [];
    for (var i = 0; i <= ran; i++) {
        var rand = numAttachments[Math.floor(Math.random() * totalCount)];
        attArr.push(rand);
        numAttachments.splice(rand, 1);
        totalCount--;
    }
    //console.log(attArr);
    // console.log("Inside the secondary js");
    var underbarrel = false;

    //Muzzles

    var muzzles = [{
            name: 'Flash Guard',
            image: 'attachments/secondaries/flashguard.png'
        },
        {
            name: 'Muzzle Brake',
            image: 'attachments/secondaries/muzzlebrake.png'
        },
        {
            name: 'Monolithic Suppressor',
            image: 'attachments/secondaries/monolithicsuppressor.png'
        },
        {
            name: 'Oil Can Suppressor',
            image: 'attachments/secondaries/oilcansuppressor.png'
        },
        {
            name: 'Compensator',
            image: 'attachments/secondaries/compensator.png'
        },
        {
            name: 'Lightweight Suppressor',
            image: 'attachments/secondaries/lightweightsuppressor.png'
        },
        {
            name: 'Tactical Suppressor',
            image: 'attachments/secondaries/tacticalsuppressor.png'
        }
    ];


    var muzzle = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt1").innerHTML = "";

    if (attArr.includes(0)) {
        muzzle = true;
        //console.log("Muzzle is true");
    }

    if (muzzle != false) {
        var ranMuzzle = Math.floor(Math.random() * muzzles.length) + 0;

        var muzzlePick = muzzles[ranMuzzle];
        //console.log(muzzlePick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt1").innerHTML = '<b>' + "Muzzle -  " + '</b>' + muzzlePick.name;
    }

    //Barrel

    var barrels = [{
            name: 'Singuard Arms Featherweight',
            image: 'attachments/secondaries/siguardarmsfeatherweight.png'
        },
        {
            name: 'Vanguard Elite',
            image: 'attachments/secondaries/vanguardelite.png'
        },
        {
            name: 'Singuard Arms Advantage',
            image: 'attachments/secondaries/siguardarmsadvantage.png'
        }
    ];


    var barrel = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt2").innerHTML = "";

    if (attArr.includes(1)) {
        barrel = true;
        //console.log("Barrel is true");
    }

    if (barrel != false) {
        var ranBarrel = Math.floor(Math.random() * barrels.length) + 0;

        var barrelPick = barrels[ranBarrel];
        //console.log(barrelPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt2").innerHTML = '<b>' + "Barrel -  " + '</b>' + barrelPick.name;
    }




    //Laser

    var lasers = [{
            name: '1mW Laser',
            image: 'attachments/lasers/1mw.png'
        },
        {
            name: '5mW Laser',
            image: 'attachments/lasers/5mw.png'
        },
        {
            name: 'Tac Laser',
            image: 'attachments/lasers/tac.png'
        }
    ];


    var laser = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt3").innerHTML = "";

    if (attArr.includes(2)) {
        laser = true;
        //console.log("laser is true");
    }

    if (laser != false) {
        var ranLaser = Math.floor(Math.random() * lasers.length) + 0;

        var laserPick = lasers[ranLaser];
        //console.log(laserPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt3").innerHTML = '<b>' + "Laser -  " + '</b>' + laserPick.name;
    }



    //Optic

    var optics = [
        {
            name: 'Cronen LP945 Mini Reflex',
            image: 'attachments/secondaries/cronenlp945.png'
        },
        {
            name: 'Solozero Optics Mini Reflex',
            image: 'attachments/secondaries/solozeromini.png'
        },
        {
            name: 'G.I. Mini Reflex',
            image: 'attachments/secondaries/gimini.png'
        }
    ];


    var optic = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt4").innerHTML = "";

    if (attArr.includes(3)) {
        optic = true;
        //console.log("optic is true");
    }

    if (optic != false) {
        var ranOptic = Math.floor(Math.random() * optics.length) + 0;

        var opticPick = optics[ranOptic];
        //console.log(opticPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt4").innerHTML = '<b>' + "Optic -  " + '</b>' + opticPick.name;
    }



    //Trigger Action

    var triggers = [{
            name: 'Lightweight Trigger',
            image: 'attachments/secondaries/lightweighttrigger.png'
        },
        {
            name: 'Heavy Duty Trigger',
            image: 'attachments/secondaries/heavydutytrigger.png'
        },
        {
            name: 'Match Grade Trigger',
            image: 'attachments/secondaries/matchgradetrigger.png'
        }
    ];


    var trigger = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt5").innerHTML = "";

    if (attArr.includes(4)) {
        trigger = true;
        //console.log("stock is true");
    }

    if (trigger != false) {
        var ranTrigger = Math.floor(Math.random() * triggers.length) + 0;

        var triggerPick = triggers[ranTrigger];
        //console.log(stockPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt5").innerHTML = '<b>' + "Trigger -  " + '</b>' + triggerPick.name;
    }



    //Ammunation

    var ammunations = [{
            name: '17 Round Mags',
            image: 'attachments/secondaries/17.png'
        },
        {
            name: '26 Round Mags',
            image: 'attachments/secondaries/26.png'
        }
    ];


    var ammunation = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt7").innerHTML = "";

    if (attArr.includes(6)) {
        ammunation = true;
        //console.log("ammunation is true");
    }

    if (ammunation != false) {
        var ranAmmunation = Math.floor(Math.random() * ammunations.length) + 0;

        var ammunationPick = ammunations[ranAmmunation];
        //console.log(ammunationPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt7").innerHTML = '<b>' + "Ammunation -  " + '</b>' + ammunationPick.name;
    }




    //RearGrip

    var reargrips = [{
            name: 'Granulated Grip Tape',
            image: 'attachments/secondaries/granulated.png'
        },
        {
            name: 'Rubberized Grip Tape',
            image: 'attachments/secondaries/rubberized.png'
        },
        {
            name: 'Stippled Grip Tape',
            image: 'attachments/secondaries/stippled.png'
        },
        {
            name: 'X16 Stock',
            image: 'attachments/secondaries/x16.png'
        }
    ];


    var reargrip = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt8").innerHTML = "";

    if (attArr.includes(7)) {
        reargrip = true;
        //console.log("rear grip is true");
    }

    if (reargrip != false) {
        var ranRearGrip = Math.floor(Math.random() * reargrips.length) + 0;

        var rearGripPick = reargrips[ranRearGrip];
        //console.log(rearGripPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt8").innerHTML = '<b>' + "Rear Grip -  " + '</b>' + rearGripPick.name;
    }


    //Perks

    var perks = [
        {
            name: 'FMJ',
            image: 'attachments/perks/fmj.png'
        },
        {
            name: 'Sleight of Hand',
            image: 'attachments/perks/sleight.png'
        },
        {
            name: 'Frangible - Wounding',
            image: 'attachments/perks/wounding.png'
        },
        {
            name: 'Heavy Hitter',
            image: 'attachments/perks/heavyhitter.png'
        },
        {
            name: 'Fully Loaded',
            image: 'attachments/perks/fullyloaded.png'
        },
        {
            name: 'Recon',
            image: 'attachments/perks/recon.png'
        },
        {
            name: 'Mo Money',
            image: 'attachments/perks/money.png'
        },
        {
            name: 'Fast Melee',
            image: 'attachments/perks/fastmelee.png'
        },
        {
            name: 'Frangible - Disabling',
            image: 'attachments/perks/disabling.png'
        },
        {
            name: 'Akimbo',
            image: 'attachments/perks/akimbo.png'
        }
    ];


    var perk = false;
    document.getElementById("secondaryAttH2").innerHTML = "";
    document.getElementById("secondaryAtt9").innerHTML = "";

    if (attArr.includes(8)) {
        perk = true;
        //console.log("perk is true");
    }

    if (perk != false) {
        var ranPerk = Math.floor(Math.random() * perks.length) + 0;

        var perkPick = perks[ranPerk];
        //console.log(perkPick.name);
        document.getElementById("secondaryAttH2").innerHTML = "";
        document.getElementById("secondaryAtt9").innerHTML = '<b>' + "Perk -  " + '</b>' + perkPick.name;
    }

}



function jokr() {
}

function pila() {
}

function rpg7() {
}