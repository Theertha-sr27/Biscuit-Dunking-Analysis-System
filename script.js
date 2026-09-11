// Biscuit Dunking Analysis System (B.D.A.S.)

function analyzeBiscuit() {

    // Get values from HTML
    let biscuit = document.getElementById("biscuit").value;
    let temperature = parseFloat(document.getElementById("temperature").value);
    let depth = parseFloat(document.getElementById("depth").value);

    // Base dunking time for each biscuit
    let baseTime;

    if (biscuit === "Tigerbiscuit") {
        baseTime = 3.0;
    }
    else if (biscuit === "Parle-G") {
        baseTime = 2.5;
    }
    else if (biscuit === "Oreo") {
        baseTime = 4.0;
    }
    else if (biscuit === "Bourbon") {
        baseTime = 3.5;
    }
    else if (biscuit === "Happy Happy") {
        baseTime = 5.0;
    }

    // Check temperature
    if (temperature <= 0) {
        alert("0 - 100 degree കൊടുക്ക് Bro...!");
        return;
    }

    // Check dunking depth
    if (depth < 1 || depth > 100) {
        alert("Dunking depth must be between 1 and 100%!");
        return;
    }

    // Temperature factor
    let temperatureFactor;

    if (temperature >= 80) {
        temperatureFactor = 0.7;
    }
    else if (temperature >= 60) {
        temperatureFactor = 1.0;
    }
    else {
        temperatureFactor = 1.2;
    }

    // Calculate recommended dunking time
    let dunkTime =
        baseTime *
        temperatureFactor *
        (0.5 + depth / 200);

    // Calculate survival percentage
    let survival = 100 - (dunkTime * 15);

    if (survival < 0) {
        survival = 0;
    }

    if (survival > 100) {
        survival = 100;
    }

    survival = Math.round(survival);

    // Calculate break risk
    let breakRisk = 100 - survival;

    // Verdict
    let verdict;

    if (survival >= 80) {
        verdict = "SAFE! The biscuit is living its best life 😎";
    }
    else if (survival >= 60) {
        verdict = "CAUTION! Remove the biscuit soon ⚠️";
    }
    else if (survival >= 30) {
        verdict =
            "DANGER! Biscuit structural integrity is questionable 😭";
    }
    else {
        verdict = "SAVE THE BISCUIT!!! 🚨🍪";
    }

    // Display result
    document.getElementById("result").innerHTML = `
        <h2>🍪 BISCUIT REPORT</h2>

        <p><b>Biscuit:</b> ${biscuit}</p>

        <p><b>Tea Temperature:</b>
        ${temperature} °C</p>

        <p><b>Dunking Depth:</b>
        ${depth}%</p>

        <hr>

        <p><b>Recommended Dunk Time:</b>
        ${dunkTime.toFixed(1)} seconds</p>

        <p><b>Biscuit Survival:</b>
        ${survival}%</p>

        <p><b>Break Risk:</b>
        ${breakRisk}%</p>

        <hr>

        <h3>VERDICT:</h3>
        <p>${verdict}</p>
    `;

    
    startTimer(Math.ceil(dunkTime));
}


// Countdown timer
function startTimer(seconds) {

    let timer = seconds;

    document.getElementById("timer").innerHTML =
        "🍪 Timer: " + timer + " seconds";

    let countdown = setInterval(function () {

        timer--;

        document.getElementById("timer").innerHTML =
            "🍪 Timer: " + timer + " seconds";

        if (timer <= 0) {

            clearInterval(countdown);

            document.getElementById("timer").innerHTML =
                "🚨 REMOVE THE BISCUIT!!! 🚨";

            alert("🚨 REMOVE THE BISCUIT!!! 🍪☕");
        }

    }, 1000);
}