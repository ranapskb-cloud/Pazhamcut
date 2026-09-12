// ========================================
// PAZHAMCUT™ GAME ENGINE
// ========================================


// HOME → BANANA LAB
function startGame() {

    const bananaLab = document.getElementById("bananaLab");

    bananaLab.scrollIntoView({
        behavior: "smooth"
    });

}


// ========================================
// HUNGER LEVEL
// ========================================

const hungerSlider = document.getElementById("hunger");
const hungerValue = document.getElementById("hungerValue");
// LEVEL 02 — BANANA OPTIMIZATION
// ========================================

function optimizeBanana() {

    const bananaLength = Number(
        document.getElementById("bananaLength").value
    );

    const people = Number(
        document.getElementById("people").value
    );

    const pieceSize = Number(
        document.getElementById("pieceSize").value
    );

    const hunger = Number(
        document.getElementById("hunger").value
    );


    // Check inputs

    if (bananaLength <= 0 || people <= 0 || pieceSize <= 0) {

        alert("🍌 The banana refuses to cooperate. Check your numbers!");

        return;
    }


    // Show optimization screen

    const optimizationScreen =
        document.getElementById("optimizationScreen");

    optimizationScreen.style.display = "flex";

    optimizationScreen.scrollIntoView({
        behavior: "smooth"
    });


    // Get optimization elements

    const progressFill =
        document.getElementById("progressFill");

    const progressPercent =
        document.getElementById("progressPercent");

    const progressText =
        document.getElementById("progressText");

    const systemMessage =
        document.getElementById("systemMessage");


    const steps = [
        document.getElementById("step1"),
        document.getElementById("step2"),
        document.getElementById("step3"),
        document.getElementById("step4")
    ];


    // Reset everything

    steps.forEach(function(step) {

        step.classList.remove("active");
        step.classList.remove("complete");

        step.querySelector("b").textContent = "WAITING";

    });


    progressFill.style.width = "0%";
    progressPercent.textContent = "0%";
    progressText.textContent = "Initializing...";


    // Save banana data for later levels

    window.bananaData = {
        length: bananaLength,
        people: people,
        pieceSize: pieceSize,
        hunger: hunger
    };
startCuttingAnimation();

    // Optimization animation

    let progress = 0;

    const messages = [
        "🍌 The banana is cooperating.",
        "📐 Geometry is getting unnecessarily serious.",
        "⚖️ Fairness calculations detected.",
        "🧠 Banana Intelligence activated."
    ];


    const interval = setInterval(function() {

        progress += 2;

        progressFill.style.width = progress + "%";
        progressPercent.textContent = progress + "%";


        // Activate calculation steps

        if (progress >= 10 && progress < 30) {

            steps[0].classList.add("active");
            steps[0].querySelector("b").textContent = "SCANNING";

            progressText.textContent =
                "Scanning banana dimensions...";

            systemMessage.textContent =
                messages[0];
        }


        if (progress >= 30 && progress < 55) {

            steps[0].classList.remove("active");
            steps[0].classList.add("complete");
            steps[0].querySelector("b").textContent = "DONE";

            steps[1].classList.add("active");
            steps[1].querySelector("b").textContent = "CALCULATING";

            progressText.textContent =
                "Calculating possible cuts...";

            systemMessage.textContent =
                messages[1];
        }


        if (progress >= 55 && progress < 80) {

            steps[1].classList.remove("active");
            steps[1].classList.add("complete");
            steps[1].querySelector("b").textContent = "DONE";

            steps[2].classList.add("active");
            steps[2].querySelector("b").textContent = "CHECKING";

            progressText.textContent =
                "Checking distribution fairness...";

            systemMessage.textContent =
                messages[2];
        }


        if (progress >= 80 && progress < 100) {

            steps[2].classList.remove("active");
            steps[2].classList.add("complete");
            steps[2].querySelector("b").textContent = "DONE";

            steps[3].classList.add("active");
            steps[3].querySelector("b").textContent = "RUNNING";

            progressText.textContent =
                "Running Banana Intelligence...";

            systemMessage.textContent =
                messages[3];
        }


        // Complete

        if (progress >= 100) {

            clearInterval(interval);

            steps[3].classList.remove("active");
            steps[3].classList.add("complete");
            steps[3].querySelector("b").textContent = "COMPLETE";

            progressText.textContent =
                "Optimization complete.";

            progressPercent.textContent = "100%";

            systemMessage.textContent =
                "🍌 The banana has been mathematically understood.";
                setTimeout(function () {
    showResults();
}, 1000);// ========================================
// LEVEL 03 — RESULT CALCULATIONS
// ========================================

function showResults() {

    const data = window.bananaData;

    if (!data) {
        return;
    }


    // Calculate possible pieces

    const possiblePieces = Math.floor(
        data.length / data.pieceSize
    );


    // Calculate leftover

    const leftover = data.length % data.pieceSize;


    // Calculate how many people can actually get a piece

    const peopleServed = Math.min(
        possiblePieces,
        data.people
    );


    // Show dashboard

    const dashboard =
        document.getElementById("resultDashboard");

    dashboard.style.display = "block";

    dashboard.scrollIntoView({
        behavior: "smooth"
    });


    // Main result

    document.getElementById("mainResult").textContent =
        possiblePieces + " pieces can be created";


    document.getElementById("resultExplanation").textContent =
        "The system analyzed " +
        data.length +
        " cm of banana for " +
        data.people +
        " people.";


    // Result cards

    document.getElementById("recommendedPieces").textContent =
        possiblePieces;


    document.getElementById("calculatedPieceSize").textContent =
        data.pieceSize + " cm";


    document.getElementById("peopleServed").textContent =
        peopleServed + " / " + data.people;


    document.getElementById("resultHunger").textContent =
        data.hunger + "%";


    // Mathematics

    document.getElementById("mathEquation").textContent =
        data.length +
        " cm ÷ " +
        data.pieceSize +
        " cm = " +
        possiblePieces +
        " pieces";


    // Leftover message

    if (leftover === 0) {

        document.getElementById("remainderText").textContent =
            "✨ Perfect division! Not even a suspicious banana fragment remains.";

    } else {

        document.getElementById("remainderText").textContent =
            "🍌 Leftover detected: " +
            leftover +
            " cm of banana remains.";
    }

}

        }

    }, 80);

}const hungeSrValue = document.getElementById("hungerValue");

hungerSlider.addEventListener("input", function () {

    hungerValue.textContent = this.value + "%";

});// ========================================
// LEVEL 04 — HUNGER INVESTIGATION
// ========================================

function startJustice() {

    const data = window.bananaData;

    if (!data) {
        return;
    }

    const justiceScreen =
        document.getElementById("bananaJustice");

    const peopleContainer =
        document.getElementById("peopleHunger");

    const justiceQuestion =
        document.getElementById("justiceQuestion");


    // Show Level 04

    justiceScreen.style.display = "block";

    justiceScreen.scrollIntoView({
        behavior: "smooth"
    });


    // Clear old people

    peopleContainer.innerHTML = "";


    // Generate hunger levels

    const hungerLevels = [];

    for (let i = 0; i < data.people; i++) {

        let hunger = Math.floor(
            Math.random() * 61
        ) + 40;

        hungerLevels.push(hunger);

    }


    // Save hunger data

    window.bananaData.hungerLevels = hungerLevels;


    // Find hungriest person

    const highestHunger =
        Math.max(...hungerLevels);

    const hungriestPerson =
        hungerLevels.indexOf(highestHunger) + 1;


    window.bananaData.hungriestPerson =
        hungriestPerson;

    window.bananaData.highestHunger =
        highestHunger;


    // Create hunger cards

    hungerLevels.forEach(function(hunger, index) {

        const card =
            document.createElement("div");

        card.className = "person-hunger";


        let status = "Mildly hungry";

        if (hunger >= 80) {
            status = "VERY HUNGRY";
        } else if (hunger >= 60) {
            status = "Hungry";
        }


        card.innerHTML = `

            <div class="person-top">

                <span class="person-name">
                     👤 ${document.querySelectorAll(".person-name")[index]?.value || "Person " + (index + 1)}
                </span>

                <span class="hunger-number">
                    ${hunger}%
                </span>

            </div>


            <div class="hunger-bar">

                <div
                    class="hunger-fill"
                    style="width: ${hunger}%">
                </div>

            </div>


            <span class="hunger-status">
                ${status}
            </span>

        `;


        peopleContainer.appendChild(card);

    });


    // Update question

    justiceQuestion.textContent =
        "Person " +
        hungriestPerson +
        " is the hungriest at " +
        highestHunger +
        "%. Who should get the bigger piece?";

}// ========================================
// JUSTICE DECISION
// ========================================

function chooseJustice(choice) {

    const data = window.bananaData;

    if (!data) {
        return;
    }


    const result =
        document.getElementById("justiceResult");

    const verdict =
        document.getElementById("justiceVerdict");

    const explanation =
        document.getElementById("justiceExplanation");

    const continueButton =
        document.getElementById("crisisButton");


    result.style.display = "flex";

    continueButton.disabled = false;


    // EQUAL PIECES

    if (choice === "equal") {

        verdict.textContent =
            "EVERYONE GETS EQUAL PIECES ⚖️";

        explanation.textContent =
            "Mathematically fair. Emotionally questionable. " +
            "Even Person " +
            data.hungriestPerson +
            " has to accept the verdict.";

        data.justiceChoice = "equal";

        data.justiceScore = 85;
    }


    // HUNGER BASED

    if (choice === "hunger") {

        verdict.textContent =
            "THE HUNGRIEST PERSON GETS MORE 🍽️";

        explanation.textContent =
            "Person " +
            data.hungriestPerson +
            " has the highest hunger level at " +
            data.highestHunger +
            "%. Hunger has successfully influenced the law.";

        data.justiceChoice = "hunger";

        data.justiceScore = 95;
    }


    // RANDOM

    if (choice === "random") {

        verdict.textContent =
            "THE BANANA HAS DECIDED 🎲🍌";

        explanation.textContent =
            "No mathematical reasoning was involved in this decision. " +
            "The banana simply felt like it.";

        data.justiceChoice = "random";

        data.justiceScore = 45;
    }


    // Scroll to result

    setTimeout(function () {

        result.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }, 150);

}// ========================================
// LEVEL 05 — BANANA CRISIS
// ========================================

function goToCrisis() {

    const data = window.bananaData;

    if (!data) {
        console.log("No banana data found.");
        return;
    }

    const crisisScreen =
        document.getElementById("bananaCrisis");

    if (!crisisScreen) {
        console.log("Banana Crisis section not found.");
        return;
    }

    const availablePieces =
        Math.floor(data.length / data.pieceSize);

    const peopleMissing =
        Math.max(0, data.people - availablePieces);

    data.availablePieces =
        availablePieces;

    data.peopleMissing =
        peopleMissing;

    document.getElementById("crisisPieces").textContent =
        availablePieces;

    document.getElementById("crisisPeople").textContent =
        data.people;

    document.getElementById("peopleMissing").textContent =
        peopleMissing;

    const crisisTitle =
        document.getElementById("crisisTitle");

    if (peopleMissing > 0) {

        crisisTitle.textContent =
            peopleMissing +
            " people have been mathematically abandoned!";

    } else {

        crisisTitle.textContent =
            "Everyone can receive a banana piece! 🎉";
    }

    crisisScreen.style.display = "block";

    crisisScreen.scrollIntoView({
        behavior: "smooth"
    });
}

function handleCrisis(choice) {
    const data = window.bananaData;
    if (!data) return;

    const crisisResult = document.getElementById("crisisResult");
    const crisisDecision = document.getElementById("crisisDecision");
    const crisisExplanation = document.getElementById("crisisExplanation");
    const ammaButton = document.getElementById("ammaButton");

    crisisResult.style.display = "block";

    if (choice === "smaller") {
        const newPieceSize = data.length / data.people;

        data.finalPieceSize = newPieceSize;
        data.crisisAction = "smaller";
        data.crisisScore = 90;

        crisisDecision.textContent = "📏 REDUCE THE PIECE SIZE!";
        crisisExplanation.textContent =
            "Emergency redistribution activated. Everyone gets a piece of about " +
            newPieceSize.toFixed(2) +
            " cm. The banana has accepted the compromise.";
    }

    else if (choice === "leftover") {
        data.crisisAction = "leftover";
        data.crisisScore = 75;

        crisisDecision.textContent = "🍌 DEPLOY THE LEFTOVER!";
        crisisExplanation.textContent =
            "Every usable banana fragment has been recruited. Not exactly elegant, but the Banana Emergency Committee approves.";
    }

    else if (choice === "accept") {
        data.crisisAction = "accept";
        data.crisisScore = 35;

        crisisDecision.textContent = "🤷 ACCEPT THE BANANA CRISIS";
        crisisExplanation.textContent =
            "The original piece size stays unchanged. Some people may remain banana-less. Humanity has chosen chaos.";
    }

    ammaButton.disabled = false;
    ammaButton.classList.add("ready");
}

function goToAmma() {
    const ammaScreen = document.getElementById("ammaOverride");

    if (!ammaScreen) return;

    ammaScreen.classList.add("active");
    ammaScreen.scrollIntoView({ behavior: "smooth" });

    document.getElementById("ammaMessage").textContent =
        "👩 Amma: “Ithentha ithra calculation okke? Oru pazham alle!”";
}
// =================================
// LEVEL 06 — AMMA DECISION
// =================================

function chooseAmma(choice) {

    const data = window.bananaData;

    const result = document.getElementById("ammaResult");
    const verdict = document.getElementById("ammaVerdict");
    const explanation = document.getElementById("ammaExplanation");
    const leftoverButton = document.getElementById("leftoverButton");
    const message = document.getElementById("ammaMessage");

    result.classList.add("show");

    if (choice === "math") {

        message.textContent =
            "👩 Amma: “Sheri... math thanne follow cheytho.”";

        verdict.textContent =
            "🧮 MATH WINS... FOR NOW";

        explanation.textContent =
            "Amma calculations kandittu onnum paranjilla. “Sheri, ningalude math thanne cheytho...” enn paranju.";

        data.ammaChoice = "math";
        data.ammaScore = 70;

    }

    else if (choice === "amma") {

        message.textContent =
            "👩 Amma: “Ellavarkkum equal aayi kodukk. Athaanu nallath.”";

        verdict.textContent =
            "👑 AMMA WINS";

        explanation.textContent =
            "All mathematical calculations temporarily ignored. Amma has taken control of the banana distribution system.";

        data.ammaChoice = "amma";
        data.ammaScore = 100;

    }

    else if (choice === "chaos") {

        message.textContent =
            "👩 Amma: “Njan parayunnath cheythaal mathi!”";

        verdict.textContent =
            "🚨 AMMA OVERRIDE ACTIVATED";

        explanation.textContent =
            "The system has stopped arguing. Amma's decision is now officially more powerful than the algorithm.";

        data.ammaChoice = "chaos";
        data.ammaScore = 90;
    }

    leftoverButton.disabled = false;
    leftoverButton.classList.add("ready");

    result.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}
// =================================
// LEVEL 07 — LEFTOVER LAB CONNECTION
// =================================

function goToLeftover() {

    const data = window.bananaData;

    if (!data) return;

    const leftoverLab = document.getElementById("leftoverLab");

    if (!leftoverLab) {
        alert("🗑️ Leftover Lab is not built yet!");
        return;
    }

    leftoverLab.style.display = "block";

    leftoverLab.scrollIntoView({
        behavior: "smooth"
    });
}
function chooseLeftover(choice) {

    const data = window.bananaData;

    if (!data) return;

    const result = document.getElementById("leftoverResult");
    const emoji = document.getElementById("leftoverEmoji");
    const verdict = document.getElementById("leftoverVerdict");
    const explanation = document.getElementById("leftoverExplanation");

    result.style.display = "block";

    const leftover =
        data.length % data.pieceSize;

    document.getElementById("leftoverAmount").textContent =
        leftover.toFixed(2);

    if (choice === "shake") {

        emoji.textContent = "🥤";

        verdict.textContent =
            "BANANA SHAKE PROTOCOL ACTIVATED";

        explanation.textContent =
            "Excellent decision. The leftover has been promoted from mathematical waste to a delicious beverage.";

        data.leftoverChoice = "shake";
        data.leftoverScore = 95;

    }

    else if (choice === "save") {

        emoji.textContent = "🧊";

        verdict.textContent =
            "LEFTOVER STORED SUCCESSFULLY";

        explanation.textContent =
            "The suspicious banana fragment has been safely reserved for Future You™.";

        data.leftoverChoice = "save";
        data.leftoverScore = 80;

    }

    else if (choice === "amma") {

        emoji.textContent = "👩";

        verdict.textContent =
            "AMMA HAS A PLAN";

        explanation.textContent =
            "Amma looked at the leftover for 2 seconds and somehow already knew exactly what to do.";

        data.leftoverChoice = "amma";
        data.leftoverScore = 100;

    }

    else if (choice === "throw") {

        emoji.textContent = "🗑️";

        verdict.textContent =
            "THE BANANA HAS BEEN DISMISSED";

        explanation.textContent =
            "After all those calculations... we threw it away. Science has suffered a minor setback.";

        data.leftoverChoice = "throw";
        data.leftoverScore = 30;
    }

    result.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}
function goToAnalysis() {

    const data = window.bananaData;

    if (!data) return;

    const analysisScreen =
        document.getElementById("finalAnalysis");

    if (!analysisScreen) {
        alert("📊 Final Analysis is not built yet!");
        return;
    }

    analysisScreen.style.display = "block";

    updateFinalAnalysis();

    analysisScreen.scrollIntoView({
        behavior: "smooth"
    });
}
function updateFinalAnalysis() {

    const data = window.bananaData;

    if (!data) return;

    const pieces = Math.floor(data.length / data.pieceSize);
    const leftover = data.length % data.pieceSize;

    document.getElementById("finalLength").textContent =
        data.length + " cm";

    document.getElementById("finalPeople").textContent =
        data.people;

    document.getElementById("finalPieces").textContent =
        pieces;

    document.getElementById("finalPieceSize").textContent =
        data.pieceSize + " cm";

    document.getElementById("finalJustice").textContent =
        data.justiceChoice || "—";

    document.getElementById("finalAmma").textContent =
        data.ammaChoice || "—";

    document.getElementById("finalLeftover").textContent =
        leftover.toFixed(2) + " cm";

    const justiceScore = data.justiceScore || 0;
    const crisisScore = data.crisisScore || 0;
    const ammaScore = data.ammaScore || 0;
    const leftoverScore = data.leftoverScore || 0;

    const finalScore = Math.round(
        (justiceScore +
        crisisScore +
        ammaScore +
        leftoverScore) / 4
    );

    document.getElementById("finalScore").textContent =
        finalScore + " / 100";

    document.getElementById("finalConclusion").textContent =
        "The system analysed the banana, the people, the hunger levels, " +
        "the crisis, Amma's intervention and the leftover. " +
        "Against all reasonable expectations, we now understand the banana.";
}
function goToVerdict() {

    const data = window.bananaData;

    if (!data) return;

    const verdictScreen =
        document.getElementById("finalVerdict");

    if (!verdictScreen) {
        alert("🏆 Final Verdict is not built yet!");
        return;
    }

    const justiceScore = data.justiceScore || 0;
    const crisisScore = data.crisisScore || 0;
    const ammaScore = data.ammaScore || 0;
    const leftoverScore = data.leftoverScore || 0;

    const finalScore = Math.round(
        (justiceScore +
        crisisScore +
        ammaScore +
        leftoverScore) / 4
    );

    document.getElementById("verdictScore").textContent =
        finalScore + " / 100";

    document.getElementById("verdictJustice").textContent =
        justiceScore;

    document.getElementById("verdictCrisis").textContent =
        crisisScore;

    document.getElementById("verdictAmma").textContent =
        ammaScore;

    document.getElementById("verdictLeftover").textContent =
        leftoverScore;

    let title;
    let message;

    if (finalScore >= 90) {

        title = "🍌 BANANA GENIUS";
        message =
            "You handled the banana with suspiciously impressive efficiency.";

    } else if (finalScore >= 75) {

        title = "🏆 BANANA MASTER";
        message =
            "A strong performance. The banana is reasonably impressed.";

    } else if (finalScore >= 50) {

        title = "😌 CERTIFIED BANANA MANAGER";
        message =
            "Not perfect. Not terrible. The banana distribution survived.";

    } else {

        title = "💀 BANANA CHAOS AGENT";
        message =
            "The mathematics collapsed, but at least it was entertaining.";
    }

    document.getElementById("verdictTitle").textContent =
        title;

    document.getElementById("verdictMessage").textContent =
        message;

    verdictScreen.style.display = "block";

    verdictScreen.scrollIntoView({
        behavior: "smooth"
    });
}
function restartGame() {

    window.bananaData = null;

    document.getElementById("bananaLength").value = 20;
    document.getElementById("people").value = 6;
    document.getElementById("pieceSize").value = 3;
    document.getElementById("hunger").value = 85;
    document.getElementById("hungerValue").textContent = "85";

    document.getElementById("finalVerdict").style.display = "none";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
// =================================
// 👥 PERSON NAME INPUTS
// =================================

function createNameInputs() {

    const peopleInput =
        document.getElementById("people");

    const container =
        document.getElementById("nameInputs");

    if (!peopleInput || !container) return;

    const count =
        parseInt(peopleInput.value) || 1;

    container.innerHTML = "";

    for (let i = 1; i <= count; i++) {

        const box =
            document.createElement("div");

        box.className =
            "person-name-box";

        box.innerHTML = `
            <span>👤 Person ${i}</span>

            <input
                type="text"
                class="person-name"
                placeholder="Enter name"
                value="Person ${i}">

            <label>🍽️ Hunger Level</label>

            <div class="person-hunger-row">

                <input
                    type="range"
                    class="person-hunger"
                    min="0"
                    max="100"
                    value="50"
                    oninput="updatePersonHunger(this)">

                <span class="person-hunger-value">
                    50%
                </span>

            </div>

            <label>🤔 Why are you hungry?</label>

            <input
                type="text"
                class="hunger-reason"
                placeholder="Example: Skipped breakfast">
        `;

        container.appendChild(box);
    }
}
function updatePersonHunger(slider) {

    const value =
        slider.value;

    const display =
        slider.parentElement.querySelector(
            ".person-hunger-value"
        );

    display.textContent =
        value + "%";
}

document.addEventListener("DOMContentLoaded", function () {

    const peopleInput = document.getElementById("people");

    if (peopleInput) {
        peopleInput.addEventListener("input", createNameInputs);
    }

    createNameInputs();
});
// =========================================
// 🍌 PAZHAMCUT™ — BANANA CUTTING ANIMATION
// =========================================
function startCuttingAnimation() {

    const data = window.bananaData;

    if (!data) return;

    const banana = document.getElementById("bananaWhole");
    const knife = document.getElementById("cuttingKnife");
    const body = document.getElementById("bananaCutBody");
    const counter = document.getElementById("cutCounter");
    const message = document.getElementById("cutMessage");
    const pieceCount = document.getElementById("cutPieceCount");

    if (!banana || !knife || !body) return;

    const totalPieces = Math.floor(
        data.length / data.pieceSize
    );

    const totalCuts = Math.max(0, totalPieces - 1);

    banana.style.display = "block";
    body.style.display = "none";
    body.innerHTML = "";

    counter.textContent = "SCANNING";
    message.textContent = "Banana detected...";
    pieceCount.textContent = "0";

    setTimeout(function () {

        counter.textContent = "READY";
        message.textContent =
            "Preparing precision cutting sequence...";

    }, 700);

    setTimeout(function () {

        if (totalPieces <= 1) {

            banana.style.display = "none";
            body.style.display = "flex";

            const piece = document.createElement("div");
            piece.className = "banana-cut-piece";

            body.appendChild(piece);

            counter.textContent = "COMPLETE";
            message.textContent =
                "No cutting required. One perfect piece.";

            pieceCount.textContent = "1";

            return;
        }

        counter.textContent = "CUTTING";
        message.textContent =
            "Precision cutting sequence started...";

        let cutNumber = 0;

        const cutInterval = setInterval(function () {

            cutNumber++;

            /* Knife animation */

            knife.style.animation = "none";
            void knife.offsetWidth;
            knife.style.animation =
                "knifeCut 0.55s ease";

            counter.textContent =
                "CUT #" + cutNumber + " / " + totalCuts;

            message.textContent =
                "Cutting banana into precision segments...";

            setTimeout(function () {

                /* After every cut, show one more banana segment */

                banana.style.display = "none";
                body.style.display = "flex";
                body.innerHTML = "";

                const currentPieces = cutNumber + 1;

                for (let i = 0; i < currentPieces; i++) {

                    const piece =
                        document.createElement("div");

                    piece.className =
                        "banana-cut-piece";

                    body.appendChild(piece);
                }

                pieceCount.textContent =
                    currentPieces;

            }, 300);

            if (cutNumber >= totalCuts) {

                clearInterval(cutInterval);

                setTimeout(function () {

                    counter.textContent = "COMPLETE";

                    message.textContent =
                        totalPieces +
                        " banana pieces successfully created.";

                    pieceCount.textContent =
                        totalPieces;

                }, 500);
            }

        }, 800);

    }, 1300);
}